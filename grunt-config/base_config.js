module.exports = function (grunt, env) {

    var defaults = config = {

        //Load grunt-plugins from package.json
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                // JSHInt with a better reporter
                reporter: require('jshint-stylish')
            },
            //vérification du gruntfile
            gruntfile: {
                src: ['Gruntfile.js']
            }
        }
    };

    return config;
};