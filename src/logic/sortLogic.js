//Merge sort
export const mergeSort = (inArr) => {
  //create copy on input array
  let arr = [...inArr];

  if (arr.length < 2) {
    return arr;
  }

  //sort left half of array
  const mid = Math.floor(arr.length / 2);
  const tempLeft = arr.slice(0, mid);
  const sortedLeft = mergeSort(tempLeft);

  //sort right half of array
  const tempRight = arr.slice(mid);
  const sortedRight = mergeSort(tempRight);

  //merge the two halves
  const finalArr = [];
  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      finalArr.push(sortedLeft.shift());
    } else {
      finalArr.push(sortedRight.shift());
    }
  }
  return [...finalArr, ...sortedLeft, ...sortedRight];
};

//Insertion sort
export const insertionSort = (inArr) => {
  //create copy on input array
  let arr = [...inArr];

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    //if curr elem is less than one of prev elems, then swap them
    while (j > 0 && arr[j] < arr[j - 1]) {
      //swapping with JS destructuring
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

      j--;
    }
  }

  return arr;
};
