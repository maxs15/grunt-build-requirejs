/* 
 *
 * Copyright (c) 2013 Maxime Mezrahi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var requirejs = require('requirejs');
  var path = require('path');

  // TODO: extend this to send build log to grunt.log.ok / grunt.log.error
  // by overriding the r.js logger (or submit issue to r.js to expand logging support)
  requirejs.define('node/print', [], function() {
    return function print(msg) {
      if (msg.substring(0, 5) === 'Error') {
        grunt.log.errorlns(msg);
        grunt.fail.warn('RequireJS failed.');
      } else {
        grunt.log.oklns(msg);
      }
    };
  });

  grunt.registerMultiTask('requirejs', 'Build a RequireJS project.', function() {

    var done = this.async();
    var self = this;

    this.files.forEach(function(f) {

      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      var baseUrl = path.resolve(f.src[0], "..");
      var dir = path.resolve(f.dest, "..");
      var options = self.options({logLevel: 0, baseUrl: baseUrl, dir: dir});


      var build = grunt.file.readJSON(f.src[0]);
      var fullOptions = grunt.util._.merge(build, options);
      grunt.verbose.writeflags(options, 'Options');

      requirejs.optimize(fullOptions, function(response) {
        done();
      });

    });

  });

};
