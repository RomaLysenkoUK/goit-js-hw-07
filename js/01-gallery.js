// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const newImg = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
        data-source="${image.original}"                      
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", newImg);
list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${e.target.dataset.source}"
    />
`);

  instance.show();
});
// list.addEventListener("keydown", (event) => {
//   if (event.target.key === "Escape") {
//     instance.close();
//     console.dir(event);
//   }
// });

console.log(galleryItems);

//20 строка спросить зачем дата-атрибут если он нигде не используется????
