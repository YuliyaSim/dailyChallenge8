// sort this array using a for loop.
const arr = [5,0,9,1,7,4,2,6,3,8];
// after sotrting the result will be  [9,8,7,6,5,4,3,2,1,0] 

// console.log(arr.toString());
// // result 5,0,9,1,7,4,2,6,3,8

// // hint - use a temporary VARIABLE
// let temp;
// // hint # 2 - use 2 loops
// for (let i = 0; i < arr.length; i ++) {
    
// }

const sorted = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
        }
    }
  } while (swapped);
  console.log(arr.toString());
};

// console.log(arr.toString());
//result- 9,8,7,6,5,4,3,2,1,0

sorted(arr)
