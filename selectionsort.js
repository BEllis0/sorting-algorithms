const selectionSort = array => {
    let len = array.length; // reference to array length
    let lowestNum; // store lowest num in 2nd iteration
    let temp; // create temp var to save value
  
    // iterate through array
    for (let i = 0; i < len; i++) {
      lowestNum = i;
      // iterate array starting at next index
      for (let z = i+1; z < len; z++) {
        // store lowest num found
        if (array[z] < array[i]) {
          // set lowest num
          lowestNum = z;
        }
      }
          // swap current index with lowest num
          temp = array[i];
          array[i] = array[lowestNum];
          array[lowestNum] = temp;
    }  
    //return
    return array;
};

const arrToSort = [52, 11, 8, 99, 302, 55, 55, 67, 1, 56, 103, 476, 111, 71, 32, 86, 91, 254, 500, 308, 337, 396];

let testSelectionSort = selectionSort(arrToSort);

console.log(testSelectionSort);