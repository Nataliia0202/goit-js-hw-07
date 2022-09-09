import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    }).join("");
    
}

function onGalleryContainerClick(event) {
  // console.log(event.target);
  event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }

    const selectedImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
    `);

  instance.show();
  
  gallery.addEventListener("keydown", keyСlosure);

  function keyСlosure(evt) {
    
    if (evt.key === "Escape") {
      instance.close();
    }
  }

}
