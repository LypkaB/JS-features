const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concatCSS = require('gulp-concat-css'),
      // compressCSS = require('gulp-csso'),
      browserSync = require('browser-sync');

gulp.task('html', function() {
    return gulp.src('../*.html').pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
    return gulp.src('../assets/sass/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions', 'ie >= 10'],
            cascade: false
        }))
        .pipe(concatCSS('style.css'))
        // .pipe(compressCSS())
        .pipe(gulp.dest('../assets/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src('../assets/js/*.js').pipe(browserSync.reload({stream: true}))
});

gulp.task('watcher', function() {
    gulp.watch('../*.html', gulp.parallel('html'));
    gulp.watch('../assets/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('../assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: '../'
        }
    })
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watcher'));