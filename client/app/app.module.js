(function () {
    'use strict';

    angular
        .module('app', [
        'ngRoute'])
        .run(watch);

    // Angular modules 
    // Custom modules 
    // 3rd Party Modules

    watch.$inject = ['chartService'];

    function watch(chartService) {
        chartService.watchChart();
    }

})();