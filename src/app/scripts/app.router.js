(function() {
    'use strict';

    angular.module('ngseed')
        .config(function($stateProvider, $urlRouterProvider) {
            'ngInject';
            
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/tpls/pages/home.tpl.html',
                    controller: 'homeCtrl'
                });

            $urlRouterProvider.otherwise('/');

        });


})();