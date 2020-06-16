import { isAnonymous } from '@azure-tools/sourcemap';
import { TypeAliasDeclaration } from 'ts-morph';
import { addImportsTo } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { TypeReference } from './type';

export class AliasType extends NamedElement<TypeAliasDeclaration> implements TypeReference {
  declaration!: string;
  requiredReferences = [];

  isInline?: boolean;

  constructor(node: TypeAliasDeclaration) {
    super(node);
  }
}

export function createAliasType(api: ApiModel, identity: Identity, typeReference: TypeReference, initializer?: Partial<SchemaInitializer>): TypeReference {
  if (isAnonymous(identity)) {
    // if it doesn't have a name, just return the type reference instead.
    return typeReference;
  }
  const { name, file } = api.getNameAndFile(identity, 'alias');
 
  // we have to add the imports of the target to this file
  addImportsTo(file, typeReference);

  file.addTypeAlias({
    name,
    type: typeReference.declaration,
    isExported: true,
  });
  
  return {
    declaration: name,
    sourceFile: file,
    requiredReferences: [],
  };
}
