var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');
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
    'copy:main.css',
    'copy:misc',
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
        .pipe(gulp.dest(dirs.dist + '/js/vendor'));
});

gulp.task('copy:license', function () {
    return gulp.src('LICENSE.txt')
               .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:main.css', function () {

    var banner = '/*! ' + pkg.name + ' v' + pkg.version +
                    ' | ' + pkg.license.type + ' License' +
                    ' | ' + pkg.homepage + ' */\n\n';

    return gulp.src(dirs.src + '/css/main.css')
               .pipe(plugins.header(banner))
               .pipe(plugins.autoprefixer({
                   browsers: ['last 2 versions', 'ie >= 8', '> 1%'],
                   cascade: false
               }))
               .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('copy:misc', function () {
    return gulp.src([

        // Copy all files
        dirs.src + '/**/*',

        // Exclude the following files
        // (other tasks will handle the copying of these files)
        '!' + dirs.src + '/css/main.css',
        '!' + dirs.src + '/index.html'

    ], {

        // Include hidden files by default
        dot: true

    }).pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:normalize', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
               .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('js.concat', function() {
        return gulp.src([
            dirs.dist+'/js/vendor/*.js',
            dirs.dist+'/js/controller/*.js',
            dirs.dist+'/js/model/*.js',
            dirs.dist+'/js/model/contents/*.js',
            dirs.dist+'/js/main.js'
        ])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dirs.dist+'/js'));
});
gulp.task('js.uglify', function(){
    gulp.src(dirs.dist + '/js/main.js')
        .pipe(plumber())
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(dirs.dist+'/js'));
});


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('build', function (done) {
    runSequence(
        'clean',
        'copy',
        'js.concat',
        'js.uglify',
    done);
});

gulp.task('watch', function () {
    gulp.watch([dirs.src + '/js/*', dirs.src + '/css/*'], ['build']);
});

gulp.task('default', ['build']);
