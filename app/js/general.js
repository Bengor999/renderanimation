
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

let logicSwitchhammerEndPin = true;

  function hammerEndPin() {
  
    let tagElement = document.querySelector(".section-age__content-tag")
    let hammerElement = document.querySelector(".section-age__content-tag-hammer");
    let pinLeftElement = document.querySelector(".section-age__content-tag-pin_left");
    let pinRightElement = document.querySelector(".section-age__content-tag-pin_right");
    
    tagElement.addEventListener('mouseover', function() {
      visibleTools(hammerElement, pinLeftElement, pinRightElement);
    });
    tagElement.addEventListener('click', function() {
      workingTools(hammerElement, pinLeftElement, pinRightElement, tagElement);
    });
    tagElement.addEventListener('mouseout', function() {
      hiddenTools(hammerElement, pinLeftElement, pinRightElement);
    });
  }
  hammerEndPin()

  function visibleTools (hammerElement, pinLeftElement, pinRightElement) {
    if(logicSwitchhammerEndPin) {
      hammerElement.classList.add("section-age__content-tag-hammer_increase");
      pinLeftElement.classList.add("section-age__content-tag-pin_increase");
      pinRightElement.classList.add("section-age__content-tag-pin_increase");
    }
  }
  function hiddenTools (hammerElement, pinLeftElement, pinRightElement) {
    hammerElement.classList.remove("section-age__content-tag-hammer_increase");
    pinLeftElement.classList.remove("section-age__content-tag-pin_increase");
    pinRightElement.classList.remove("section-age__content-tag-pin_increase");
  }
function workingTools(hammerElement, pinLeftElement, pinRightElement, tagElement) {
  if (logicSwitchhammerEndPin) {

    logicSwitchhammerEndPin = false;

    tagElement.classList.remove("js-section-age__content-tag");

    hammerElement.classList.add("section-age__content-tag-hammer_hammering");
    hammerElement.classList.remove("section-age__content-tag-hammer_increase");

    pinLeftElement.classList.add("js-pin-left__hammering");
    pinLeftElement.classList.remove("section-age__content-tag-pin_increase");
    pinRightElement.classList.add("js-pin-right__hammering");
    pinRightElement.classList.remove("section-age__content-tag-pin_increase");
    
    setTimeout("workingToolsDislocation()",3000)
  }
}

function workingToolsDislocation() {
  let hammerElement = document.querySelector(".section-age__content-tag-hammer");
  hammerElement.classList.add("section-age__content-tag-hammer_hammering-dislocation");
  hammerElement.classList.remove("section-age__content-tag-hammer_hammering");
  setTimeout("workingToolsRight()",1000);
}
function workingToolsRight() {
  let hammerElement = document.querySelector(".section-age__content-tag-hammer");
  hammerElement.classList.add("section-age__content-tag-hammer_hammering-right");
  hammerElement.classList.remove("section-age__content-tag-hammer_hammering-dislocation");
  setTimeout(() => {
    let tagElement = document.querySelector(".section-age__content-tag")
    let hammerElement = document.querySelector(".section-age__content-tag-hammer");
    // let pinLeftElement = document.querySelector(".section-age__content-tag-pin_left");
    // let pinRightElement = document.querySelector(".section-age__content-tag-pin_right");
    
    tagElement.removeEventListener('mouseover', function() {
      visibleTools(hammerElement, pinLeftElement, pinRightElement);
    });
    tagElement.removeEventListener('click', function() {
      workingTools(hammerElement, pinLeftElement, pinRightElement, tagElement);
    });
    tagElement.removeEventListener('mouseout', function() {
      hiddenTools(hammerElement, pinLeftElement, pinRightElement);
    });

    hammerElement.classList.remove("section-age__content-tag-hammer_hammering-right");


  }, 3000);
}


