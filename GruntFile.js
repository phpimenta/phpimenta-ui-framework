module.exports = function (grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        clean: {
            css: ['dist/css/*.min.css'],
            js: ['dist/js/*.min.js']
        },
        sass: {
            dist: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['**/*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/js/phpimenta-ui.js': 'src/js/phpimenta-ui.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: '**/*.js',
                    dest: 'dist/js',
                    ext: '.min.js'
                }]
            }
        },
    });

    grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'babel', 'uglify']);

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
