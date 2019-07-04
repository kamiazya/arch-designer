import { Plugin } from 'core';
import { Database } from './models';

@Plugin({
  name: 'rdbms',
  // tslint:disable-next-line:object-literal-sort-keys
  models: [
    Database,
  ],
})
export class RdbmsPlugin { }
