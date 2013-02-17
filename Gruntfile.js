/*
 *
 * Copyright (c) 2013 Maxime Mezrahi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    requirejs: {
      compile: {
        options: {

        },
        files:[
          {
            expand: true,
            cwd: "test/tests",
            src: ['**/*.build.json', '**/*.build.js'],
            dest: "test/compiled"
         }
        ]
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

};