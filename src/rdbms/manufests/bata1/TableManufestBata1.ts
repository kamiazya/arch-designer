import { IManufest } from 'core/manufests';
import { ApiVersion, Kind } from '../../enum';
export type TableManufestBata1 = IManufest<ApiVersion.Bata1, Kind.Table, {
  description: string;
  definition: {
    name: string;
    comment: string;
    columns: Array<{
      name: string;
    }>;
    partitions?: Array<{
      name: string;
    }>;
    indexes?: Array<{
      name?: string;
    }>;
    constraints?: Array<{
      name?: string;
    }>;
  };
}>;
