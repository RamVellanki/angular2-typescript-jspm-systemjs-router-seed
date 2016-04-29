import 'zone.js';
import 'reflect-metadata';

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
// import {HTTP_PROVIDERS}   from 'angular2/http';

import Main from 'app/main';

bootstrap(
  Main,
  [
    ROUTER_PROVIDERS
    // HTTP_PROVIDERS
  ]
);
