const { src, dest, parallel, watch, series } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

const browsersList = ['> 1%', 'last 2 versions', 'ie >= 11'];

const buildCSS = series(
  () => del('./build/css/**/*'),
  () =>
    src('./src/scss/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({ overrideBrowserslist: browsersList }))
      .pipe(cleanCSS())
      .pipe(dest('./build/css'))
);

const buildJS = series(
  () => del('./build/js/**/*'),
  () =>
    src('./src/js/**/*.js')
      .pipe(babel({ presets: ['@babel/env'] }))
      .pipe(uglify())
      .pipe(dest('./build/js'))
);

exports.build = parallel(buildCSS, buildJS);
exports.watch = () => {
  watch('./src/scss/**/*.scss', buildCSS);
  watch('./src/js/**/*.js', buildJS);
};
