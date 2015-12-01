import 'zone.js';
import 'reflect-metadata';

import {bootstrap}        from 'angular2/bootstrap';
import {ROUTER_PROVIDERS} from 'angular2/router';

import Main from 'app/main';

bootstrap(
  Main,
  [
    ROUTER_PROVIDERS
  ]
);
