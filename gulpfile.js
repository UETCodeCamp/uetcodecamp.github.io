'use strict';

const gulp = require('gulp');
const gulpInclude = require('gulp-file-include');
const gulpWatch = require('gulp-watch');

const assets = [
    './css/**/*',
    './fonts/**/*',
    './images/**/*',
    './js/**/*'
];

const layouts = [
    './layouts/**/*'
];

const includeFiles = [
    './pages/*.html'
];

const buildDir = './';

gulp.task('copy-assets', function () {
    return gulp.src(assets, {base: '.'})
        .pipe(gulp.dest(buildDir))
});

gulp.task('include-html', function () {
    return gulp.src(includeFiles)
        .pipe(gulpInclude())
        .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['include-html'], function (cb) {
    return cb();
});

gulp.task('dev', ['build'], function (cb) {
    return gulpWatch(
        assets.concat(layouts).concat(includeFiles),
        function () {
            gulp.start('build');
        }
    );
});