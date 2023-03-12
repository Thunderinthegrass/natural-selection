const lists = document.querySelectorAll('.list');

function addTask() {
  const btn = document.querySelector('.add-btn');
  const addBtn = document.querySelector('.add__item-btn');
  const cancelBtn = document.querySelector('.cancel__item-btn');
  const textarea = document.querySelector('.textarea');
  const form = document.querySelector('.form');
  
  let value;

  btn.addEventListener('click', () => {
    form.classList.remove('d-none');
    btn.classList.add('d-none');
    addBtn.classList.add('d-none');
    cancelBtn.classList.remove('d-none');
  })

  textarea.addEventListener('input', e => {
    value = e.target.value;
    if (value) {
      addBtn.classList.remove('d-none');
    }
    else {
      addBtn.classList.add('d-none');
    }
  })
  
  cancelBtn.addEventListener('click', () => {
    textarea.value = '';
    value = '';
    btn.classList.remove('d-none');
    form.classList.add('d-none');
    cancelBtn.classList.add('d-none');
  })

  addBtn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.classList.add('list__item');
    item.setAttribute('draggable', 'true');
    item.textContent = value;
    lists[0].append(item);
    textarea.value = '';
    value = '';
    // textarea.classList.add('d-none');
    // cancelBtn.classList.add('d-none');
    addBtn.classList.add('d-none');
    // btn.classList.remove('d-none');
  })
}
addTask();