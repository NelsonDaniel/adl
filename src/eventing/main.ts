/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as events from "events";

export interface IEvent<TSender extends events.EventEmitter, TArgs> {
  Subscribe(fn: (sender: TSender, args: TArgs) => void): () => void;
  Unsubscribe(fn: (sender: TSender, args: TArgs) => void): void;
  Dispatch(args: TArgs): void;
}

export class EventDispatcher<TSender extends EventEmitter, TArgs> implements IEvent<TSender, TArgs> {
  private _instance: TSender;
  private _name: string;
  private _subscriptions = new Array<() => void>();

  constructor(instance: TSender, name: string) {
    this._instance = instance;
    this._name = name;
  }

  UnsubscribeAll() {
    // call all the unsubscribes 
    for (let each of this._subscriptions) {
      each();
    }
    // and clear the subscriptions.
    this._subscriptions.length = 0;
  }

  Subscribe(fn: (sender: TSender, args: TArgs) => void): () => void {
    if (fn) {
      this._instance.addListener(this._name, fn);
    }
    let unsub = () => { this.Unsubscribe(fn) };
    this._subscriptions.push(unsub);
    return unsub;
  }

  Unsubscribe(fn: (sender: TSender, args: TArgs) => void): void {
    if (fn) {
      this._instance.removeListener(this._name, fn)
    }
  }

  Dispatch(args: TArgs): void {
    this._instance.emit(this._name, this._instance, args)
  }
}

export class EventEmitter extends events.EventEmitter {
  private _subscriptions: Map<string, any> = new Map();

  constructor() {
    super();
    this._init(this);
  }

  protected static Event<TSender extends EventEmitter, TArgs>(target: TSender, propertyKey: string) {
    var init = target._init;
    target._init = (instance: TSender) => {
      let i = instance;
      // call previous init
      init.bind(instance)(instance);

      instance._subscriptions.set(propertyKey, new EventDispatcher<TSender, TArgs>(instance, propertyKey));

      var prop: PropertyDescriptor = {
        enumerable: true,
        get: () => {
          return instance._subscriptions.get(propertyKey);
        }
      };
      Object.defineProperty(instance, propertyKey, prop);
    }
  };

  protected _init(t: EventEmitter) {
  }
}

export class EventEmitterPromise<T> extends EventEmitter implements Promise<T> {
  public constructor(private promise: Promise<T>) {
    super();
  }

  get [Symbol.toStringTag]() {
    return this.promise[Symbol.toStringTag];
  }
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  };
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult> {
    return this.promise.catch(onrejected);
  }
}