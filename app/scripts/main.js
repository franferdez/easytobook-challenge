/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        react: {
            exports: 'React'
        },
        JSXTransformer: 'JSXTransformer'
    },
    paths: {
        routes: 'routes',
        views: 'views',
        templates: 'templates',
        models: 'models',
        collections: 'collections',
        vendor: 'vendor',
        helpers: 'helpers',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        react: '../bower_components/react/react-with-addons',
        JSXTransformer: '../bower_components/react/JSXTransformer',
        jsx: '../bower_components/requirejs-react-jsx/jsx',
        text: '../bower_components/requirejs-text/text',
        dispatcher: '../bower_components/flux/dist/Flux',
        reactBootstrap: '../bower_components/react-bootstrap/react-bootstrap'
    },
    jsx: {
        fileExtension: ".js",
        transformOptions: {
          harmony: true,
          stripTypes: false
        },
        usePragma: false
    }
});

require([   
    'jquery',
    'underscore',
    'backbone',
    'react',
    'global',
    'helpers/Utils',
    'jsx!routes/router'
], function ($,_,Backbone,React,g,Utils,Router) {
    
    React.initializeTouchEvents(true);

    Backbone.history.start();
});
