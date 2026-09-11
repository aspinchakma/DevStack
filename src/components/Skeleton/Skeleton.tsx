const Skeleton = () => {
  return (
    <div className="border-2 border-gray-200 p-4 rounded-xl flex flex-col">
      <div className="relative">
        <div className="skeleton w-14 h-14 rounded-lg"></div>

        <div className="skeleton h-6 w-20 absolute top-0 right-0 rounded-md"></div>
      </div>

      <div className="skeleton h-7 w-32 my-3 rounded-md"></div>

      <div className="space-y-2 flex-1">
        <div className="skeleton h-4 w-full rounded-md"></div>
        <div className="skeleton h-4 w-[90%] rounded-md"></div>
        <div className="skeleton h-4 w-[70%] rounded-md"></div>
      </div>

      <div className="border border-gray-100 my-4"></div>

      <div className="flex justify-between items-center">
        <div className="skeleton h-7 w-20 rounded-lg"></div>

        <div className="skeleton h-5 w-24 rounded-md"></div>

        <div className="flex items-center gap-2">
          <div className="skeleton h-5 w-5 rounded-full"></div>
          <div className="skeleton h-5 w-8 rounded-md"></div>
        </div>
      </div>

      <div className="mt-5">
        <div className="skeleton h-10 w-full rounded-xl"></div>
      </div>
    </div>
  );
};

export default Skeleton;
