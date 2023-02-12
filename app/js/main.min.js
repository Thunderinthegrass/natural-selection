// // gnat--------------
// let start = document.querySelector('.btn');
// start.addEventListener('click', gnatFly);
// let gnat = document.querySelector('.gnat');

// let route = 0;

// let flag = 0;

// function gnatFly() {

//   if (flag == 0) {
//     route = Math.round(Math.random() * 500);
//     // routeBack = route - (route * 2);

//     gnat.style.backgroundColor = "#ff5555";
//     // gnat.style.transform = `translateX(${route}vw)`;
//     gnat.style.transform = `rotate(${route}deg) translateX(${route}px) rotate(${route}deg)`;
//     // flag = 1;

//     console.log(route);
//     // console.log(routeBack);
//   }
//   // else{
//   //   gnat.style.backgroundColor = "#0ddfee";
//   //   // gnat.style.transform = "translateX(0)";
//   //   // gnat.style.transform = "rotate(0deg) translateX(-100px) rotate(0deg)";
//   //   flag = 0;
//   // }
// }

// пример из интернета
let scene = document.querySelector(".scene");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let foodBtn = document.querySelector(".food-btn");
let foodEatenCount = 0;
let foodEaten = document.querySelector('.food-eaten');
let deadGnatCount = 0;
let deadGnatCounter = document.querySelector('.dead-gnat-counter');

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

  startBtn.setAttribute("disabled", "disabled");
  stopBtn.removeAttribute("disabled", "disabled");

  let time = 1000;
  let timeTransitionMin = time * 4;
  let timeTransitionMax = time * 5;
  let timeIntervalMin = time;
  let timeIntervalMax = time * 3;
  let size = 1.5;
  let gnatInputValue = document.querySelector('.gnat-input').value;

  for (let i = 0; i < gnatInputValue; i++) {
    GWcreatePart(scene);
  }

  function GWcreatePart(scene) {
    let part = document.createElement("div");//создание едока
    part.className = "part";
    scene.appendChild(part);

    let partInner = document.createElement("div");//наделение едока душой
    partInner.className = "part-inner";
    part.appendChild(partInner);

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

      gnat.forEach((elem) => {//вписываем внутрь едока его прозрачность
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
    partInner.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`; //рандомный цвет

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

        let gnat = document.querySelectorAll('.part');//после появления еды берем всех едоков

        function checkLocation() {//функция съедания еды
          setTimeout(() => {//каждые 10 миллисекунд проверяем, покрывает ли едок еду
            gnat.forEach((elem) => {
              function opacityMore(el) {//с каждым поеданием элемент становится более насыщенным
                let elInner = el.querySelector('.part-inner');
                let elemOpacity = window.getComputedStyle(elInner).opacity;
                elemOpacity = +elemOpacity + 0.05;
                elInner.style.opacity = elemOpacity;
                console.log(elemOpacity)

                if (elemOpacity >= 0.95) {
                      elemOpacity = 1;
                    }

                return;
              }

              let elemOp = window.getComputedStyle(elem).opacity;

              if ((elem.getBoundingClientRect().x > (foodItem.getBoundingClientRect().x - 60) && elem.getBoundingClientRect().x < (foodItem.getBoundingClientRect().x + 20)) && (elem.getBoundingClientRect().y > (foodItem.getBoundingClientRect().y - 60) && elem.getBoundingClientRect().y < (foodItem.getBoundingClientRect().y + 20))) {
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
        let interval = foodInterval.value;//интервал появления еды
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
    gnat.forEach((elem) => {
      function opacityLess(el) {//удаляет элемент, который становится прозрачным, с каждым поеданием он становится все более прозрачным
        let elInner = el.querySelector('.part-inner');
        let elemOpacity = window.getComputedStyle(elInner).opacity;
        elemOpacity = elemOpacity - 0.05;
        elInner.style.opacity = elemOpacity;
        console.log(elemOpacity);

        if (elemOpacity <= 0.05) {
              scene.removeChild(elem);
              deadGnatCount += 1;
              deadGnatCounter.textContent = deadGnatCount;
              return;
            }

        setTimeout(() => {
          opacityLess(elem);
        }, 10000)
      }
      opacityLess(elem);
    })
  }
  foodBtn.addEventListener('click', gnatOpacityLess);
});
