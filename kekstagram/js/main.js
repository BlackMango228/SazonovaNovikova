//import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import './form.js';
import {getData} from './api.js';


//renderPictures(getPictures());

const onLoadSuccess = (data) => {
  renderPictures(data);
};

// const onLoadError = (error) => {
//   // показать ошибку
// };

getData(onLoadSuccess);
