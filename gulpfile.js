"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
var through = require('through2');
var replaceExt = require('replace-ext');

gulp.task('default', () => {
	return gulp.src('src/**/*.*')
		.pipe(babel({
			only: 'src/**/*.es6',
		
			presets: ['es2015', "stage-0"],
			//, 'transform-runtime'
			plugins: ["transform-es5-property-mutators", "transform-es2015-modules-amd"]
		}))
		.pipe(gulp.dest('build'));
});
var watcher = gulp.watch('src/**/*.*', ['default']);
watcher.on('change added', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});