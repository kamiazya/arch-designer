import { IManufest } from 'core/manufests';
import { ApiVersion, Kind } from '../../enum';

export type MigrationManufestBata1 = IManufest<ApiVersion.Bata1, Kind.Migration, {
  schemaVersion: string;
  description: string;
  migrations: Array<{
    query: string;
    description?: string;
  }>;
  affectedTableNames: string[];
}>;
