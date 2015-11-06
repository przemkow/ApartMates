module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "connect": {
            keepalive: {
                options: {
                    port: 8080,
                    host: "localhost",
                    keepalive: true,
                    open: "http://localhost:8080/app/index.html"
                }
            }
        },
        "watch": {
            "build": {
                files: ["app/**/*.js", "app/**/*.html", "app/**/*.scss" ],
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            }
        },
        "concurrent": {
            "build": {
                tasks: ["connect:keepalive", "watch:build"],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'app/common/app.css': 'app/common/scss/app.scss',
              'app/common/sidebar.css': 'app/common/scss/sidebar.scss'
            }
          }
        }
    });

    //
    // Register modules
    //
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask("serve", ["sass","concurrent:build"]);
    grunt.registerTask("compile", ["sass"]);

};