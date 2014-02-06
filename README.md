grunt-organize-boilerplate
==========================

A boilerplate for a grunt project, enabling to you to split and organize tasks and configuration.

Your gruntfile is replaced with a kind of grunt-config & tasks loader.
You can then organize the tasks and config fragments as you want in a directories based structure.

## Quickstart

Use the "Get the zip" button of github to just get the files.
Eventually merge the `package.json` dependencies with yours, and type `npm install`.

Here the dependencies :

```
        "grunt-contrib-jshint": "latest",
        "grunt": "latest",
        "jshint-stylish": "latest",
        "load-grunt-tasks": "~0.2.1",
        "lodash": "~2.4.1"
```

## Why ?

Grunt is an awesome and very useful tool. But for large codebases and teams, maintaining a giant Gruntfile, where everyone is writing to, is kind of awkward.

I wanted something :
- able to modularize grunt tasks and configuration,  based on features (big UX/UI sections of the website) rather than technical-based (task or tech layer based) modularization.
- open and flexible
- simple (readability, maintainability)

Thanks to @oncletom (see : https://gist.github.com/0gust1/7543330), I ditched the grunt-plugin scenario, to code a simple solution.

Here is my take on the subject so far, feel free to adapt it to your needs and to your team's organization.

## How ?

The principle is to split grunt configuration fragments and grunt tasks into small modules.

You can organize these files the way you want in the dedicated directory (``grunt-config/``, by default, feel free to change the name)

You can name them and organize them the way you want (by technical layer or by big features of your project), put them in directories or sub-directories.

For example, this is a file layout used on some project :

```
grunt-config
├── base_config.js
├── base_tasks.js
├── dev-mode
│   └── config.js
├── icons
│   ├── config.js
│   └── icons2fonts-tasks.js
├── optim
│   └── config.js
└── website_build
    ├── build_content-config.js
    ├── build_content-tasks.js
    ├── build_front-config.js
    ├── build_front-tasks.js
    ├── environment-config.js
    ├── environment-tasks.js
    ├── publish-config.js
    └── publish-tasks.js
```




### Benefits :

You can organize your build configuration and tasks the way you want and use a structure and naming conventions that fits your project and your team.

### Cons :

The operation of gathering and merging configuration fragments and task can add a little overhead to your grunt execution.

Nevertheless, if performance is a concern for you, maybe you should use Gulp instead of Grunt.

### Why this isn't a grunt-plugin, grunt-init plugin or yeoman generator ?

Because, I don't feel polluting npm for such a little utility. If there is popular demand, maybe ?
