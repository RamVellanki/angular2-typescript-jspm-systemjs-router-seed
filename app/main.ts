import {Component}                from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import Home from 'app/components/home/home'

@Component({
  selector: 'app',
  template:   '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Home, as: 'Home' }
])
export default class {}
