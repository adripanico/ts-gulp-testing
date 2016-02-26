'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');
var runSequence = require('run-sequence').use(gulp);
var ts          = require('gulp-typescript');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var reload      = browserSync.reload;

var SERVER_PORT = 1336;

gulp.task('default', ['build'], function() {
    runSequence([ 'browser-sync', 'watch' ]);
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync = browserSync.init({
        proxy: "http://localhost:" + SERVER_PORT + "/",
        files: ['dist/HttpServer.js', 'dist/**/*.*'],
        browser: "firefox",
        port: 7000
    });
});

gulp.task('nodemon', function (cb) {
    var started = false;
    
    return nodemon({
        script: 'dist/HttpServer.js',
        //watch: ['dist/HttpServer.js', 'dist/**/*.*'],
        ignore: [
            'gulpfile.js',
            'node_modules/'
        ]
    }).on('start', function () {
        if (!started) {
            started = true;
            cb();
        }
    });
    /*.on('restart', function onRestart() {
        console.log(' == Restarting ...');
        browserSync.reload;
        console.log(' ... Restart finished ==');
    });^*/
});

// BUILD SECTION
gulp.task('build', function() {
    return runSequence(
        [
            'build-server-ts'
        ]
    );
});

gulp.task('build-server-ts', function () {
    return gulp.src('src/server/ts/**/*.ts')
        .pipe(ts({
            module: 'commonjs',
            target: 'es5'
        })).js
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

// WATCH SECTION
gulp.task('watch', function() {
    return runSequence(
        [
            'watch-server-ts'
        ]
    );
});

gulp.task('watch-server-ts', function() {
    return gulp.watch(['src/server/ts/**/*.ts'], ['build-server-ts']);
});
