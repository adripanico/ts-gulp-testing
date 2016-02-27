'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');
var runSequence = require('run-sequence').use(gulp);
var ts          = require('gulp-typescript');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');

var port = process.env.PORT || 1333;

var BROWSER_SYNC_RELOAD_DELAY = 100;
var BROWSER = 'firefox';

gulp.task('default', ['build'], function() {
    runSequence([ 'browser-sync', 'watch' ]);
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:' + port +'/',
        files: ['./dist/**/*.*'],
        browser: BROWSER,
        port: 7000
    });
});

gulp.task('nodemon', function (cb) {
    var started = false;
    
    return nodemon({
        script: 'dist/HttpServer.js',
        watch: ['dist/**/*.*'],
    }).on('start', function() {
        if (!started) {
            cb();
        }
        started = true;
    }).on('restart', function() {
        setTimeout(function() {
            console.log('Server restarted. Reloading browser sync...');
            browserSync.reload;
        }, BROWSER_SYNC_RELOAD_DELAY);
    });
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
        /*.pipe(uglify())*/
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