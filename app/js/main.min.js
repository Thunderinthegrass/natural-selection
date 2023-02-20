function arrSearch(arr) {
  let result = [];

  function innerFunc(arr) {
    if (arr.length === 0) {
      return;
    } else if (arr[0] % 2 != 0) {
      result.push(arr[0]);
    }
    innerFunc(arr.slice(1));
  }
  innerFunc(arr);

  return result;
}

console.log(arrSearch([1, 2, 3, 4, 5, 6, 7, 8]));
