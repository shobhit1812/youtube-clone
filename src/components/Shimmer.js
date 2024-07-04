const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6 my-6">
      {Array(20)
        ?.fill(0)
        ?.map((_, index) => {
          return (
            <div
              key={index}
              className="relative w-80 h-52 p-5 shadow-lg rounded-xl bg-gray-200 overflow-hidden"
            >
              <div className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
