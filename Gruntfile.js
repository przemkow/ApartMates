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
            options: {
              livereload: true,
            },
            "livereload": {
              files: ["app/**/*.js", "app/**/*.html", "app/**/*.scss", "app/**/*.css"]
            },
            "sass":{
              files: ["app/**/*.scss"],
              tasks: ['sass']
            }
        },
        "concurrent": {
            "build": {
                tasks: ["connect:keepalive", "watch"],
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
              'app/common/app.css': 'app/common/style/app.scss',
              'app/common/login.css': 'app/common/style/login.scss',
              'app/common/sidebar.css': 'app/common/style/sidebar.scss',
              'app/common/approve.css': 'app/common/style/approve.scss',
              'app/common/divide.css': 'app/common/style/divide.scss'
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