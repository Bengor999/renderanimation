

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

    //Запрет прокурутки фона
    disableScroll();
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
  //Восстановить прокрутку
  enableScroll();
  }
}


let disableScroll = function () {
  // let scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  // let body = document.body;
  // body.style.position = 'fixed';
  // body.style.top = `-${scrollY}`;




	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {

  // let body = document.body;
  // let scrollY = body.style.top;
  // // body.style.position = '';
  // body.style.top = '';
  // window.scrollTo(0, parseInt(scrollY) * -1);


	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });

