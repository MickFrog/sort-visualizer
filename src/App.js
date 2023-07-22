import React from "react";

const myArr = [
  87, 66, 42, 95, 56, 57, 74, 47, 62, 55, 85, 73, 77, 45, 39, 80, 69, 60, 43,
  97, 79, 93, 68, 46, 52, 88, 71, 53, 44, 81,
];

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <header className="w-full bg-[#8EB1C7] p-4 flex justify-center">
        <div className="max-w-7xl w-full flex justify-between items-center">
          <h1 className="text-xl h-10">Sort visualizer</h1>
          <div className="text-xl h-10 flex gap-4">
            <button>Insertion Sort</button>
            <button>Bubble Sort</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
          </div>
        </div>
      </header>

      <main className="w-full p-4 bg-[#463F3A] flex justify-center flex-auto flex-shrink-0">
        <div className="max-w-7xl w-full grid grid-cols-[repeat(auto-fit,_1rem)] justify-center items-center">
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
      </main>

      <footer className="w-full mt-auto bg-[#8EB1C7] p-4 flex justify-center">
        <p>
          Copyright &copy;{" "}
          <a
            className="underline decoration-orange-600 decoration-4"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            MickFrog
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
