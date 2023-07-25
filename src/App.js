import React, { useEffect, useRef } from "react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import Content from "./components/Content";

import {
  loadDivs,
  bubbleSort,
  insertionSort,
  mergeSort,
} from "./logic/sortLogic";

const myArr = [
  87, 66, 42, 95, 56, 57, 74, 47, 62, 55, 85, 73, 77, 45, 39, 80, 69, 60, 43,
  97, 79, 93, 68, 46, 52, 88, 71, 53, 44, 81,
];

function App() {
  const currArr = useRef(myArr);
  const barsArrayRef = useRef(null);

  useEffect(() => {
    //load up bar divs every time currArr changes.
    loadDivs(barsArrayRef.current?.children);
  }, [currArr]);

  const runBubble = () => {
    bubbleSort(currArr.current);
  };

  const runInsertion = () => {
    insertionSort(currArr.current);
  };

  const runMerge = () => {
    mergeSort(currArr.current);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <MyHeader bubble={runBubble} insertion={runInsertion} merge={runMerge} />

      <Content arr={currArr.current} barsRef={barsArrayRef} />

      <MyFooter />
    </div>
  );
}

export default App;
