import {showBigPicture} from './big-picture.js';

// Находим темплейт в DOM
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Находим элемент, в который будем вставлять картинки
const picturesContainer = document.querySelector('.pictures');

// Функция для создания элемента картинки на основе объекта данных
function createPictureElement(pictureData) {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = pictureData.url;
  pictureElement.querySelector('.picture__likes').textContent = pictureData.likes;
  pictureElement.querySelector('.picture__comments').textContent = pictureData.comments.length;

  pictureElement.addEventListener('click', () => showBigPicture(pictureData));


  return pictureElement;
}

function renderPictures (photos) {
  // Создаём фрагмент, чтобы собрать все картинки в него, прежде чем добавить их в DOM
  const fragment = document.createDocumentFragment();

  // Проходимся по массиву картинок, создаём элемент для каждой и добавляем в фрагмент
  photos.forEach((pictureData) => {
    const pictureElement = createPictureElement(pictureData);
    fragment.appendChild(pictureElement);
  });

  // Добавляем фрагмент с картинками в DOM
  picturesContainer.appendChild(fragment);
}
export { renderPictures };
