<p align="center">
  <a target="_blank" href="http://gulpjs.com">
    <img height="100" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" style="border: 0;" />

  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a target="_blank" href="http://www.typescriptlang.org/">
      <img height="50" src="http://www.typescriptlang.org/content/images/logo_small.png" style="border: 0;" />
  </a>
</p>

# Playing around with TypeScript & Gulp

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

4. TSD

    To easier manage TypeScrip's dependencies.

5. [Sublime Text 3][2] + [Type​Script package][3] (optional)

## Setting up the folder/environment

If we are going to create a new node project:

    npm init
    npm install express --save

As we can read on [Gulp's *Getting started* documentation][4], we need to install Gulp in our project devDependencies:

    npm install gulp gulp-typescript gulp-nodemon --save-dev

, and for automatically browser refreshing:

    npm install browser-sync --save-dev

Starting TypeScript Definition manager for DefinitelyTyped:

    tsd init

## Gulp the watchdog

    gulp watch

Enjoy!

[1]: https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
[2]: https://www.sublimetext.com/
[3]: https://packagecontrol.io/packages/TypeScript
[4]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
