// 依赖
var gulp = require('gulp');
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var fileinclude = require('gulp-file-include')
var minifycss = require('gulp-minify-css')

// 任务
gulp.task('uglify', function() {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'));
});
gulp.task('imagemin',function(){
	gulp.src('./img/*.png')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'))
});
gulp.task('fileinclude',function(){
	gulp.src('./about.html')
	.pipe(fileinclude({
		prefix:'@@',
		basepath: '@file'
	}))
	.pipe(gulp.dest('./dist'))
});
gulp.task('minifycss',function(){
	gulp.src('./css/*.css')
	.pipe(minifycss())
	.pipe(gulp.dest('./dist/css'))
});
gulp.task('webserver',function(){
	gulp.src('.')
	.pipe(webserver({
		livereload:true,
		open:true
	}));
});


// 监听
gulp.task('default',function(){
	gulp.run('uglify')
	gulp.run('imagemin')
	gulp.run('fileinclude')
	gulp.run('minifycss')


	gulp.watch('./js/*.js',function(){
		gulp.run('uglify');
	});
	gulp.watch('./img/*.png',function(){
		gulp.run('imagemin');
	});
	gulp.watch('./about.html',function(){
		gulp.run('fileinclude');
	});
	gulp.watch('./css/*.css',function(){
		gulp.run('minifycss');
	})
});