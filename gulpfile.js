var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var htmlbeautify = require('gulp-html-beautify');
var del = require('del');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  return sass('src/sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('html', function() {
  var options = {
    indentSize: 2
  };
  gulp.src('./src/html/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({ stream:true }));
});

gulp.task('fonts', function() {
  return gulp.src(['./src/fonts/**/*'])
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/html/*.html', ['html']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('images', function() {
  gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});
 
gulp.task('scripts', function() {
  return gulp.src(['./src/js/jquery.scrollme.js', './src/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({ stream:true }));
});

gulp.task('default', ['images', 'fonts', 'sass', 'html', 'scripts', 'serve']);