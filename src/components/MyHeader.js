import { useRef } from "react";

const MyHeader = (props) => {
  const { bubble, insertion, merge, quick, randomize, changeSpeed } = props;
  const speedContainerRef = useRef(null);

  const handleBubble = () => {
    bubble();
  };

  const handleInsertion = () => {
    insertion();
  };

  const handleMerge = () => {
    merge();
  };

  const handleQuick = () => {
    quick();
  };

  const handleRandomize = () => {
    randomize();
  };

  const handleSpeedChange = (e) => {
    const nameSpeed = e.target.name;
    //changeSpeed
    changeSpeed(nameSpeed);

    //change active btn
    const speedBtns = speedContainerRef.current?.children;
    for (const btn of speedBtns) {
      btn.classList.remove("active-speed");
    }

    e.target.classList.add("active-speed");
  };

  return (
    <header className="w-full bg-[#8EB1C7] p-4 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1>Sort Visualizer</h1>
          <fieldset
            ref={speedContainerRef}
            className="flex gap-4 border-2 p-2 rounded"
          >
            <legend>Choose speed</legend>
            <button onClick={handleSpeedChange} name="slow">
              Slow
            </button>
            <button onClick={handleSpeedChange} name="medium">
              Medium
            </button>
            <button
              className="active-speed"
              onClick={handleSpeedChange}
              name="fast"
            >
              Fast
            </button>
          </fieldset>
          <fieldset className="border-2 p-2 rounded">
            <legend>Array elements</legend>
            <input type="range" min="10" max="200" />
          </fieldset>
          <button onClick={handleRandomize}>Generate Array</button>
        </div>
        <div className="text-xl h-10 flex gap-4">
          <button onClick={handleInsertion}>Insertion Sort</button>
          <button onClick={handleBubble}>Bubble Sort</button>
          <button onClick={handleMerge}>Merge Sort</button>
          <button onClick={handleQuick}>Quick Sort</button>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
