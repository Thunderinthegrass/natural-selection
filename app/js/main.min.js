//нахождение нечетных элементов рекурсивным методом
function arrSearch(arr) {
  let result = [];

  function innerFunc(arr) {
    if (arr.length === 0) {
      return;
    } 
    else if (arr[0] % 2 != 0) {
      result.push(arr[0]);
    }
    innerFunc(arr.slice(1));
  }
  innerFunc(arr);

  return result;
}

console.log(arrSearch([1, 2, 3, 4, 5, 6, 7, 8]));

function f1(arr) {
  let result = [];

  function f2(arr) {
    if (arr.length === 0) {
      return;
    }
    else if (arr[0] % 2 != 0) {
      result.push(arr[0]);
    }
    f2(arr.slice(1));
  }
  f2(arr);
  return result;
}
console.log(f1([1, 2, 3, 4, 5, 6, 7, 8]));

function ff2(arr) {
  let result = [];

  function ff3(arr) {
    if (arr.length === 0) {
      return;
    }
    else if (arr[0] % 2 != 0) {
      result.push(arr[0]);
    }
    ff3(arr.slice(1));
  }
  ff3(arr);
  return result;
};

console.log(ff2([1,2,3,4,5,6,7,8,9,10]));

function rec(arr) {
  let result = [];

  function rec1(arr) {
    if (arr.length === 0) {
      return;
    }
    else if (arr[1] % 2 != 0) {
      result.push(arr[0]);
    }
    rec1(arr.slice(1));
  }
  rec1(arr);

  return result;
}
console.log(rec([1,2,3,4,5,6,7,8]));