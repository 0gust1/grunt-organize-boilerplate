module.exports = function (grunt) {

    /** External config & tasks filepaths **/
    var configLocations;
    var tasksLocations;

    /** External configuration loading and merging **/

    var configFiles;
    var env = process.env.NODE_ENV || 'dev';
    var _ = require('lodash');

    //we have 1 base config, and possibly many module-specific config
    configLocations = [
        './grunt-config/base_config.js',
        './grunt-config/**/config.js',
        './grunt-config/**/*-config.js'
    ];

    //we have 1 base tasks definition, and possibly many module-specific config
    tasksLocations = [
        './grunt-config/base_tasks.js',
        './grunt-config/**/tasks.js',
        './grunt-config/**/*-tasks.js'
    ];

    configFiles = grunt.file.expand({
        filter: "isFile"
    }, configLocations);

    grunt.verbose.writeln('Gathering external configuration files'.underline.green);
    grunt.verbose.writeln("configFiles : " + grunt.log.wordlist(configFiles, {
        separator: ', ',
        color: 'cyan'
    }));

    var configArray = configFiles.map(function (file) {
        grunt.verbose.writeln("=> importing : " + file);
        return require(file)(grunt, env);
    });

    var config = {};

    configArray.forEach(function (element) {
        config = _.merge(config, element);
    });

    grunt.verbose.subhead('* Generated config file: *');
    grunt.verbose.writeln(JSON.stringify(config, undefined, 2));

    grunt.initConfig(config);

    /** Task loading & registering **/

        // We load grunt tasks listed in package.json file
    require('load-grunt-tasks')(grunt);

    /** External tasks registering **/

    grunt.verbose.writeln('Gathering external task files'.underline.green);

    var taskFiles = grunt.file.expand({
        filter: "isFile"
    }, tasksLocations);

    grunt.verbose.writeln("task files : " + grunt.log.wordlist(taskFiles, {
        separator: ', ',
        color: 'cyan'
    }));

    taskFiles.forEach(function (path) {
        grunt.verbose.writeln("=> loading & registering : " + path);
        require(path)(grunt);
    });

    //write the generated configuration (for debug)
    grunt.registerTask('logConfig', 'Output the generated configuration object', function () {
        grunt.log.subhead('* Generated config file : *');
        grunt.log.writeln(JSON.stringify(config, undefined, 2));
    });

};
