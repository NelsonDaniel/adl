import { Dictionary, items } from '@azure-tools/linq';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  initialize<T>(initializer?: Partial<T>) {
    const isBackedByTS = 'node' in this;

    for (const [key, value] of items(initializer)) {
      // copy the true value of the items to the object
      // (use the proxy)

      const rawThis = <any>this;

      if (value !== undefined) {
        const rawValue = (<any>value);

        const targetProperty = rawThis[key];
        if (targetProperty && targetProperty.push) {
          if (rawValue[Symbol.iterator]) {
            // copy elements to target
            for (const each of rawValue) {
              rawThis[key].push(each);
            }
            continue;
          }
          throw new Error(`Initializer for object with array member '${key}', must be initialized with something that can be iterated.`);
        }
        // just copy the value across.
        rawThis[key] = (<any>value);
      }
    }
    return this;
  }
}


/** 
 * Base type for all objects in the model 
 */
export class Element extends Initializer {
  internalData?: Dictionary<InternalData>;
  versionInfo = new Array<VersionInfo>();
  attic?: Attic;

  constructor(initializer?: Partial<Element>) {
    super();
    this.initialize(initializer);
  }

  addToAttic(name: string, value: any) {
    if (value) {
      this.attic = this.attic || {};
      this.attic[name] = value;
    }
    return this;
  }

  addInternalData(key: string, internalData: InternalData) {
    this.internalData = this.internalData || {};
    this.internalData[key] = internalData;
  }

  addVersionInfo(info: VersionInfo) {
    this.versionInfo.push(info);
  }
}

