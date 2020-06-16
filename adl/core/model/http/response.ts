import { Alias } from '../alias';
import * as base from '../operation';
import { TypeReference } from '../schema/type';
import { Identity } from '../types';
import { Header } from './header';

export class ResponseCriteria extends base.ResponseCriteria {
  set code(value: Array<string|number> ) {
    //todo
  }
  get code(): Array<string|number> {
    const p = this.node.getParameter('code');
    if( p ) {
      // expecting some kind of union type 
      // pull out the values.
    }
    throw Error('not implemented');
  }
  mediaType!: Array<string>;
}

export class ResultElement extends base.ResultElement {
  body!: TypeReference;
  headers!: Array<TypeReference>;
  isException?: boolean;
  message?: string;
}

export class ResponseElement extends base.ResponseElement {
  criteria!: ResponseCriteria;
  result!: ResultElement | base.Reference<ResultElement>;
}

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new Array<Header|Alias<Header>>();

  /**
   * 
   * @param name the name of this response
   * @param mediaType the IANA media response that this maps to.
   * @param initializer object initializer for the response.
   */
  constructor(public name: Identity,public mediaType: string, initializer?: Partial<Response> ) {
    super();
    this.initialize(initializer);
  }
}
