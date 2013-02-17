define(function() { require.config({
   "paths": {
      "jquery": "/libs/jquery.min.js",
      "backbone": "/libs/backbone.min.js"
   },
   "shim": {
      "bootstrap": [
         "jquery"
      ],
      "knob": [
         "jquery"
      ]
   }
});});