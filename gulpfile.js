'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const less = require('gulp-less');

gulp.task('less', function() {
  console.log('watching less files');
  return watch(['./less/**/*.less'], function() {
    console.log('gulp');
    gulp.src('./less/ssp-v6.less')
      .pipe(less())
      .pipe(gulp.dest('./css'));
  });
});
