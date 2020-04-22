import { Dictionary, items, keys } from '@azure-tools/linq';
import { Path } from '@azure-tools/sourcemap';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

/** 
 * items that can be added to the parent have the opportunity to record
 * their known location at the time they are added to their parent
 * 
 * the $onAdd function allows them to define what happens when they are 
 * added to their parent.
 * 
 * the parent must call $onAdd if it exists when they are adding it,
 * and set the $onAdd member to undefined.
 * */
export interface OnAdd {
  /** 
   * action to allow the child to record it's position when 
   * adding it to the parent 
   * 
   * @parameter path - the full Path to the child once it's been added
   */
  $onAdd?: (p: Path) => void;
}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  protected apply<T>(...initializer: Array<Partial<T> | undefined>) {
    for (const { key, value } of items(initializer)) {
      // copy the true value of the item.
      if (value) {
        (<any>this)[key] = value.valueOf();
      }
    }
  }
}


/**  */
export class Element extends Initializer implements OnAdd {
  /** 
 * returns the PATH of the current node
 * 
 */
  $path: () => Path = () => [];
  $onAdd?: (p: Path) => void;

  internalData?: Dictionary<InternalData>;
  versionInfo = new ElementArray<VersionInfo>(this, 'versionInfo');
  attic?: Attic;

  constructor(initializer?: Partial<Element>) {
    super();
    this.apply(initializer);
  }

  /** @internal*/ setPath(instance: OnAdd, ...relativePath: Path) {
    // if the current object's path is set, then we can do this immediately
    if (!this.$onAdd) {
      const path = [...this.$path(), ...relativePath];
      (<any>instance).$path = () => path;
      instance.$onAdd?.(path);
      delete instance.$onAdd;
    }
    else {
      // otherwise, we have to have it do it when this gets set
      this.$onAdd = (p) => {
        this.$onAdd?.(p);
        const path = [...p, ...relativePath];
        (<any>instance).$path = () => path;
        instance.$onAdd?.(path);
        delete instance.$onAdd;
      };
    }
  }

  addToAttic(name: string, value: any) {
    if (value) {
      this.attic = this.attic || {};
      this.attic[name] = value.valueOf();
      this.setPath(value, 'attic', name);
    }
  }

  addInternalData(key: string, internalData: InternalData) {
    this.internalData = this.internalData || {};
    this.internalData[key] = internalData;
  }
}


export class ElementArray<T extends OnAdd> extends Array {

  constructor(private parent: Element, private name: string) {
    super();
  }

  push(...values: Array<T>) {
    for (const value of values) {
      this.parent.setPath(value, this.name, super.push(value));
    }
    return this.length;
  }
}


export function setPath(instance: Element, path: Path) {
  if (instance) {
    instance.$path = () => path;
    instance.$onAdd?.(path);
    delete instance.$onAdd;
  }
}