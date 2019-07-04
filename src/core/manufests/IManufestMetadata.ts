export interface IManufestMetadata {
  name: string;

  annotations?: {
    [key: string]: string;
  };

  labels?: {
    [key: string]: string;
  };

  // namespace: string;
}
