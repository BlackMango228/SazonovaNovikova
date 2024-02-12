function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // a какое из них большее и меньшее вычислим с помощью Math.min и Math.max.
  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, x).
  // мы не ругаем пользователя за переданное отрицательное число.
  // а просто берём его по модулю с помощью Math abs
  // Дальше используем Math random() для получения случайного дробного числа в диапазоне [0, 1).
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа
  // И в конце с помощью метода Math floor мы округляем полученный результат,
  // потому что Math random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

function getRandomArrayElement(array) {
  // возвращает случайный элемент переданного массива
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function getPictures() {
  const arr = []; // - создать массив
  for (let i = 0; i < 25; i++) { // - 25 раз создать объект с данными фотографии и положить его в массив
    const picture = createPicture();
    arr.push(picture);
  }
  return агг;// - вернуть массив
}

function createComment() {
  return {
    // поля описывающие фотографию
return {
    id: getRandomPositiveInteger( 1, 100), // случайное число для id, можете выбрать другой диапазон
    avatar: `img/avatar-${getRandomPositiveInteger( 1, 6)}.svg`,
    message: getRandomArrayElement(message),
    name: getRandomArrayElement(nikname),
  };
}

function createPicture(id){
  const pictureCommentsCount = getRandomPositiveInteger( a: 1, b: 5); // Случайное количество комментариев от 1 до 5
  const pictureComments = new Array(pictureCommentsCount).fill( vale: null).map(() => createComment(id));
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger( 15, 200),
    comments: pictureComments,
  }
}
