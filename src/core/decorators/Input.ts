import 'reflect-metadata';
export function Input(apiVersion: string, path?: string) {
  return Reflect.metadata('ManufestParamator', { apiVersion, path });
}
