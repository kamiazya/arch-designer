import { IManufest } from 'core/manufests';
import { ApiVersion, Kind } from '../../enum';
export type DatabaseManufestBata1 = IManufest<ApiVersion.Bata1, Kind.Database, {
  name: string;
  comment: string;
  engine?: string;
}>;
