const MyHeader = () => {
  return (
    <header className="w-full bg-[#8EB1C7] p-4 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <h1>Sort Visualizer</h1>
        <div className="text-xl h-10 flex gap-4">
          <button>Insertion Sort</button>
          <button>Bubble Sort</button>
          <button>Merge Sort</button>
          <button>Quick Sort</button>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
