import Skeleton from "../Skeleton/Skeleton";

const Loader = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14];

  return (
    <div>
      {" "}
      <h3 className="w-2/4 h-12 skeleton"></h3>
      <p className="w-1/4 h-5 skeleton mt-2 mb-8"></p>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-5">
        <div className="lg:col-span-9 md:col-span-9">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-5">
            {number.map((ele, idx) => (
              <Skeleton key={`${ele}${idx}`} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-3">
          <div className="border-2 border-gray-200 p-4 rounded-xl">
            <h2 className="h-7 font-bold skeleton"></h2>
            <p className="skeleton h-3 mb-4 mt-2"></p>
            <div className="skeleton h-16 py-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
