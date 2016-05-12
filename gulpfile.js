"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
var through = require('through2');
var replaceExt = require('replace-ext');
var UglifyJS = require('uglify-js');
var path = require('path');


var change = function(options) {
	// 创建一个让每个文件通过的 stream 通道
	return through.obj(function(file, enc, cb) {
	if (file.isNull()) {
	  // 返回空文件
	  cb(null, file);
	}
	if (path.extname(file.path) === '.js') {
		try{
			toplevel =  null;
			var toplevel = UglifyJS.parse(file.contents.toString(), {
			   filename: file.path,
			   toplevel: toplevel
			});
			toplevel.figure_out_scope();
			var compressor = UglifyJS.Compressor({

			});
			toplevel = toplevel.transform(compressor);
			toplevel.figure_out_scope();
			var stream = UglifyJS.OutputStream({
				beautify:true
			});
			toplevel.print(stream);
			var min = stream.get();
			file.contents = new Buffer(min);
		}catch(e) {
			console.log(e.stack);
		}
	}
	cb(null, file);
  });			
};

gulp.task('default', () => {
	return gulp.src('src/**/*.*')
		.pipe(babel({
			only: 'src/**/*.es6',
			presets: ['es2015', "stage-0"],
			//, 'transform-runtime'
			plugins: ["transform-es5-property-mutators", "transform-es2015-modules-amd"]
		}))
		// .pipe(change())
		.pipe(gulp.dest('build'));
});


var watcher = gulp.watch('src/**/*.*', ['default']);
watcher.on('change added', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});