const dragAndDrop = () => {
  const content = document.querySelector(".content");
  const card = document.querySelectorAll(".card");
  const bottomBlock = document.querySelector(".bottom-block");

  const dragStart = function (e) {
    setTimeout(() => {
      this.classList.add("d-none");
      console.log(e.target);
      
    }, 0);
  };

  const dragEnd = function () {
    this.classList.remove("d-none");
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add("hovered");
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
  };
  const dragDrop = function (e) {
    this.append(content);
    this.classList.remove("hovered");
    console.log(e.target);
    
  };

  card.forEach((elem) => {
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", dragDrop);
  });

  bottomBlock.addEventListener("dragover", dragOver);
  bottomBlock.addEventListener("dragenter", dragEnter);
  bottomBlock.addEventListener("dragleave", dragLeave);
  bottomBlock.addEventListener("drop", dragDrop);

  content.addEventListener("dragstart", dragStart);
  content.addEventListener("dragend", dragEnd);
};
dragAndDrop();
