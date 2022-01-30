let gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCSS    = require('gulp-concat-css'),
    // compressCSS  = require('gulp-csso'),
    browserSync  = require('browser-sync');

gulp.task('html', function () {
    return gulp.src('../*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss', function () {
    return gulp.src('../assets/scss/main.scss')
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

gulp.task('js', function () {
    return gulp.src('../assets/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watcher', function () {
    gulp.watch('../*.html', gulp.parallel('html'));
    gulp.watch('../assets/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('../assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: '../'
        }
    });
});

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watcher'));

/*<----- Variant if need to minify «css» files and add sourcemaps ----->*/
/*
    let gulp         = require('gulp'),
        scss         = require('gulp-scss'),
        autoprefixer = require('gulp-autoprefixer'),
        // concatCSS    = require('gulp-concat-css'),
        concat       = require('gulp-concat'),
        cleancss     = require('gulp-clean-css'),
        sourcemaps   = require('gulp-sourcemaps'),
        compressCSS  = require('gulp-csso'),
        browserSync  = require('browser-sync');

    gulp.task('html', function () {
        return gulp.src('../!*.html')
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('scss', function () {
        return gulp.src('../assets/scss/main.scss')
            .pipe(sourcemaps.init())
            .pipe(scss().on('error', scss.logError))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 3 versions', 'ie >= 10'],
                cascade: false
            }))
            .pipe(concat('style.css'))
            .pipe(compressCSS())
            .pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('../assets/css'))
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('js', function () {
        return gulp.src('../assets/js/!*.js')
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('watcher', function () {
        gulp.watch('../!*.html', gulp.parallel('html'));
        gulp.watch('../assets/scss/!**!/!*.scss', gulp.parallel('scss'));
        gulp.watch('../assets/js/!**!/!*.js', gulp.parallel('js'));
    });

    gulp.task('browser-sync', function () {
        browserSync.init({
            server: {
                baseDir: '../'
            }
        });
    });

    gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watcher'));
*/