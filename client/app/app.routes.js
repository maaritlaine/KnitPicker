(function () {
    'use strict';

    angular
        .module('app')
        .config(route);
        
    route.$inject = ['$routeProvider'];

    function route($routeProvider) {

        $routeProvider.otherwise('/');

        $routeProvider.when('/', {
            templateUrl: 'templates/chart/chart.html',
            controller: 'chartController as charter'
        });

    }     

})();