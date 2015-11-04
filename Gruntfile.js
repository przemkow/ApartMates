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
                files: ["app/**/*.js", "app/**/*.html", "app/**/*.css" ],
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
        }
    });

    //
    // Register modules
    //
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-concurrent");

    // Default task(s).
    grunt.registerTask("serve", ["concurrent:build"]);
};