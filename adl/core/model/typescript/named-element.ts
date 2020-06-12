import { anonymous, isAnonymous } from '@azure-tools/sourcemap';
import { BindingName, Identifier, NamedNodeSpecificBase, Node, PropertyName, ReferenceFindableNode, RenameableNode } from 'ts-morph';
import { getFirstDoc, getTagValue, setTag } from '../../support/doc-tag';
import { RemovableNode } from '../schema/schemas';
import { Identity } from '../types';
import { TSElement } from './typescript-element';

export class NamedElement<TNode extends Node & NamedNodeSpecificBase<Identifier | PropertyName | BindingName> & ReferenceFindableNode & RenameableNode & RemovableNode> extends TSElement<TNode> {
  remove() {
    this.node.remove();
  }

  get name(): Identity {
    let result: Identity | undefined = undefined;
    result = this.node.getName();
    return result ?? anonymous(this.node.getKindName());
  }

  set name(value: Identity) {
    if (isAnonymous(value)) {
      throw new Error('Cannot rename this node to anonymous.');
    }
    if (!Node.isRenameableNode(this.node)) {
      throw new Error('This node cannot be renamed.');
    }
    this.node.rename(value);
  }

  get summary() {
    return getFirstDoc(this.node).getDescription();
  }

  set summary(value: string | undefined) {
    getFirstDoc(this.node).setDescription(value || '\n');
  }

  get description() {
    return getTagValue(this.node, 'description');
  }
  set description(value: string | undefined) {
    setTag(this.node, 'description', value);
  }
}
