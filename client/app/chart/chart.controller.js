(function () {
    'use strict';

    angular
        .module('app')
        .controller('chartController', chart);

    chart.$inject = ['chartService'];

    function chart(chartService) {
        /* jshint validthis:true */
        var ctrl = this;

        activate();

        function activate() {

            ctrl.chart = {
                name: 'KnitShit',
                rowcnt: 3
            };

         chartService.getChart()
           .then(function (data) {
               ctrl.instruction = data;
           })
           .catch(function (error) {
               ctrl.error = error;
           });

        }
    }
})();
