var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus');
	// less = require('gulp-less');

gulp.task('jade', function(){
	gulp.src('./*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'))
})

gulp.task('css', function(){
	gulp.src('./assets/css/*.styl')
		.pipe(stylus())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		}))
		.pipe(gulp.dest('./assets/css/'))
})


gulp.task('watch', function(){
	gulp.watch('./*.jade', ['jade'])
	gulp.watch('./assets/css/*.styl', ['css'])
})

gulp.task('copystartfiles', function(){
	gulp.src('./bower_components/normalize.css/normalize.css')
	.pipe(gulp.dest('./assets/css/'))
})

gulp.task('default', ['jade', 'css', 'watch'])
