import { Plugin } from 'core';
import { Namespace } from './models';

@Plugin({
  name: 'common',
  models: [
    Namespace,
  ],
})
export class CommonPlugin { }
