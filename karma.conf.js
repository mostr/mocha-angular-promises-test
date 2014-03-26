'use strict';

module.exports = function(config) {

    var files = [];
    
    files.push('lib/angular.js');
    files.push('lib/angular-mocks.js');
    files.push('lib/q.js');
    files.push('app.js');

    files.push('test/service-spec.js');

    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'chai-as-promised'],
        files: files,
        exclude: [],
        port: 7070,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS']
    });
};
