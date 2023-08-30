import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItems(elements) {
    return elements.map((element) =>
        ` <li class="gallery__item">
            <a class="gallery__link" href="${element.original}">
                <img
                    class="gallery__image"
                    src="${element.preview}"
                    data-source="${element.original}"
                    alt="${element.description}"
                />
            </a>
        </li>` ).join('');
}

galleryList.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

galleryList.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG")
        return;
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

    instance.show();
});

galleryList.addEventListener("keydown", event => {
    if (event.code === "Escape") {
        instance.close();
    }
});
