var gulp = require('gulp');
var sass = require('gulp-sass'); //Sassコンパイル
var plumber = require('gulp-plumber'); //エラー時の強制終了を防止
var notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
var sassGlob = require('gulp-sass-glob'); //@importの記述を簡潔にする
var postcss = require('gulp-postcss'); //autoprefixerとセット
var autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
var cssdeclsort = require('css-declaration-sorter'); //css並べ替え
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var mozjpeg = require('imagemin-mozjpeg');


gulp.task("sass",function(){
    return gulp.src("./assets/scss/*.scss")
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )//エラーチェック
.pipe( sassGlob() )//importの読み込みを簡潔にする
.pipe(postcss([autoprefixer({
    "overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 4"],
    cascade: false
})]))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./assets/css"));
});


  // Watch

  gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/*.scss', gulp.series('sass')); // 変更
  });

    //圧縮率の定義
    var imageminOption = [
    optipng({ optimizationLevel: 5 }),
    mozjpeg({ quality: 85 }),
    imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256
    }),
    imagemin.mozjpeg(),
    imagemin.optipng(),
    imagemin.svgo()
    ];
    // 画像の圧縮
    // $ gulp imageminで./src/img/base/フォルダ内の画像を圧縮し./src/img/フォルダへ
    // .gifが入っているとエラーが出る
    gulp.task('imagemin', function () {
    return gulp
    .src('./src/**/**/*.{png,jpg,gif,svg}' , { base: './src'})
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest('./assets'));
    });
