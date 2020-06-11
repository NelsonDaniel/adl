import { Element } from '../element';
import { TypeReference } from '../schema/type';

export class Header extends Element {
  // the header name in container. might not be unique in parent? 
  name!: string;

  /** description of the HTTP Header */
  description?: string;

  /** the serialization style of the header */
  style: any;

  /** the schema for the header */
  typeRef?: TypeReference;

  constructor(initializer?: Partial<Header>) {
    super();
    this.initialize(initializer);
  }
}

