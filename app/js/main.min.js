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
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

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
console.log(bubbleSort1([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));

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
console.log(cocktailSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));
console.log(cocktailSort1([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12]));