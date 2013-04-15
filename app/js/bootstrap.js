"use strict";

require.config({
    paths: {
        Console: 'libs/console/console',
        jQuery: 'libs/jquery/jquery',
        Underscore: 'libs/underscore/underscore',
        Angular: 'libs/angular/angular'
    },
    priority: [ 
        "Console",
        "jQuery",
        "Underscore",
        "Angular"
    ]
});

require(
    [
        'require',
        'Console',
        'jQuery',
        'Underscore',
        'Angular'
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