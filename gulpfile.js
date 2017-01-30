'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('sass', () => {
  gulp.src('./app/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
});

gulp.task('js', () => {
  gulp.src([
    './app/javascript/components/prodcut.js',
    './app/javascript/app.js',
    './app/javascript/**/*.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', () => {
  gulp.watch('./app/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./app/javascript/**/*.js', ['js']);
});
