import React from "react";

const myArr = [
  87, 66, 42, 95, 56, 57, 74, 47, 62, 55, 85, 73, 77, 45, 39, 80, 69, 60, 43,
  97, 79, 93, 68, 46, 52, 88, 71, 53, 44, 81,
];

function App() {
  return (
    <div className="max-w-7xl flex-col">
      <div className="text-xl h-10">Kalooli</div>

      <div className="grid grid-cols-[repeat(auto-fit,_1rem)] items-center justify-center">
        {myArr.map((val, index) => {
          return (
            <div
              key={index}
              className="array-div"
              style={{ height: `${val * 5}px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
