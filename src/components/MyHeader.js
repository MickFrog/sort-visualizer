const MyHeader = (props) => {
  const { bubble, insertion, merge, quick, randomize } = props;

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

  return (
    <header className="w-full bg-[#8EB1C7] p-4 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1>Sort Visualizer</h1>
          <div className="flex gap-4 border-2 p-2 rounded">
            <button name="slow">Slow</button>
            <button name="medium">Medium</button>
            <button name="fast">Fast</button>
          </div>
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
