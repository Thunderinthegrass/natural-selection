// // gnat--------------
const scene = document.querySelector(".scene");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const foodBtn = document.querySelector(".food-btn");
let foodEatenCount = 0;
let foodEaten = document.querySelector('.food-eaten');
let deadGnatCount = 0;
let deadGnatCounter = document.querySelector('.dead-gnat-counter');
let gnatIcons = document.querySelector('.gnat-icons');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntWithoutRounding(min, max) {
  return Math.random() * (max - min) + min;
}

startBtn.addEventListener("click", function (e) {
  if (!scene) {
    return;
  }

  // startBtn.setAttribute("disabled", "disabled");
  stopBtn.removeAttribute("disabled", "disabled");

  let time = document.querySelector('.gnat-speed').value;
  time = +time;
  let timeTransitionMin = time * 4;
  let timeTransitionMax = time * 5;
  let timeIntervalMin = time;
  let timeIntervalMax = time * 3;
  let size = 1.5;
  let gnatInputValue = document.querySelector('.gnat-input').value;
  let gnatSizeValue = document.querySelector('.gnat-size').value;//размер комара

  

  for (let i = 0; i < gnatInputValue; i++) {
    GWcreatePart(scene);
  }

  function GWcreatePart(scene, inheritWidth) {
    let part = document.createElement("div");//создание едока
    part.className = "part";
    if (inheritWidth) {
      part.style.width = `${inheritWidth}px`;
      part.style.height = `${inheritWidth}px`;
    } else{
      part.style.width = `${gnatSizeValue}px`;
      part.style.height = `${gnatSizeValue}px`;
    }
    scene.appendChild(part);

    let partInner = document.createElement("div");//наделение едока душой
    partInner.className = "part-inner";
    part.appendChild(partInner);
    

    let gnatIcon = document.createElement('div');//создание иконки комара
    gnatIcon.className = 'gnat-icon';
    gnatIcons.appendChild(gnatIcon);

    let gnatInfo = document.createElement('span');//создание информационной иконки комара
    gnatInfo.className = 'gnat-info';
    gnatIcon.appendChild(gnatInfo);

    let start = setInterval(function () {//функция рандомного движения едоков
      let tempTime = getRandomInt(timeTransitionMin, timeTransitionMax);
      part.style.transition = tempTime + "ms all";
      part.style.transform =
        "translateX(" +
        getRandomInt(
          -scene.getBoundingClientRect().width / size,
          scene.getBoundingClientRect().width / size
        ) +
        "px) translateY(" +
        getRandomInt(
        -scene.getBoundingClientRect().height / size,
          scene.getBoundingClientRect().height / size
        ) +
        "px)";
    }, getRandomInt(timeIntervalMin, timeIntervalMax));

    function gnatCounter() {//счетчик едоков и их параметров
      let gnat = document.querySelectorAll('.part-inner');
      let gnatCount = document.querySelector('.gnat-counter');

      gnat.forEach((elem, id) => {//вписываем внутрь едока его прозрачность
        let elemOpacity = window.getComputedStyle(elem).opacity;
        elem.textContent = elemOpacity;
      })

      gnatCount.textContent = gnat.length;
      setTimeout(() => {
        gnatCounter();
      }, 500);
    }
    gnatCounter();

    stopBtn.addEventListener("click", () => {//останавливаем анимацию, удаляем едоков
      stopBtn.setAttribute("disabled", "disabled");
      startBtn.removeAttribute("disabled", "disabled");

      let partItem = document.querySelectorAll(".part");
      clearInterval(start);
      setTimeout(() => {
        partItem.forEach((elem) => {
          scene.removeChild(elem);
        });
      }, 5000);
    });

    //цвета
    let red = getRandomInt(0, 255);
    let green = getRandomInt(0, 255);
    let blue = getRandomInt(0, 255);
    // let alpha = getRandomIntWithoutRounding(0, 1);
    let alpha = 1;
    partInner.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`; //рандомный цвет комаров

    let iconBg = window.getComputedStyle(partInner).backgroundColor;//цвет иконок как у комаров
    gnatIcon.style.backgroundColor = iconBg;
    gnatIcon.style.borderColor = iconBg;

    //появление еды
    function food() {
      let foodInput = document.querySelector(".food-input");
      let foodInterval = document.querySelector('.food-input-interval');

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      function addFood() {
        //создание элемента еды
        let foodItem = document.createElement("div");
        foodItem.className = "food-item";
        foodItem.style.left = `${getRandomInt(0, 100)}%`;
        foodItem.style.top = `${getRandomInt(0, 100)}%`;
        scene.appendChild(foodItem);

        // let gnat = document.querySelectorAll('.part');//после появления еды берем всех едоков

        function checkLocation() {//функция съедания еды
          let gnat = document.querySelectorAll('.part');//после появления еды берем всех едоков
          let gnatSize = getComputedStyle(gnat[0]).width;
          // console.log(gnatSize);
          
          
          setTimeout(() => {//каждые 10 миллисекунд проверяем, покрывает ли едок еду
            gnat.forEach((elem) => {
              // console.log(getComputedStyle(elem).width);
              
              function opacityMore(el, id) {//с каждым поеданием элемент становится более насыщенным
                let elInner = el.querySelector('.part-inner');
                let elemOpacity = window.getComputedStyle(elInner).opacity;
                elemOpacity = +elemOpacity + 0.05;
                elInner.style.opacity = elemOpacity;

                if (elemOpacity > 0.95) {
                  let inheritWidth = +el.getBoundingClientRect().width;
                      elemOpacity = 0.5;
                      elInner.style.opacity = elemOpacity;
                      GWcreatePart(scene, inheritWidth);
                    }

                return;
              }

              let elemOp = window.getComputedStyle(elem).opacity;

              if ((elem.getBoundingClientRect().x > (foodItem.getBoundingClientRect().x - elem.getBoundingClientRect().width) && elem.getBoundingClientRect().x < (foodItem.getBoundingClientRect().x + 20)) && (elem.getBoundingClientRect().y > (foodItem.getBoundingClientRect().y - elem.getBoundingClientRect().width) && elem.getBoundingClientRect().y < (foodItem.getBoundingClientRect().y + 20))) {
                scene.removeChild(foodItem);
                opacityMore(elem);

                foodEatenCount += 1;
                foodEaten.textContent = foodEatenCount;
              }
            })
    
            checkLocation();
          }, 10);
        }
        checkLocation();
      }

      function cleanFoodInput() {//очистка инпута еды после клика по кнопке добавления еды
        document.querySelector(".food-input").value = "";
      }

      foodBtn.addEventListener("click", () => {
        let interval = foodInterval.value * 1000;//интервал появления еды
        let quantityValue = foodInput.value;//количество еды

        function quantityFood() {
          if (quantityValue > 0) {
            for (let i = 0; i < quantityValue; i++) {
              //цикл количества еды
              addFood();
            }
          }
          let foodIntervalQuantity = setTimeout(() => {
            quantityFood();
          }, interval);
        }
        quantityFood();

        function foodCounter() {//счетчик еды
          let food = document.querySelectorAll('.food-item');
          let foodCount = document.querySelector('.food-counter');
          
          foodCount.textContent = food.length;

          setTimeout(() => {
            foodCounter();
          }, 100);
        }
        foodCounter();
      });

      foodBtn.addEventListener("click", cleanFoodInput); 
    }
    food();
  }

  function gnatOpacityLess() {//функция уменьшения непрозрачности
    let gnat = document.querySelectorAll('.part');
    let gnatIcon = document.querySelectorAll('.gnat-icon');
    let gnatInfo = document.querySelectorAll('.gnat-info');
    gnat.forEach((elem, id) => {
      function opacityLess(el) {//удаляет элемент, который становится прозрачным, с каждым поеданием он становится все более прозрачным
        let elInner = el.querySelector('.part-inner');
        let elemOpacity = window.getComputedStyle(elInner).opacity;
        elemOpacity = elemOpacity - 0.05;
        elInner.style.opacity = elemOpacity;
        gnatInfo[id].textContent = elemOpacity.toFixed(2);//добавление подписи со значением прозрачности к иконке комара
        // console.log(elemOpacity);

        if (elemOpacity < 0.05) {
              scene.removeChild(elem);
              document.querySelector('.gnat-icons').removeChild(gnatIcon[id]);
              deadGnatCount += 1;
              deadGnatCounter.textContent = deadGnatCount;
              return;
        }
      }
      opacityLess(elem);
    })
    setTimeout(() => {
      gnatOpacityLess();
    }, 5000);
  }
  foodBtn.addEventListener('click', gnatOpacityLess);

  let satiety = document.querySelector('.satiety');//функция сытости
  function satietyCount() {
    let gnatInfo = document.querySelectorAll('.gnat-info');
    let count = 0;

    gnatInfo.forEach((elem) => {
      elemValue = +elem.innerHTML;
      count = elemValue / gnatInfo.length;
    })
    
    satiety.textContent = count;

    setTimeout(() => {
      satietyCount();
    }, 500)
  }
  foodBtn.addEventListener('click', satietyCount);
});