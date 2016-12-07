//
// dev dependencies to run app
//
import ng from 'angular';
import routes from './config/routes';
import init from './config/init';
import dependencies from './dependencies';

//import champions from '../data/champions.json';
import lolitems from '../data/items.json';
import champs from '../data/champions.json';


window.data = {};
data = {
    items: lolitems.data,
    champions: champs.data
}
window.root = angular.module('app', [dependencies.name]);
root.config(routes);
root.run(init);


//
// boot application
//

export
default angular.element(document.querySelector('html')).ready(function() {
    angular.bootstrap(document, [root.name], {
        strictDi: true
    });
})
