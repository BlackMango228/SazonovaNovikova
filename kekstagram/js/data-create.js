import {descriptions, message, nickname} from './data.js';
import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';
// Функция для генерации объекта комментария
function createComment() {
  return {
    id: getRandomPositiveInteger(1, 100), // случайное число для id, можете выбрать другой диапазон
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(message),
    name: getRandomArrayElement(nickname),
  };
}
// Функция для генерации объекта фотографии
function createPicture(id) {
  const pictureCommentsCount = getRandomPositiveInteger(1, 5); // Случайное количество комментариев от 1 до 5
  const pictureComments = new Array(pictureCommentsCount).fill(null).map(() => createComment());

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger(15, 200),
    comments: pictureComments,
  };
}
// Функция для генерации массива фотографий
function getPictures() {
  const picturesCount = 25;
  const pictures = Array.from({length: picturesCount}, (_, index) => createPicture(index + 1));
  // const pictures = new Array(picturesCount).fill(null).map((_, index) => createPicture(index + 1));

  return pictures;
}
export {getPictures};
