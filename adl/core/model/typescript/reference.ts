import { InterfaceDeclaration, TypeAliasDeclaration } from 'ts-morph';
import { NamedElement } from './named-element';

export function isDeclaration<T>(instance: T | Declaration<T>): instance is Declaration<T> {
  return !!((<any>instance).target);
} 

export class Declaration<T> extends NamedElement<InterfaceDeclaration | TypeAliasDeclaration>  {
  constructor(node: InterfaceDeclaration | TypeAliasDeclaration) {
    super(node);
  }

  get target(): T {
    throw new Error('not implemented');
  }
}

