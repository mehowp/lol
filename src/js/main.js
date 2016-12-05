//
// dev dependencies to run app
//
import ng from 'angular';
import lodash from 'lodash';
import config from './config';
import init from './init';
import templates from './templates';

//import champions from '../data/champions.json';
import lolitems from '../data/items.json';
import champs from '../data/champions.json';
//
// 3rd party dependencies
//
//
import uirouter from 'angular-ui-router';
import resource from 'angular-resource';


//
// variables declaration
//

window.data = {};
data = {
	//champions: champions,
	items: lolitems.data,
	champions: champs.data
}
var dependencies = [uirouter, resource, templates.name];
window._ = lodash;
window.angular = ng;
window.root = angular.module('app', dependencies);


//
// boot application
//

export
default angular.element(document.querySelector('html')).ready(function() {
    angular.bootstrap(document, [root.name], {
        strictDi: true
    });
})