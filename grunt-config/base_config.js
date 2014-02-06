module.exports = function (grunt, env) {

    var config = {

        //Load grunt-plugins from package.json
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                // JSHInt with a better reporter
                reporter: require('jshint-stylish')
            },
            //gruntfile linting
            gruntfile: {
                src: ['Gruntfile.js']
            }
        }
    };

    return config;
};