var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var pkg = require('./package.json');
var dirs = pkg['configs'].directories;

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('clean', function (done) {
    require('del')([ dirs.dist ]).then(function () { done(); });
});

gulp.task('copy', [
    'copy:index.html',
    'copy:jquery',
    'copy:license',
    'copy:normalize'
]);

gulp.task('copy:index.html', function () {
    return gulp.src(dirs.src + '/index.html')
               .pipe(plugins.replace(/{{JQUERY_VERSION}}/g, pkg.dependencies.jquery))
               .pipe(plugins.replace(/{{DOMAIN}}/g, pkg.constant.domain))
               .pipe(gulp.dest("./"));
});

gulp.task('copy:jquery', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(plugins.rename('jquery-' + pkg.dependencies.jquery + '.min.js'))
        .pipe(gulp.dest(dirs.src + '/js/vendor'));
});

gulp.task('copy:license', function () {
    return gulp.src('LICENSE.txt')
               .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:normalize', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
               .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('img', function(){
    gulp.src(dirs.src+'/img/*.*')
        .pipe(plumber())
        .pipe(gulp.dest(dirs.dist+'/img'));
});

gulp.task('js', function(){
    gulp.src([
        dirs.src+'/js/vendor/*.js',
        dirs.src+'/js/controller/*.js',
        dirs.src+'/js/model/*.js',
        dirs.src+'/js/model/contents/*.js',
        dirs.src+'/js/main.js'
    ])
        .pipe(plumber())
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(concat('main.js'))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(dirs.dist+'/js'));
});

gulp.task('css', function(){

    var banner = '/*! ' + pkg.name + ' v' + pkg.version +
        ' | ' + pkg.license.type + ' License' +
        ' | ' + pkg.homepage + ' */\n\n';

    gulp.src(dirs.src + '/scss/*.scss')
        .pipe(plumber())
        .pipe(plugins.header(banner))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', '> 1%'],
            cascade: false
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('main.css'))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(dirs.dist+'/css'));
});

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('build', function (done) {
    runSequence(
        'clean',
        'copy',
        'img',
        'js',
        'css',
    done);
});

gulp.task('watch', function () {
    gulp.watch([dirs.src + '/js/*', dirs.src + '/css/*'], ['build']);
});

gulp.task('default', ['build']);
