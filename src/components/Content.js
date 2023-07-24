const Content = (props) => {
  const { arr, barsRef } = props;

  return (
    <main className="w-full p-4 bg-[#463F3A] flex justify-center flex-auto flex-shrink-0">
      <div
        ref={barsRef}
        className="max-w-7xl w-full grid grid-cols-[repeat(auto-fit,_1rem)] gap-2 justify-center transition-all duration-300"
      >
        {arr.map((val, index) => {
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
  );
};

export default Content;