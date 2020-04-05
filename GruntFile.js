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
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['**/*.js'],
                    dest: 'src/out',
                    ext: '.js'
                }]
            }
        },
        concat: {
            dist: {
                src: [
                    'src/out/header.js',
                    'src/out/tab.js',
                    'src/out/dropdown.js',
                    'src/out/upload.js',
                    'src/out/modal.js',
                    'src/out/datepicker.js'
                ],
                dest: 'dist/js/phpimenta-ui-framework.js',
            },
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
        copy: {
            main: {
                expand: true,
                cwd: 'src/img',
                src: '**',
                dest: 'dist/img',
            },
        },
    });

    grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'babel', 'concat', 'uglify', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
