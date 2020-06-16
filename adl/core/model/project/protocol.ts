import { fail } from 'assert';
import { SourceFile } from 'ts-morph';
import { ApiModel } from '../api-model';
import { OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from '../operation';
import { Declaration } from '../typescript/reference';


export class Protocol {
  readonly api: ApiModel;
  readonly files: Array<SourceFile>;

  protected constructor(api?: ApiModel, sourceFiles?: Array<SourceFile>) {
    this.api = api || (this instanceof ApiModel ? this : fail('requires api model in constructor'));
    this.files = sourceFiles || this.api.files;

    // when this gets constructed, we have to emit an event to allow extensions to add queries to the instance
    // we need a query function for the extension
    // and then we can bind it as a property so that others can use it.
    // Object.defineProperty(this, 'AzureResource', {get: ()=>this.interfaces});
  }

  query<T>(propertyName: string): Array<T> {
    return (Object.getOwnPropertyNames(this).indexOf(propertyName) > -1 ? (<any>this)[propertyName] : []);
  }

  where(predicate: (file: SourceFile) => boolean): Protocol {
    return new Protocol(this.api, this.files.filter(predicate));
  }

  get operationGroups(): Array<OperationGroup> {
    // return this.files.map(each => each.getInterfaces().filter(isOperationGroup)).flat().map(each => new OperationGroup(each));
    return [];
  }

  get responseCollections(): Array<Declaration<ResponseCollection>> {
    // this.files.map( each => each.getTypeAliases()).filter(isResponseCollection)).flat().map(each => new ResponseCollectionAlias(each))
    return [];
  }

  get responses(): Array<Declaration<ResponseElement>> {
    return [];
  }

  get results(): Array<Declaration<ResultElement>> {
    return [];
  }

  get parameters(): Array<Declaration<ParameterElement>> {
    return [];
  }
}