let btns = document.querySelectorAll(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let modals = document.querySelectorAll(".modal");
let closeBtn = document.querySelector(".close-modal-btn");

btns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((elem) => {
      elem.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == modalOverlay || e.target == closeBtn) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((elem) => {
      elem.classList.remove("modal--visible");
    });
  }
});
