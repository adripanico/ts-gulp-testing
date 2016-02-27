<p align="center">
  <a target="_blank" href="http://gulpjs.com" style="padding-right: 10px;">
    <img height="75" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" />
  </a>
  <a target="_blank" href="http://www.typescriptlang.org/" style="padding-right: 10px;">
      <img height="50" src="http://www.typescriptlang.org/content/images/logo_small.png" />
  </a>
  <a target="_blank" href="http://nodejs.org/" style="padding-right: 10px;">
      <img height="50" src="https://nodejs.org/static/images/logos/nodejs-green.png" />
  </a>
  <a target="_blank" href="http://expressjs.com/">
      <img height="50" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" />
  </a>
</p>

# Playing around with TypeScript, Node, Express & Gulp

Based on [Practical TypeScript Development with Gulp and Sublime Text 3][1]

## Software used

1. NodeJS, npm

2. TypeScript

    To run the TypeScript compiler with the ```tsc``` command.

        npm install -g typescript

3. Gulp

    For build and task automation.

        npm install -g gulp-cli
        npm install -g gulp
        npm install -g gulp-typescript
        npm install gulp-uglify

4. [Sublime Text 3][2] + [Type​Script package][3] (optional)

## Setting up the folder/environment

If we are going to create a new node project:

    npm init
    npm install express --save

As we can read on [Gulp's *Getting started* documentation][4], we need to install Gulp in our project devDependencies, along with some other dependencies:

    npm install gulp run-sequence gulp-typescript gulp-sourcemaps gulp-sourcemaps gulp-uglify gulp-nodemon browser-sync --save-dev

## Gulp -> the watchdog

    gulp

*For the provided example, if you run gulp with browser at '/' and you modify index.html, the browser will be autorefreshed. Autorefreshing only works with html pages, not for JSON responses, for instance. That is because [how BrowserSync works][5].*

Enjoy!

[1]: https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
[2]: https://www.sublimetext.com/
[3]: https://packagecontrol.io/packages/TypeScript
[4]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[5]: https://github.com/BrowserSync/browser-sync#requirements
