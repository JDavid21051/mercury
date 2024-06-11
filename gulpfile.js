import * as gulp from 'gulp'
import * as uglify from 'gulp-uglify'

// Tarea para minificar archivos JavaScript
gulp.task('minify-js', function () {
  return gulp.src('server-with-mysql.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/mercury/'))
})

// Tarea por defecto que ejecuta ambas tareas
gulp.task('default', gulp.parallel('minify-js', 'minify-css'))
