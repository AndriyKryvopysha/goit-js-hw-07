import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


galleryItems.forEach(picture => {
    const galleryWrapper = document.createElement('div');
    galleryWrapper.classList.add('gallery__item');

    const linkEL = document.createElement('a');
    linkEL.classList.add('gallery__link');
    linkEL.href = picture.original;
    
    const clickHandler = event => {
        event.preventDefault();
        const instance = basicLightbox.create(`
    <img src="${picture.original}" width="1280" height="auto">
`)

        instance.show();
       
    }  

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = picture.preview;
    imageEL.dataset.source = picture.original;
    imageEL.alt = picture.description;

    linkEL.append(imageEL);

    galleryWrapper.append(linkEL);

    galleryEl.append(galleryWrapper)

    linkEL.addEventListener('click', clickHandler);
})




// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному
//  шаблону элемента галереи.

// 2 Реализация делегирования на div.gallery и получение url большого изображения.

// 3 Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

// 4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься 
// с документацией и примерами.

// 5 Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров 
// библиотеки basicLightbox.