let routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
    $stateProvider
    //home

        .state('main', {
            url: '/',
            templateUrl: '/home.html'
        });


    $locationProvider.html5Mode(true);
}

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default routes;