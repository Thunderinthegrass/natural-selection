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

function dragNDrop() {//функция перемещения карточек
  let listItem = document.querySelectorAll(".list__item");
  let lists = document.querySelectorAll(".list");

  for (let i = 0; i < listItem.length; i++) {//по событию драгстарт карточка исчезает из доски
    let item = listItem[i];

    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => {
        draggedItem.classList.add("d-none");
      }, 0);
    });

    item.addEventListener("dragend", () => {//по событию драгенд карточка снова появляется внутри доски
      setTimeout(() => {
        draggedItem.classList.remove("d-none");
        draggedItem = null;
      }, 0);


      // lists.forEach(elem => {
      //   elem.classList.remove('hovered');
      // });
    });

    for (let k = 0; k < lists.length; k++) {
      let list = lists[k];

      list.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      list.addEventListener("dragenter", function(e) {
        e.preventDefault();
        this.classList.add('hovered');
        
      });

      list.addEventListener("dragleave", function(e) {
        e.preventDefault();
        this.classList.remove('hovered');
      });

      list.addEventListener("drop", function(e) {
        e.preventDefault();
        this.classList.remove('hovered');
        this.append(draggedItem)
      });
    }
  }
}
dragNDrop();
