import {Component, View}                from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import Home from 'app/home/home'

@Component({
  selector: 'app'
})
@View({
  template:   '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Home, as: 'Home' }
])
export default class {}
