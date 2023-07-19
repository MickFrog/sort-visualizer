//Merge sort
function mergeSort(arr) {
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
    if (sortedLeft[0] === sortedRight[0]) {
      //remove duplicates
      sortedLeft.shift();
      finalArr.push(sortedRight.shift());
    } else if (sortedLeft[0] < sortedRight[0]) {
      finalArr.push(sortedLeft.shift());
    } else {
      finalArr.push(sortedRight.shift());
    }
  }
  return [...finalArr, ...sortedLeft, ...sortedRight];
}
