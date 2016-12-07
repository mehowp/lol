import angular from 'angular';
import _ from 'lodash';
import uirouter from 'angular-ui-router';
import resource from 'angular-resource';
import templates from './config/templates';
// dont touch nothing above
//
/////////////////////////////////////////////////
// here you can use ur own imports
// 
// components
import sidebar from './components/sidebar';

//services
import champions from './modules/champions';

//controllers








const main = [uirouter, resource, templates.name];

/////
const components = [sidebar.name];
const services = [champions.name];
const controllers = [];
//////////////////////////////////////////////////////////////////////
// dont even try to touch this
const dependencies = _.concat(main, components, services, controllers);
console.info('Loaded dependencies', dependencies);

const appDependencies  = angular.module('dependencies', dependencies);

export default appDependencies;