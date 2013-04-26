"use strict";

require.config({
    baseUrl: '/app/js',
    paths: {
        Console: 'libs/console/console',
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        angular: 'libs/angular/angular'
    },
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'bootstrap'
    ],
    function (app) {
        
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    }
);