var gulp = require('gulp'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

var bowerComponents = ['app/bower_components/angular/angular.min.js',
					   'app/bower_components/jquery/dist/jquery.min.js',
					   'app/bower_components/bootstrap/dist/js/bootstrap.min.js'];

var jsFiles = ['app/app.module.js',
			   'app/*.js',
			   'app/mailform/*.js',
			   'app/textRedactor/*.js',
			   'app/uploadFiles/*.js'];

var cssFiles = ['app/css/*.css',
				'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
				'app/bower_components/bootstrap/dist/css/bootstrap-theme.min.css'];

var templates = ['app/mailform/mailform.directive.html'];


gulp.task('connect', function () {
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('public/index.html')
	.pipe(connect.reload())
});

gulp.task('templates', function(){
	gulp.src(templates)
	.pipe(gulp.dest('public/vendor/templates/'))
	.pipe(connect.reload())
});

gulp.task('bower_components', function(){
	gulp.src(bowerComponents)
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('public/vendor'))
});

gulp.task('css', function () {
	gulp.src(cssFiles)
	.pipe(concat('app.css'))
	.pipe(gulp.dest('public'))
	.pipe(connect.reload())
});

gulp.task('js', function () {
	gulp.src(jsFiles)
	.pipe(concat('app.js'))
	.pipe(gulp.dest('public'))
	.pipe(connect.reload())
});

gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower_components'])
	gulp.watch('public/index.html', ['html'])
	gulp.watch(templates, ['templates'])
	gulp.watch(cssFiles, ['css'])
	gulp.watch(jsFiles, ['js'])
});

gulp.task('default', ['connect', 'html', 'templates', 'bower_components', 'css', 'js', 'watch']);