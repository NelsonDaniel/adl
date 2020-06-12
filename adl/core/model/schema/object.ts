import { Dictionary, values } from '@azure-tools/linq';
import { isAnonymous } from '@azure-tools/sourcemap';
import { InterfaceDeclaration, PropertySignature, PropertySignatureStructure, StructureKind } from 'ts-morph';
import { normalizeIdentifier } from '../../support/codegen';
import { createDocs, getTagValue, setTag } from '../../support/doc-tag';
import { addImportsTo, addNullable, getInnerText, TypeDeclaration } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Collection, CollectionImpl, Identity, ReadOnlyCollection, ReadOnlyCollectionImpl } from '../types';
import { NamedElement } from './NamedElement';
import { Schema, TSSchema } from './schema';
import { TypeReference } from './type';

export interface ObjectSchema extends Schema {
  /** schemas that this object extends */
  readonly parents: Collection<TSSchema<TypeDeclaration>>;
  
  /** the collection of properties that are in this object< */
  readonly properties: ReadOnlyCollection<Property>;
  
  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;

  /** the desired name when generating code */
  clientName?: string;

  createProperty(name: string, schema: Schema, initializer?: Partial<Property>): Property;
}

export interface PropInitializer extends Partial<Property> {
  name: string;
  schema: Schema;
}

export class ObjectSchemaImpl extends TSSchema<InterfaceDeclaration> implements ObjectSchema {
  addParent(...parents: Array<TSSchema<TypeDeclaration>> ) {
    // ensure we have an import to the type
    // and add it to the list

    for(const parent of parents) {
      this.node.addExtends(this.getTypeReference(parent));
    }
  }

  removeParent(parent: TSSchema<TypeDeclaration>) {
    // remove the parent from the schema
    for( const base of this.node.getExtends() ) {
      // todo: how do we identify which base is the one we're removing.
      // have to debug this to find out.
      // if( /**??? */ ) {
      // this is the one, remove it
      // this.node.removeExtends(base);
      //  break;
      // }
      throw new Error('remove not implemented');
    }

  }
  getParents(): Array<TSSchema<TypeDeclaration>> {
    // return a wrapper object for each typedecl
    return this.node.getBaseDeclarations().map( each => new TSSchema<TypeDeclaration>('',each)  );
  }

  getProperties() {
    return this.node.getProperties( ).map( each => new PropertyImpl(each));
  } 

  constructor(node: InterfaceDeclaration) {
    super('object', node);
    this.parents = new CollectionImpl(this, this.addParent, this.removeParent, this.getParents);
    this.properties = new ReadOnlyCollectionImpl(this, this.getProperties);
  }
   
  parents: Collection<TSSchema<TypeDeclaration>>;
  properties: ReadOnlyCollection<Property>;
 
  maxProperties?: number;
  minProperties?: number;
  clientName?: string;

  createProperty(name: string, schema: Schema, initializer?: Partial<Property>): Property {
    
    // the type is either a reference of a type that we have 
    // or it's an anonymous type that gets expanded
    const type = this.project.getTypeReference(schema,this.node.getSourceFile()) || 'any';

    const result = new PropertyImpl(this.node.addProperty({
      //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
      name: normalizeIdentifier(name),
      type
    }));

    result.initialize(initializer);

    return result;
  }

  get requiredTypeDeclarations(): Array<TypeDeclaration> {
    if( this.isInline ) {
      const x = this.node.getProperties().map(each => each.getType())  ;
      return [...<any>x , this.node];
    }
    return [this.node] ;
  }
}

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: normalizeIdentifier(name),
    type: initializer?.nullable ? addNullable(typeReference.declaration) : typeReference.declaration,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}

export interface PropertyInitializer extends SchemaInitializer { 
  required?: boolean;
}

export interface VersionedEntity { 
  since?: string;
  deprecated?: string;
  deleted?: string;
  renamed?: string;
}

export interface SchemaInitializer extends VersionedEntity {
  description?: string;
  summary?: string;
  clientName?: string;
  nullable?: boolean;
  readOnly?: boolean;
  tags?: Dictionary<string|undefined>;
}

export interface ObjectSchemaInitializer extends SchemaInitializer { 
  parents: Array<TypeReference>;
  properties: Array<PropertySignatureStructure>;
  requiredReferences: Array<TypeReference>;
}

export function createInterface(api: ApiModel, identity: Identity, initializer?: Partial<ObjectSchemaInitializer> ): TypeReference {
  const { name, file } = api.getNameAndFile(identity, 'model');

  const iface = file.addInterface( {
    name,
    properties: initializer?.properties || [],
    extends: initializer?.parents ? initializer?.parents.map( each => each.declaration):[],
    docs: createDocs(initializer),
    isExported: true,
  });
  for (const each of values(initializer?.requiredReferences )) {
   
    addImportsTo(file,each);
   
  }
  
  return isAnonymous(identity) ? {
    declaration: getInnerText(iface),
    requiredReferences: initializer?.requiredReferences || [],
  } :  {
    declaration: name,
    sourceFile: file,
    requiredReferences: []
  };
}

export function createObjectSchema(api: ApiModel, identity: Identity, initializer?: Partial<ObjectSchema>): ObjectSchema {
  const {name, file} = api.getNameAndFile(identity, 'model');
  
  const result= new ObjectSchemaImpl(file.addInterface({
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name,
    isExported: true,
  }));

  result.initialize(initializer);

  return result;
}

export function createDictionary(elementTypeReference: TypeReference): TypeReference{
  return {
    declaration: `Dictionary<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createArray(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: `Array<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export interface Property extends PropertyImpl {
  
}

export class PropertyImpl extends NamedElement<PropertySignature> {
   
  /** indicates the properts is required */
  get required(): boolean {
    return this.node.hasQuestionToken();
  }
  set required(value: boolean) {
    this.node.setHasQuestionToken(value);
  }

  /**
   * Declares the property as "read only".  
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   */
  get readonly(): boolean {
    return this.node.isReadonly();
  }
  set readonly(value: boolean) {
    this.node.setIsReadonly(value);
  }

  /**
   * Declares the property as "write only". 
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   * 
   */
  get writeonly(): boolean {
    // todo: tear apart the property type looking for `& WriteOnly`
    return false;
  }
  set writeonly(value: boolean) {
    // todo: implement by adding a `& WriteOnly`
  }
 
  /**
   * the desired name when generating code.
   */
  get clientName(): string|undefined {    
    return getTagValue( this.node, 'clientName');
  }
  set clientName(value: string|undefined) {
    setTag(this.node, 'clientName', value);
  }

  constructor(node: PropertySignature) {
    super(node);
  }
}

