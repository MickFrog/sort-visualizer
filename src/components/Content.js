const Content = (props) => {
  const { arr } = props;

  return (
    <main className="w-full p-4 bg-[#463F3A] flex justify-center flex-auto flex-shrink-0">
      <div className="max-w-7xl w-full grid grid-cols-[repeat(auto-fit,_1rem)] justify-center items-center">
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
