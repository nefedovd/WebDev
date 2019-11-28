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

//Порядок подключения файлов со стилями
const styleFiles = [
  "./src/css/base.less",
  "./src/css/header.less",
  "./src/css/content.less",
  "./src/css/footer.less",
  "./src/css/media.less"
];
//Порядок подключения js файлов
const scriptFiles = ["./src/js/script.js", "./src/js/additional.js"];

//Таск для обработки стилей
gulp.task("styles", () => {
  //Шаблон для поиска файлов CSS
  //Всей файлы по шаблону './src/css/**/*.css'
  return (
    gulp
      .src(styleFiles)
      .pipe(sourcemaps.init())
      //Указать stylus() , sass() или less()
      .pipe(less())
      //Объединение файлов в один
      .pipe(concat("main.css"))
      //Добавить префиксы
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"],
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

//Таск для очистки папки build
gulp.task("del", () => {
  return del(["assets/*"]);
});

//Таск для отслеживания изменений в файлах
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  //Следить за файлами со стилями с нужным расширением
  gulp.watch("./src/css/**/*.less", gulp.series("styles"));
  //Следить за JS файлами
  gulp.watch("./src/js/**/*.js", gulp.series("scripts"));
  //При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on("change", browserSync.reload);
});

//Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task(
  "default",
  gulp.series("del", gulp.parallel("styles", "scripts"), "watch")
);
