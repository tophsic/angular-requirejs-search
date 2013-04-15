"use strict";

require.config({
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
        'require',
        'Console',
        'jquery',
        'underscore',
        'angular'
    ],
    function (require, Console, $, _, angular) {
        Console.group("Bootstrap dependencies loaded. Starting bootstrap.");
        Console.info("Console", Console);
        Console.info("jQuery", $);
        Console.info("Underscore: ", _);
        Console.info("Angular: ", angular);
        
        require(['app'], function (App) {
            Console.group("Starting bootstrap.");
            Console.info("App: ", App);
            
            App.initialize();
            
            Console.groupEnd();
        });
        
        Console.groupEnd();
    }
);