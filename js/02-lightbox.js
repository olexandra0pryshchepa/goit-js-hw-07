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
                    alt="${element.description}"
                />
            </a>
        </li>` ).join('');
}

galleryList.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));
var lightbox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
    captionDelay: 250,
 });