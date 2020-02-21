import {Component} from '@angular/core';

type Constructor<T = {}> = new (...args: any[]) => T;

export function Deprecated(oldSelector: string, newSelector: string) {
  return <T extends Constructor>(Base: T) => {
    return class Deprecated extends Base {
      constructor(...args: any[]) {
         super(...args);
         console.warn(`The selector "${oldSelector}" is going to be deprecated. Please use ${newSelector}`);
      }
    };
  };
}
