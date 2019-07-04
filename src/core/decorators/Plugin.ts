import 'reflect-metadata';
import { Type } from './Type';
export function Plugin<T extends Type<any>>(options: {
  name: string;
  models: Array<Type<any>>;
}) {
  return (type: T): T => {
    Reflect.defineMetadata('PluginMetaKey', type, options);
    return type;
  };
}
