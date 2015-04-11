(function () {
    'use strict';

    angular
        .module('app')
        .controller('chartController', chart);
    
    chart.$inject = ['$rootScope', 'chartService'];

    function chart($rootScope, chartService) {
        /* jshint validthis:true */
        var ctrl = this;

        activate();

        function activate() {

            ctrl.data = {
                name: 'KnitShit',
                rowcnt: 3
            };

         chartService.getChart()
           .then(function (data) {
               ctrl.data = data;
               //ctrl.rows = data.knittinginstruction.rows;
               //ctrl.title = data.title;
               //ctrl.id = data.id;
           })
           .catch(function (error) {
               ctrl.error = error;
               ctrl.data = {
                   name: 'KnitShitError',
                   rowcnt: 3
               };
           });

         $rootScope.$on('knitted', function () {


             console.log('ctrl.data ' + ctrl.data.knittinginstruction.rows[4][4]);

              chartService.updateChart(ctrl.data)
              .then(function (data) {
                  ctrl.data = data; 
                  console.log('updateChart OK. ctrl.data ' + ctrl.data.knittinginstruction.rows[4][4]);
              })
              .catch(function (error) {
                  ctrl.error = error;
              });


         });
        }
    }
})();
