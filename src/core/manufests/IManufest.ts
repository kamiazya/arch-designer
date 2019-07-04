import { IManufestMetadata } from './IManufestMetadata';

export interface IManufest<
  API_VERSION extends string = string,
  KIND extends string = string,
  SPEC extends any = undefined,
  META extends IManufestMetadata = IManufestMetadata,
  > {
  apiVersion: API_VERSION;
  kind: KIND;
  metadata: META;
  spec?: SPEC;
}
