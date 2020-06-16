import { Element } from '../element';
import { Contact } from './contact';

export class License extends Element {
  /** A URL to the license used for the API. MUST be in the format of a URL. */
  url?: string;
  
  /**
   *
   * @param name The license name used for the API
   * @param initializer an object initializer to set optional object values.
   */
  constructor(public name: string, initializer?: Partial<Contact>) {
    super();
    this.initialize(initializer);
  }
}
