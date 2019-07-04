import 'reflect-metadata';
import { Type } from './Type';
export function Kind<T extends Type<any>>(kind: string) {
  return (type: T): T => {
    Reflect.defineMetadata('ModelMetaKey', type, kind);
    return type;
  };
}
