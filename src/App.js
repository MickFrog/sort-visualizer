import React, { useEffect, useRef, useState } from "react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import Content from "./components/Content";

import {
  loadDivs,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "./logic/sortLogic";

const myArr = [
  87, 66, 42, 95, 56, 57, 74, 47, 62, 55, 85, 73, 77, 45, 39, 80, 69, 60, 43,
  97, 79, 93, 68, 46, 52, 88, 71, 53, 44, 81,
];

function App() {
  const [currArr, setCurrArr] = useState(myArr);
  const barsArrayRef = useRef(null);

  useEffect(() => {
    //load up bar divs every time currArr changes.
    loadDivs(barsArrayRef.current?.children);
  }, [currArr]);

  const randomizeArray = () => {
    //generate an array of numbers less than 100
    let tmpArr = [];
    for (let i = 0; i < 30; i++) {
      tmpArr.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
    }

    setCurrArr(tmpArr);
  };

  const runBubble = () => {
    bubbleSort(currArr);
  };

  const runInsertion = () => {
    insertionSort(currArr);
  };

  const runMerge = () => {
    mergeSort(currArr);
  };

  const runQuick = () => {
    quickSort(currArr);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <MyHeader
        bubble={runBubble}
        insertion={runInsertion}
        merge={runMerge}
        quick={runQuick}
        randomize={randomizeArray}
      />

      <Content arr={currArr} barsRef={barsArrayRef} />

      <MyFooter />
    </div>
  );
}

export default App;
