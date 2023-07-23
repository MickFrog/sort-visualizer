import React, { useState } from "react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import Content from "./components/Content";

const myArr = [
  87, 66, 42, 95, 56, 57, 74, 47, 62, 55, 85, 73, 77, 45, 39, 80, 69, 60, 43,
  97, 79, 93, 68, 46, 52, 88, 71, 53, 44, 81,
];

function App() {
  const [currArr, setCurrArr] = useState(myArr);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <MyHeader />

      <Content arr={currArr} />

      <MyFooter />
    </div>
  );
}

export default App;
