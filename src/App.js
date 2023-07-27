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
  changeSpeed,
} from "./logic/sortLogic";

function App() {
  const [currArr, setCurrArr] = useState([]);
  const barsArrayRef = useRef(null);

  useEffect(() => {
    //load up bar divs every time currArr changes.
    loadDivs(barsArrayRef.current?.children);
  }, [currArr]);

  const randomizeArray = (newLength = currArr.length) => {
    //generate an array of numbers less than 100
    let tmpArr = [];
    for (let i = 0; i < newLength; i++) {
      tmpArr.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
    }

    setCurrArr([...tmpArr]);
  };

  const handleChangeSpeed = (newSpeed) => {
    switch (newSpeed) {
      case "fast":
        changeSpeed(10);
        break;

      case "medium":
        changeSpeed(50);
        break;

      case "slow":
        changeSpeed(100);
        break;

      default:
        break;
    }
  };

  async function runBubble() {
    const newArr = await bubbleSort(currArr);
    setCurrArr(newArr);
  }

  async function runInsertion() {
    const newArr = await insertionSort(currArr);
    setCurrArr(newArr);
  }

  async function runMerge() {
    const newArr = await mergeSort(currArr);
    setCurrArr(newArr);
  }

  async function runQuick() {
    const newArr = await quickSort(currArr);
    setCurrArr(newArr);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <MyHeader
        bubble={runBubble}
        insertion={runInsertion}
        merge={runMerge}
        quick={runQuick}
        randomize={randomizeArray}
        changeSpeed={handleChangeSpeed}
      />

      <Content arr={currArr} barsRef={barsArrayRef} />

      <MyFooter />
    </div>
  );
}

export default App;
