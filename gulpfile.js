var gulp = require("gulp"),
    rigger = require("gulp-rigger");

gulp.task("js-rigger", function() {
    return gulp.src("source/js/*.js")
        .pipe(rigger())
        .pipe(gulp.dest("app/assets/js/"));
});
