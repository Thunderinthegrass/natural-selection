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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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
  for (let i = 0; i < 3; i++) {
    GWcreatePart(scene);
  }

  function GWcreatePart(scene) {
    let part = document.createElement("div");
    part.className = "gw-part";
    scene.appendChild(part);

    let start = setInterval(function () {
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

    stopBtn.addEventListener("click", () => {//останавливаем анимацию, удаляем едоков
      stopBtn.setAttribute("disabled", "disabled");
      startBtn.removeAttribute("disabled", "disabled");

      let partItem = document.querySelectorAll(".gw-part");
      clearInterval(start);
      setTimeout(() => {
        partItem.forEach((elem) => {
          scene.removeChild(elem);
        });
      }, 5000);
    });

    part.style.backgroundColor = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`; //рандомный цвет

    //появление еды
    function food() {
      let foodInput = document.querySelector(".food-input");
      let foodBtn = document.querySelector(".food-btn");

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

        function checkLocation() {//функция съедания еды
          setTimeout(() => {//каждые 100 миллисекунд проверяем, покрывает ли едок еду
            
            if ((part.getBoundingClientRect().x > (foodItem.getBoundingClientRect().x - 80) && part.getBoundingClientRect().x < (foodItem.getBoundingClientRect().x + 20)) && (part.getBoundingClientRect().y > (foodItem.getBoundingClientRect().y - 80) && part.getBoundingClientRect().y < (foodItem.getBoundingClientRect().y + 20))) {
              scene.removeChild(foodItem);
            }
    
            checkLocation();
          }, 100);
        }
        checkLocation();
      }

      function cleanInput() {
        document.querySelector(".food-input").value = "";
      }

      foodBtn.addEventListener("click", () => {
        let value = foodInput.value;
        if (value > 0) {
          for (let i = 0; i < value; i++) {
            //цикл количества еды
            addFood();
          }
        }
      });

      foodBtn.addEventListener("click", cleanInput);
    }
    food();
  }
});
