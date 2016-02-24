var gulp        = require('gulp');
var ts          = require('gulp-typescript');
var browserSync = require('browser-sync').create();

// just build all the typescript files
gulp.task("build-ts", function () {
    var tsResult = gulp.src("*.ts")
                       .pipe(ts({
                            module: 'amd',
                            noImplicitAny: true
                        }));
    browserSync.reload();
    return tsResult.js.pipe(gulp.dest('.'));
});

// watch the files for changes and rebuild everything
gulp.task("ts-watch", ['build-ts'], browserSync.reload);

gulp.task("default", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.ts", ['ts-watch']);
});