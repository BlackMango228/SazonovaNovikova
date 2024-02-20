import {message, descriptions, nickname} from './data.js';
import {getRandomPositiveInteger, getRandomArrayElement} from '/util.js';
function createComment() {
    return {
        // поля описывающие фотографию
        id: getRandomPositiveInteger( 1, 100), // задаём диапазон рандомных положительных чисел
        avatar: `img/avatar-${getRandomPositiveInteger( 1, 6)}.svg`,
        message: getRandomArrayElement(message),
        name: getRandomArrayElement(nickname),
    };
}

function createPicture(id){
    const pictureCommentsCount = getRandomPositiveInteger( 1, 5); // задаём рандомное количество наших комментариев от 1 до 5
    const pictureComments = new Array(pictureCommentsCount).fill(null).map(() => createComment(id));
    return {
        id: id,
        url: `photos/${id}.jpg`,
        description: getRandomArrayElement(descriptions),
        likes: getRandomPositiveInteger( 15, 200),
        comments: pictureComments,
    }
}
function getPictures() {
    const arr = Array.from({length:25},(_, index)=> createPicture(index + 1));
    return arr;// - вернуть массив
}

export {getPictures}