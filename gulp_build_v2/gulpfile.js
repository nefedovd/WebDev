//Подключаем галп
const gulp = require("gulp");
//Объединение файлов
const concat = require("gulp-concat");
//Добапвление префиксов
const autoprefixer = require("gulp-autoprefixer");
//Оптисизация стилей
const cleanCSS = require("gulp-clean-css");
//Оптимизация скриптов
const uglify = require("gulp-uglify");
//Удаление файлов
const del = require("del");
//Синхронизация с браузером
const browserSync = require("browser-sync").create();
//Для препроцессоров стилей
const sourcemaps = require("gulp-sourcemaps");
//Less препроцессор
const less = require("gulp-less");
//File include
const fileinclude = require('gulp-file-include');
//Rename
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
const pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
const cache = require('gulp-cache'); // Подключаем библиотеку кеширования

// Сборка блоков в один html файл
gulp.task("fileinclude", () => {
  return (
    gulp.src("./src/html/[^_]*.html")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest("./"))
  );
 });


//Таск для обработки стилей
gulp.task("styles", () => {
  //Шаблон для поиска файлов CSS
  //Всей файлы по шаблону './src/css/**/*.css'
  return (
    gulp
      .src("./src/less/main.less")
      .pipe(sourcemaps.init())
      //Указать stylus() , sass() или less()
      .pipe(less())
      //Объединение файлов в один
      //Добавить префиксы
      .pipe(
        autoprefixer({
          cascade: false
        })
      )
      //Минификация CSS
      .pipe(
        cleanCSS({
          level: 2
        })
      )
      .pipe(sourcemaps.write("./"))
      //Выходная папка для стилей
      .pipe(gulp.dest("./assets/css"))
      .pipe(browserSync.stream())
  );
});

const scriptFiles = ["./src/js/_script.js", "./src/js/_additional.js"];

//Таск для обработки скриптов
gulp.task("scripts", () => {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону './src/js/**/*.js'
  return (
    gulp
      .src(scriptFiles)
      //Объединение файлов в один
      .pipe(concat("main.js"))
      //Минификация JS
      .pipe(
        uglify({
          toplevel: true
        })
      )
      //Выходная папка для скриптов
      .pipe(gulp.dest("./assets/js"))
      .pipe(browserSync.stream())
  );
});

// Таск для сжатия изображений
gulp.task('img', function() {
  return gulp.src('./src/img/**/*') // Берем все изображения из src
      .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
          interlaced: true,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      })))
      .pipe(gulp.dest('./assets/img')); // Выгружаем на продакшен
});

//Таск для очистки папки build
gulp.task("clear", () => {
  return del(["assets/*"]);
});

//Таск для отслеживания изменений в файлах
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  //При изменении HTML запустить синхронизацию
  gulp.watch("./src/html/**/*.html", gulp.parallel("fileinclude")).on("change", browserSync.reload);
  //Следить за файлами со стилями с нужным расширением
  gulp.watch("./src/less/**/*.less", gulp.parallel("styles"));
  //Следить за JS файлами
  gulp.watch("./src/js/**/*.js", gulp.parallel("scripts"));
  //Следить за img
  gulp.watch("./src/img/**/*", gulp.parallel("img"));
});

//Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task(
  "default",
  gulp.parallel("clear", "img", "styles", "scripts", "fileinclude", "watch")
);
