//bubble sort
//3917
function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - i-1; k++) {
      // count++;
      // console.log(`count ${count}`);
      console.log(i);
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }
  // console.log(count);
  return arr;
};
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]));