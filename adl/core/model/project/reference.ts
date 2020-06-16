import { Element } from '../element';
import { URL } from '../types';

/**
 * A tag is a bit of arbitrary information about the API.
 */
export class Reference extends Element {
  /** A short description about the reference. Commonmark syntax can be used for rich text representation. */
  summary?: string;

  /** A description for the tag. Commonmark syntax can be used for rich text representation. */
  description?: string;

  /** A link to additional information. */
  location?: URL;
  
  constructor(public name: string, initializer?: Partial<Reference>) {
    super();
    this.initialize(initializer);
  }
}
