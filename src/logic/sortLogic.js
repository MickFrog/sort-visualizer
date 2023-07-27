let divsArray = [];
let speedFactor = 10;

const sleepFn = () => {
  return new Promise((resolve) => setTimeout(resolve, speedFactor));
};

export const changeSpeed = (newSpeed) => {
  speedFactor = newSpeed;
};

export const loadDivs = (divs) => {
  //store bars divs
  divsArray = divs;
};

export async function mergeSort(
  inArr,
  divStart = 0,
  divEnd = divsArray.length - 1
) {
  //create copy on input array
  let arr = [...inArr];

  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  let divMid = Math.floor(divEnd / 2);
  //sort left half of array
  const tempLeft = arr.slice(0, mid);
  const sortedLeft = await mergeSort(tempLeft, divStart, divMid);

  //sort right half of array
  const tempRight = arr.slice(mid);
  const sortedRight = await mergeSort(tempRight, divMid++, divEnd);

  //merge the two halves
  const finalArr = [];
  var newElem;
  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      newElem = sortedLeft.shift();
      finalArr.push(newElem);

      divStart++;
    } else {
      newElem = sortedRight.shift();
      finalArr.push(newElem);

      //Show sort on right
      divsArray[divMid].classList.add("div-green");

      divStart++;
      divMid++;
    }

    //Show sort on left (corresponding to finalArr) div
    divsArray[divStart - 1].style.height = newElem * 5 + "px";
    divsArray[divStart - 1].classList.add("div-green");

    await sleepFn();
    //restore div colors
    divsArray[divStart - 1].classList.remove("div-green");
    divsArray[divMid - 1].classList.remove("div-green");
  }

  //loop through remaining divs to show arr merging
  var remainingElems = [...sortedLeft, ...sortedRight];
  for (let i = 0; i < remainingElems.length; i++) {
    //Show sort on divs
    divsArray[divStart].style.height = remainingElems[i] * 5 + "px";
    divsArray[divStart].classList.add("div-green");

    await sleepFn();
    //restore div colors
    divsArray[divStart].classList.remove("div-green");

    divStart++;
  }

  return [...finalArr, ...sortedLeft, ...sortedRight];
}

export async function insertionSort(inArr) {
  //create copy on input array
  let arr = [...inArr];

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    //if curr elem is less than one of prev elems, then swap them
    while (j > 0 && arr[j] < arr[j - 1]) {
      //swapping with JS destructuring
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      //Show sort on divs
      divsArray[j].style.height = arr[j] * 5 + "px";
      divsArray[j].classList.add("div-green");

      divsArray[j - 1].style.height = arr[j - 1] * 5 + "px";
      divsArray[j - 1].classList.add("div-green");

      await sleepFn();

      j--;

      //Turn back colors
      divsArray[j].classList.remove("div-green");
      divsArray[j + 1].classList.remove("div-green");
    }
  }

  return arr;
}

export async function bubbleSort(inArr) {
  //create copy on input array
  let arr = [...inArr];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = 0;

    //compare two consecutive elems and bubble largest to the end
    for (j; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //Show sort on divs
        divsArray[j].style.height = arr[j] * 5 + "px";
        divsArray[j].classList.add("div-green");

        divsArray[j + 1].style.height = arr[j + 1] * 5 + "px";
        divsArray[j + 1].classList.add("div-green");
      }
      await sleepFn();

      divsArray[j].classList.remove("div-green");
      divsArray[j + 1].classList.remove("div-green");
    }
  }

  return arr;
}

export async function quickSort(
  inArr,
  divStart = 0,
  divEnd = divsArray.length - 1
) {
  if (inArr.length < 2) return inArr;

  const arr = [...inArr];
  //get pivot position, remove elem at position
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  var pvtLeftDiv = divStart;

  //add elems less to left, greater to right
  for (const num of arr) {
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  const tmpArr = [...left, pivot, ...right];

  //loop through left pivot divs
  for (const i of tmpArr) {
    //add green to left + move pivot to its right
    divsArray[pvtLeftDiv].style.height = i * 5 + "px";
    divsArray[pvtLeftDiv].classList.add("div-green");

    await sleepFn();
    //restore div color
    divsArray[pvtLeftDiv].classList.remove("div-green");

    pvtLeftDiv++;
  }

  //return organised arr with pivot in the middle
  return [
    ...(await quickSort(left, divStart, divStart + left.length)),
    pivot,
    ...(await quickSort(right, divStart + left.length + 1, divEnd)),
  ];
}
