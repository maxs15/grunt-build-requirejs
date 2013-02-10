# grunt-build-requirejs

> Optimize RequireJS projects using r.js and build files.


## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-build-requirejs --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Requirejs task
_Run this task with the `grunt requirejs` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks


This plugin is compatible with grunt 0.4.0rc7

The plugin will look for the build files and compile them into the specified destination.

### Options

For a full list of possible options, [see the r.js example build file](https://github.com/jrburke/r.js/blob/master/build/example.build.js).
### Usage Examples

```js
// path/to/main.build.json
{
    "paths": {
                "dependency": "test-dependency"
            },

    "modules": [{"name": "test1"},{"name": "test2"}]
}
```

```js
// Gruntfile.js
requirejs: {
  compile: {
    options: {
      //common options for all build files
    }
    files:[
        {
            expand: true,
            cwd: root + components,
            src: ['**/*.build.json'],
            dest: root + compiled
        }
    ]
  }
}
```


## Release History

 * 2013-01-22   v0.1.0rc7   Creation of the plugin, work with grunt 0.4.0rc7
---