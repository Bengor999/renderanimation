

//Вешаем слушателей на элементы запуска видео
function ButtonListener() {
    
  //Ищем коллецию карточек на нашем поле
  let arrow = document.querySelectorAll('.slider-video1__slide-button');

  //Создаем цикл для перебора массива и приклеивания функции нашим карточкам
  for (let i = 0; i < arrow.length; i++) {
    let clickButton = arrow[i];
    clickButton.addEventListener('click', ButtonClick);
  }
}
ButtonListener()

//Определяем обьект клика
function ButtonClick(eventObject) {
//определяем обьект клика
    let clickedEl = eventObject.currentTarget;
    //Вытаскиваем из дата атрибута HTML ссылку для видео
    let src = clickedEl.dataset.info;
    //заложенный заранее элемент делаем видимым и наполняем контентом
    let modalEl = document.querySelector('.video-modal-frame')
    modalEl.style.display = "flex";
  //Добавляем код в элемент
    modalEl.innerHTML = `<div class="video-modal-frame__content">
      <span class="video-modal-frame__close">&times;</span>
      <iframe width="100%" height="90%" src="${src}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
  //вешаем слушателей на фон видео и крестик закрытия
    closedVideoListener()
}

//Вешаем слушателей на элементы завершения видео
function closedVideoListener() {
    
  //Ищем коллецию карточек на нашем поле
  let el1 = document.querySelector('.video-modal-frame');
  el1.addEventListener('click', closedVideoClick);

  let el2 = document.querySelector('.video-modal-frame__close');
  el2.addEventListener('click', closedVideoClick);
}

//Определяем обьект клика
function closedVideoClick(eventObject) {
  //Определяем обьект клика
  let clickedEl = eventObject.currentTarget;
  //проверяем дополнительно где был клик
  if (clickedEl.classList.contains('video-modal-frame') || clickedEl.classList.contains('video-modal-frame__close')) {
    let modalEl = document.querySelector('.video-modal-frame')
    //прячем модульное окно
      modalEl.style.display = "none";
  //очищаем модульное окно, прекращая видео
      modalEl.innerHTML = ``;
  }
}



