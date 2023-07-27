import { useEffect, useRef, useState } from "react";

const MyHeader = (props) => {
  const { bubble, insertion, merge, quick, randomize, changeSpeed } = props;
  const speedContainerRef = useRef(null);
  const [slideValue, setSlideValue] = useState(31);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    randomize(slideValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideValue]);

  async function handleSorting(sortName) {
    //disable array editing features
    setIsSorting(true);

    switch (sortName) {
      case "bubble":
        await bubble();
        break;

      case "insertion":
        await insertion();
        break;

      case "merge":
        await merge();
        break;

      case "quick":
        await quick();
        break;

      default:
        break;
    }

    //re-enable editing features
    setIsSorting(false);
  }

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
    <header className="w-full h-max bg-[#8EB1C7] p-4 flex flex-col items-center">
      <h1>SORT VISUALIZER</h1>

      <div className="max-w-7xl w-full flex flex-wrap gap-2 lg:justify-between justify-center items-center">
        <div className="p-2 flex flex-wrap gap-4 items-center justify-center">
          <fieldset
            ref={speedContainerRef}
            className="flex gap-4 border-2 p-2 rounded"
          >
            <legend>Choose speed</legend>

            <button
              onClick={handleSpeedChange}
              name="slow"
              disabled={isSorting}
            >
              Slow
            </button>

            <button
              onClick={handleSpeedChange}
              name="medium"
              disabled={isSorting}
            >
              Medium
            </button>

            <button
              className="active-speed"
              onClick={handleSpeedChange}
              name="fast"
              disabled={isSorting}
            >
              Fast
            </button>
          </fieldset>

          <fieldset className="border-2 p-2 rounded">
            <legend>Array elements</legend>

            <input
              disabled={isSorting}
              type="range"
              min="10"
              max="80"
              value={slideValue}
              onChange={(e) => setSlideValue(e.target.value)}
            />
          </fieldset>

          <button onClick={handleRandomize} disabled={isSorting}>
            Generate Array
          </button>
        </div>
        <fieldset className="p-2 text-xl flex flex-wrap justify-center gap-4 border-2">
          <legend>Algorithms</legend>
          <button
            disabled={isSorting}
            onClick={() => handleSorting("insertion")}
          >
            Insertion Sort
          </button>
          <button disabled={isSorting} onClick={() => handleSorting("bubble")}>
            Bubble Sort
          </button>
          <button disabled={isSorting} onClick={() => handleSorting("merge")}>
            Merge Sort
          </button>
          <button disabled={isSorting} onClick={() => handleSorting("quick")}>
            Quick Sort
          </button>
        </fieldset>
      </div>
    </header>
  );
};

export default MyHeader;
