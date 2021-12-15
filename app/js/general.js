
"use strict"


let source = 0;
let dest = 0;
let len = 0;
let now = 0;
let delay = 100;
let letters = 1;
let logicSwitchShowText = true;


//Запуск вывода текста
function showText() {
    if (logicSwitchShowText) {
    logicSwitchShowText = false;
   
    source = document.querySelector(".quote__content-text_hidden");
    dest = document.querySelector(".quote__content-text");
    len = source.innerHTML.length;

    setTimeout("showSignPosition()", 10000)

    show();
    }
}
 //Повторяемый побуквенный вывод текста
function show() {

    dest.innerHTML += source.innerHTML.substr(now,letters);
    now+=letters;
    if(now<len) {setTimeout("show()",delay)};

}
//Показ подписи и должности
function showSignPosition() {
    let sign = document.querySelector(".quote__content-text-sign");
    let position = document.querySelector(".quote__content-text-position");
    sign.classList.remove("quote__content-text-sign_hidden")
    position.classList.remove("quote__content-text-position_hidden")
}


// Получаем нужный элемент
let elementQuote = document.querySelector('.quote__content-text');

let visibleElement = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom //&& // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    //targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    //targetPosition.left < windowPosition.right
    ) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    showText()
    //Чистим слушателей лишних
    window.removeEventListener('scroll', function() {
      visibleElement (elementQuote);
      });
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  visibleElement (elementQuote);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
visibleElement (elementQuote);





//Молотки и гвозди

  function hammerEndPin() {
  
    let tagElement = document.querySelector(".section-age__content-tag")
    let hammerElement = document.querySelector(".section-age__content-tag-hammer");

    tagElement.addEventListener('mouseover', function() {
      visibleHammer(hammerElement);
      });
    tagElement.addEventListener('mouseout', function() {
      hiddenHammer(hammerElement);
      });
  }
  

  function visibleHammer (hammerElement) {
    hammerElement.classList.add("section-age__content-tag-hammer_swinging");
  }
  function hiddenHammer (hammerElement) {
    hammerElement.classList.remove("section-age__content-tag-hammer_swinging");
    
  }
  hammerEndPin()

