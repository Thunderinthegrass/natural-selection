//bubble sort
//3917
function bubbleSort(arr) {
  // let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      // count++;
      // console.log(`count ${count}`);
      // console.log(i);
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }
  // console.log(count);
  return arr;
}
// console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

function bubbleSort1(arr) {
  let count = 0;
  let a;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        a = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = a;
      }
      count++;
    }
  }
  console.log(count);
  return arr;
}
// console.log(bubbleSort1([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));

// Cocktail sort

function cocktailSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      count++;
    }
    right--;
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
      count++;
    }
    left++;
  }
  console.log(count);
  return arr;
}

const cocktailSort1 = (arr) => {
  let left = (firstSwap = 0);
  let right = (lastSwap = arr.length - 1);
  let count = 0;
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        lastSwap = i;
      }
      count++;
    }
    right = lastSwap;
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        firstSwap = i;
      }
      count++;
    }
    left = firstSwap;
  }
  console.log(count);
  return arr;
};
// console.log(cocktailSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));
// console.log(cocktailSort1([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));

function insertionSort(arr) {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i]; //6
    let j = i; //2
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}
console.log(insertionSort([7, 8, 6, 10, 5, 4, 3, 2, 9, 1]));

function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let k = i;

    while (current < arr[k - 1] && k > 0) {
      arr[k] = arr[k - 1];
      k--;
    }
    arr[k] = current;
  }
  return arr;
}
console.log(insertionSort1([7, 8, 6, 10, 5, 4, 3, 2, 9, 1]));

function insertionSortt(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    k = i;

    while (current < arr[k - 1] && k > 0) {
      arr[k] = arr[k - 1];
      k--;
    }
    arr[k] = current;
  }
  return arr;
}
console.log(insertionSortt([7, 8, 6, 10, 5, 4, 3, 2, 9, 1]));

function shakeSort(arr) {
  let left = (lSwap = 0);
  let right = (rSwap = arr.length - 1);

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        rSwap = i;
      }
    }
    right = rSwap;
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        lSwap = i;
      }
    }
    left = lSwap;
  }
  return arr;
}
console.log(shakeSort([7, 8, 6, 10, 5, 4, 3, 2, 9, 1]));