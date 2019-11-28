# Сборка проекта на Gulp 4
Включает в себя:

    - browser-sync
    - del
    - gulp
    - gulp-autoprefixer
    - gulp-clean-css
    - gulp-concat
    - gulp-less
    - gulp-sourcemaps
    - gulp-uglify

## Структура файлов и папок:

>   ./src 
> >   /css  
> > >   /base.less  
> > >   /header.less  
> > >   /content.less 
> > >   /footer.less  
> > >   /media.less 
> >
> >   /js 
> > >   /script.js  
> > >   /additional.js  
>
>   ./gulpfile.js  
>   ./package.json  
>   ./index.html  

## Каталоги и файлы, которые создадутся автоматически после запуска таска gulp default

>   ./assets  
> >   /css  
> > >   /main.css 
> >
> >   /js 
> > >   /main.js  

## Инструкция:

1. Скачать все файлы в любую директорию
2. Запустить терминал/командную сторку в директории, где распаковали скачанные файлы
3. Ввести в терминале/командной строке команду: npm i (должен быть установлен node.js --> https://nodejs.org/)
3. Выполнить команду: gulp (запуск таска default, который очистит каталог "assets" и запустит таск scripts и styles, а так же watch - отслеживает изменения в файлах *.html, *.css, *.less и *.js)

## Дополнительно:
Подключаемые в index.html: 
- main.css компилируется в каталог ./assets/css/main.css
- main.js компилируется в каталог ./assets/js/main.js
(если необходимо, все изменения необходимо внести в файл gulpfile.js )
