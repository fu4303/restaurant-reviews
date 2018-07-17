const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
	gulp.src('css/styles.css')
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
		}))
		.pipe(gulp.dest('dist'))
);