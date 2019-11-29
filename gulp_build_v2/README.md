# Сборка проекта на Gulp 4
Включает в себя:
    - gulp
    - gulp-concat
    - gulp-autoprefixer
    - gulp-clean-css
    - gulp-uglify
    - del
    - browser-sync
    - gulp-sourcemaps
    - gulp-less
    - gulp-file-include
    - gulp-imagemin
    - imagemin-pngquant
    - gulp-cache

## Структура файлов и папок:

>   ./src 
> >   /html
> > >   /index.html (сборка/импорт блоков через @@include('block/_XXXXXX.html'))
> > >   /block
> > > >   /_header.html
> > > >   /_main.html
> > > >   /_footer.html
> >
> >   /less    
> > >   /main.less (сборка/импорт блоков через @import "block/_XXXXXX.less";)  
> > >   /block  
> > > >   /_base.less 
> > > >   /_header.less  
> > > >   /_section.less 
> > > >   /_footer.less 
> >
> >   /js 
> > >   /script.js  
> > >   /additional.js  
> >
> >  /img
> > >   /sample
> > > >   /*.* 
>
>   ./gulpfile.js  
>   ./package.json  

## Каталоги и файлы, которые создадутся автоматически после запуска таска gulp default

>   ./assets  
> >   /css  
> > >   /main.css 
> >
> >   /js 
> > >   /main.js
> >  
> >  ./img  
> > >   /*.*
>  
>   ./index.html  

## Инструкция:

1. Скачать все файлы в любую директорию (или через терминал/командную строку воспользоваться командой git clone ссылка на этот репозиторий)
2. Запустить терминал/командную сторку в директории, где распаковали скачанные файлы
3. Ввести в терминале/командной строке команду: npm i (должен быть установлен node.js --> https://nodejs.org/)
3. Выполнить команду: gulp (запуск таска default, который очистит каталог "assets" и запустит таск clear, img, styles, scripts, fileinclude, а так же watch - отслеживает изменения в файлах *.html, *.less, *.js и все файлы в каталоге "./src/img")
