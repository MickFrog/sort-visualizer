const MyHeader = (props) => {
  const { bubble, insertion } = props;

  const handleBubble = () => {
    bubble();
  };

  const handleInsertion = () => {
    insertion();
  };

  return (
    <header className="w-full bg-[#8EB1C7] p-4 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <h1>Sort Visualizer</h1>
        <div className="text-xl h-10 flex gap-4">
          <button onClick={handleInsertion}>Insertion Sort</button>
          <button onClick={handleBubble}>Bubble Sort</button>
          <button>Merge Sort</button>
          <button>Quick Sort</button>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
