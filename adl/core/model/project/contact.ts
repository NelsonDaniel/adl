import { Element } from '../element';

export enum ContactRole {
  Author = 'author',
}

export class Contact extends Element {
  /** The identifying name of the contact person/organization. */
  name?: string;

  /** The URL pointing to the contact information. MUST be in the format of a URL. */
  email?: string;

  /** The email address of the contact person/organization. MUST be in the format of an email address */
  url?: string;
  
  constructor(public role: ContactRole, initializer?: Partial<Contact>) {
    super();
    this.initialize(initializer);
  }
}
