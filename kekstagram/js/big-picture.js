
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const close = document.querySelector('.big-picture__cancel');

const renderPictureDetails = (pictureData) => {
  bigPicture.querySelector('.big-picture__img img').src = pictureData.url; //находит элемент в шаблоне bigPicture в классе  big-picture__img элемент img и присваивает url фото/ Исп-ся для получения ссылки на эл
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
};

const renderComments = (comments) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  comments.forEach((comment) => {                                           // Метод forEach() позволяет применить колбэк-функцию ко всем элементам массива. Должна быть выполнена после того, как другая функция завершила выполнение. Принимает item, index, arr
    const commentElement = document.createElement('li');                  // Создаётся новый ел ли
    commentElement.innerHTML = `<li class="social__comment">                                      
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p></li>`;                                      //Позволяет читать и изменять содержимое HTML-элемента. При записи старое содержимое заменяется новым.

    commentsList.appendChild(commentElement); //позволяет вставить в конец другой элемент.
  });
};

const showBigPicture = (pictureData) => {
  bigPicture.classList.remove('hidden'); //Удаление элемента
  body.classList.add('modal-open'); //добавление элемента

  document.addEventListener('keydown', onEscKeyDown);
  close.addEventListener('click', onClickClose);

  renderPictureDetails(pictureData);
  renderComments(pictureData.comments);
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  close.removeEventListener('click', onClickClose);
};

function onEscKeyDown(e) {
  if(e.key === 'Escape'){
    e.preventDefault();
    hideBigPicture();
  }
}

function onClickClose() {
  hideBigPicture();
}

export {showBigPicture};
