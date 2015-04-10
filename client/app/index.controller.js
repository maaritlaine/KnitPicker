(function () {
    'use strict';

    angular
        .module('app')
        .controller('indexController', index);

    function index() {
        /* jshint validthis:true */
        var ctrl = this;

        activate();

        function activate() {

        	ctrl.viesti = {
        		eioo : 'YES!'
        	};

        }
    }
})();
