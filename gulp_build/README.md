# Сборка проекта на Gulp 4

## Структура файлов и папок:

> ./src
>
> >     /css
> >
> > >     	/base.less 
> > >     	/header.less 
> > >     	/content.less 
> > >     	/footer.less 
> > >     	/media.less 
> >
> >     /js
> >
> > >     	/script.js
> > >     	/additional.js
> > >
> > > ./gulpfile.js  
> > > ./package.json  
> > > ./index.html

## Инструкция:

1. Скачать все файлы в любую директорию
2. Ввести в терминале/командной строке команду: npm i (должен быть установлен node.js)
3. Выполнить команду: gulp (запуск таска default, который очистит каталог build и запустит таск scripts и styles, а так же watch - отслеживает изменения в файлах html, css, less и js)