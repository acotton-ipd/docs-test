// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('tsconfig.json', {
	declaration: true
});

// Scripts Task
gulp.task('scripts', function() {
	return gulp.src(['src/app/**/*.ts', 'typings/index.d.ts'])
		.pipe(tslint({
			configuration: {
				rules: {
					'class-name': true,
					'only-arrow-functions': [true, 'allow-declarations'],
					'no-bitwise': true,
					'no-var-keyword': true,
					'no-trailing-whitespace': true,
					'no-conditional-assignment': true,
					indent: [true, 'tabs'],
					quotemark: [true, 'single'],
					eofline: true,
					semicolon: true,
					whitespace: [true,
						'check-branch',
						'check-decl',
						'check-operator',
						'check-separator',
						'check-type'
					]
				}
			}
		}))
		.pipe(tslint.report({
			emitError: false
		}))
		.pipe(tsProject())
		.pipe(gulp.dest('public/js'));
});

// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src('src/app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

// copy files
gulp.task('files', function() {
	gulp.src('src/app/!(index.html)**/*.html')
		.pipe(gulp.dest('public/'));
	gulp.src('src/app/index.html')
		.pipe(gulp.dest('public/'));
	gulp.src('src/_vendor/**/*')
		.pipe(gulp.dest('public/vendor'));
	gulp.src('src/_assets/**/*')
		.pipe(gulp.dest('public/assets'));
});

gulp.task('build', ['files', 'sass', 'scripts']);

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('src/**/*', ['build']);
});

// Default Task
gulp.task('default', ['build', 'watch']);
