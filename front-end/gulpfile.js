var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var runSequence = require('run-sequence');

var depsJS = [
                'dev/lib/angular/angular.js',
                'dev/lib/angular/angular-messages.js',
                'dev/lib/angular/angular-ng-mask.js',
                'dev/lib/angular-loading-bar/loading-bar.js'
             ];

var appJS = [
                'dev/js/app.js',
                'dev/js/controllers/phoneList.js',
                'dev/js/services/environmentsService.js',
                'dev/js/services/loadingBarConfig.js',
                'dev/js/services/companyAPIService.js',
                'dev/js/services/contactAPIService.js'
             ];

/** JS TASKS **/
gulp.task('devDeps', function ()
{
    var depsjs = gulp.src(depsJS);
    return depsjs.pipe(concat('phonelist-deps.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('src/resources/js'));
});

gulp.task('devJS', function ()
{
    var js = gulp.src(appJS);
    return js.pipe(concat('phonelist.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('src/resources/js'));
});

/** SASS TASKS **/
gulp.task('sass', function () {
    return gulp.src('dev/sass/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('phonelist.css'))
        .pipe(gulp.dest('src/resources/css'));
});


//define default task
gulp.task('default', function () {
    var sassStream,
        cssStream;

    //compile sass
    sassStream = gulp.src('app.scss')
        .pipe(sass({
            errLogToConsole: true
        }));

    //select additional css files
    cssStream = gulp.src('animate.css');

    //merge the two streams and concatenate their contents into a single file
    return merge(sassStream, cssStream)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.public + 'css/'));
});


/** INITIALIZE **/
gulp.task('default', function (callback)
{
    runSequence('devDeps', 'devJS', 'sass', callback);
});



// gulp.task('app', function() {
//     return gulp.src(['source/lib/**/*.js', 'source/js/*.js', 'source/js/**/*.js'])
//         .pipe(plumber())
//         .pipe(concat('app.min2.js', {newLine: ';'}))
//         .pipe(ngAnnotate({add: true}))
//         .pipe(plumber.stop())
//         .pipe(gulp.dest('js/'));
// });
//
// var bytediff = require('gulp-bytediff');
// var rename = require('gulp-rename');
//
// gulp.task('prod', ['app'], function() {
//     return gulp.src('js/app.min2.js')
//         .pipe(plumber())
//         .pipe(bytediff.start())
//         .pipe(uglify({mangle: true}))
//         .pipe(bytediff.stop())
//         .pipe(rename('app.min.js'))
//         .pipe(plumber.stop())
//         .pipe(gulp.dest('js/'));
// });
//
//
//
//
// var mainBowerFiles = require('main-bower-files');
// var jsFilesLocation: [
//     appRoot + '**/*.module.js',
//     appRoot + '**/*.config.js',
//     appRoot + '**/*.service.js',
//     appRoot + '**/*.controller.js',
//     appRoot + '**/*.js'
// ];
//
// /* Now using the Jsfileslocation and the main-bower-files plugin my task will look like */
// gulp.task('inject-js', function () {
//
//     return gulp.src(config.indexHtmlFileLocation)
//     /* Inject bower references */
//         .pipe(plugins.inject(gulp.src(mainBowerFiles(), { read: false }),
//         /*Inject Code Files */
//             .pipe(plugins.inject(gulp.src(jsFilesLocation, { read: false }),
//                 { relative: true }))
//             .pipe(gulp.dest(destinationPath));
// });