// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
const postcss = require('gulp-postcss'); //autoprefixerとセット
const autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
const browserSync = require( 'browser-sync' ); //ブラウザ反映
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const sassGlob = require("gulp-sass-glob");
gulp.task( 'browser-sync', function(done) {
browserSync.init({

server: {
baseDir: "./",
index: "index.html"
}
});
done();
});
gulp.task('browser-reload', (done) => {
  browserSync.reload();
  done();
});
// style.scssをタスクを作成する
gulp.task("sass", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("assets/scss/*.scss")
      .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
      // Sassのコンパイルを実行
      .pipe(sass())
      .pipe( postcss([ autoprefixer(
      {
      // ☆IEは11以上、Androidは5以上
      // その他は最新2バージョンで必要なベンダープレフィックスを付与する
      "overrideBrowserslist": ["last 2 version", "ie >= 11", "Android >= 5"],
      cascade: false}
      ) ]) )
      // cssフォルダー以下に保存
      .pipe(gulp.dest("./assets/css"))
  );
});


gulp.task('imgmin', (done) => {
  gulp.src('./src/img/**/*')
      .pipe((imagemin([
        pngquant('80'),
        mozjpeg({
          quality: 90, 
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle()
      ])))
      .pipe(gulp.dest('./assets/img'));
      done();
    });

gulp.task('watch-files', (done) =>  {
  gulp.watch("./src/img/**/*", gulp.task('imgmin'));
  gulp.watch("./**/*.html", gulp.task('browser-reload'));
  gulp.watch("./assets/css/*.css", gulp.task('browser-reload'));
  gulp.watch("./assets/scss/**", gulp.task('sass'));
  gulp.watch("./assets/**/*", gulp.task('browser-reload'));
  done();
});
// タスク実行
gulp.task('default', gulp.series( gulp.parallel('watch-files', 'browser-sync', 'sass','imgmin'), (done) => {
  done();
}));
