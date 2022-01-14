import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(picture => {
    
    const linkEL = document.createElement('a');
    linkEL.classList.add('gallery__item');
  linkEL.href = picture.original;
 

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = picture.preview;
    imageEL.alt = picture.description;

    linkEL.append(imageEL);

    galleryEl.append(linkEL)

})
    
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });



// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону 
// элемента галереи. Используй готовый код из первого задания.

// 2 Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо 
// добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.

// 3 Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

// 4 Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям 
// из атрибута alt.Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.