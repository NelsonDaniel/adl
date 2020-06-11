import { isAnonymous } from '@azure-tools/sourcemap';
import { TypeAliasDeclaration } from 'ts-morph';
import { addImportsTo, TypeDeclaration } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Collection, CollectionImpl, Identity } from '../types';
import { Constraint } from './constraint';
import { Default } from './default';
import { SchemaInitializer } from './object';
import { TSSchema } from './schema';
import { TypeReference } from './type';


export class Alias extends TSSchema<TypeAliasDeclaration> {
  aliasType = 'schema';
  constraints: Collection<Constraint>;
  defaults: Collection<Default>;
  
  addConstraint(...constraint: Array<Constraint>) {
    // todo
  }
  removeConstraint(constraint: Constraint) {
    //todo
  }
  getConstraints(): Array<Constraint> {
    return [];
  }

  addDefault(...def: Array<Default>) {
    //todo
  }
  removeDefault(def: Default) {
    //todo
  }
  getDefault(): Array<Default> {
    return [];
  }

  constructor(node: TypeAliasDeclaration) {
    super('alias', node);
    this.constraints = new CollectionImpl(this,this.addConstraint, this.removeConstraint, this.getConstraints );
    this.defaults = new CollectionImpl(this, this.addDefault, this.removeDefault, this.getDefault);
  }

  get typeDefinition(): string {
    if (this.isInline) {
      return this.node.getTypeNode()!.getText();
    }
    return this.node.getName();
  }

  get requiredTypeDeclarations(): Array<TypeDeclaration> {
    if (this.isInline) {
      // we need to pull thru the declarations that this alias has. 
      // brute force!
      return <any> this.node.getSourceFile().getImportDeclarations().map( decl => {
        const names = decl.getNamedImports().map( each => each.getName());
        const types = decl.getModuleSpecifierSourceFile()?.getDescendants().filter( (each: any) => each.getName && names.indexOf(each.getName()) > -1 ) || []; 
        return types;
      }).flat();
    }
    return [this.node];
  }
}

export function createTypeAlias(api: ApiModel, identity: Identity, typeReference: TypeReference, initializer?: Partial<SchemaInitializer>): TypeReference {
  if (isAnonymous(identity)) {
    // if it doesn't have a name, just return the type reference instead.
    return typeReference;
  }
  const { name, file } = api.getNameAndFile(identity, 'alias');
 
  // we have to add the imports of the target to this file
  addImportsTo(file, typeReference);

  new Alias(file.addTypeAlias({
    name,
    type: typeReference.declaration,
    isExported: true,
  }));
  
  return {
    declaration: name,
    sourceFile: file,
    requiredReferences: [],
  };
}

