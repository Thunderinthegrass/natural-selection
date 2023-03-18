const lists = document.querySelectorAll(".list");
const addBoardBtn = document.querySelector(".button");

function addTask() {
  const btn = document.querySelector(".add-btn");
  const addBtn = document.querySelector(".add__item-btn");
  const cancelBtn = document.querySelector(".cancel__item-btn");
  const textarea = document.querySelector(".textarea");
  const form = document.querySelector(".form");
  let closeBtn = document.querySelector(".close-btn");

  let value;

  btn.addEventListener("click", () => {
    form.classList.remove("d-none");
    btn.classList.add("d-none");
    addBtn.classList.add("d-none");
    cancelBtn.classList.remove("d-none");
  });

  textarea.addEventListener("input", (e) => {
    value = e.target.value;
    if (value) {
      addBtn.classList.remove("d-none");
    } else {
      addBtn.classList.add("d-none");
    }
  });

  cancelBtn.addEventListener("click", () => {
    textarea.value = "";
    value = "";
    btn.classList.remove("d-none");
    form.classList.add("d-none");
    addBtn.classList.add("d-none");
    cancelBtn.classList.add("d-none");
  });

  addBtn.addEventListener("click", () => {
    let item = document.createElement("li");
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    item.classList.add("list__item");
    item.setAttribute("draggable", "true");
    item.textContent = value;
    lists[0].append(item);
    item.append(closeBtn);
    textarea.value = "";
    value = "";
    addBtn.classList.add("d-none");

    closeBtn.addEventListener("click", () => {
      item.remove();
    });

    dragNDrop();
  });

  let listItem = document.querySelector(".list__item");
  closeBtn.addEventListener("click", () => {
    listItem.remove();
  });
}
addTask();

function addBoard() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards__item");
  board.innerHTML = `
  <button class="close-board-btn"></button>
  <span contenteditable="true" class="title">Введите название</span>
  <ul class="list">
    
  </ul>`;
  boards.append(board);
  const removeBoardBtn = board.querySelector(".close-board-btn");
  removeBoardBtn.addEventListener("click", () => {
    board.remove();
  });

  dragNDrop();
}
addBoardBtn.addEventListener("click", addBoard);

let draggedItem = null;

function dragNDrop() {
  //функция перемещения карточек
  let listItem = document.querySelectorAll(".list__item");
  let lists = document.querySelectorAll(".list");

  for (let i = 0; i < listItem.length; i++) {
    //по событию драгстарт карточка исчезает из доски
    let item = listItem[i];

    item.addEventListener("dragstart", (e) => {
      // e.target.classList.add("selected");
      draggedItem = item;
      setTimeout(() => {
        draggedItem.classList.add("d-none");
      }, 0);
    });

    item.addEventListener("dragend", (e) => {
      //по событию драгенд карточка снова появляется внутри доски
      // e.target.classList.remove("selected");
      setTimeout(() => {
        draggedItem.classList.remove("d-none");
      }, 0);
      setTimeout(() => {
        draggedItem = null;
      }, 1);
    });

    for (let k = 0; k < lists.length; k++) {
      let list = lists[k];

      list.addEventListener("dragover", (e) => {
        e.preventDefault();

        // const activeElement = list.querySelector(".selected");
        // const currentElement = e.target;

        // const isMoveable =
        //   activeElement !== currentElement &&
        //   currentElement.classList.contains(`list__item`);

        // if (isMoveable) {
        //   return;
        // }

        // const nextElement = (currentElement === activeElement.previusElementSibling) ? currentElement.previusElementSibling : currentElement;
        // list.insertBefore(activeElement, nextElement);

        // const getNextElement = (cursorPosition, currentElement) => {
        //   // Получаем объект с размерами и координатами
        //   const currentElementCoord = currentElement.getBoundingClientRect();
        //   // Находим вертикальную координату центра текущего элемента
        //   const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

        //   // Если курсор выше центра элемента, возвращаем текущий элемент
        //   // В ином случае — следующий DOM-элемент
        //   const nextElement = (cursorPosition < currentElementCenter) ?
        //       currentElement :
        //       currentElement.nextElementSibling;

        //   return nextElement;
        // };
      });

      list.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.classList.add("hovered");
      });

      list.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.classList.remove("hovered");
      });

      list.addEventListener("drop", function (e) {
        e.preventDefault();
        this.classList.remove("hovered");
        this.append(draggedItem);
      });
    }
  }
}
dragNDrop();

let inner = document.querySelectorAll(".inner");
let elem = document.querySelector(".elem");

elem.addEventListener("dragstart", () => {
  setTimeout(() => {
    elem.classList.add("d-none");
  }, 0);
});

elem.addEventListener("dragend", () => {
  setTimeout(() => {
    elem.classList.remove("d-none");
  }, 0);
});

inner.forEach((el) => {
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  el.addEventListener("dragenter", (e) => {
    e.preventDefault();
    el.classList.add("hovered");
  });
  el.addEventListener("dragleave", (e) => {
    e.preventDefault();
    el.classList.remove("hovered");
  });
  el.addEventListener("drop", (e) => {
    e.preventDefault();
    // elem.classList.remove('hovered');
    el.append(elem);
  });
});

function tasks() {
  const tasksListElement = document.querySelector(`.tasks__list`);
  const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

  // Перебираем все элементы списка и присваиваем нужное значение
  for (const task of taskElements) {
    task.draggable = true;
  }

  tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });

  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };

  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);
  
    if (!isMoveable) {
      return;
    }
  
    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);
  
    // Проверяем, нужно ли менять элементы местами
    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }
  
    tasksListElement.insertBefore(activeElement, nextElement);
  });
}

tasks();
