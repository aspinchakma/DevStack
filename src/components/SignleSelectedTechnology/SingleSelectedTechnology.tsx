import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../type/type";

interface SingleSelectedTechnology {
  technology: Technology;
}

const SingleSelectedTechnology = ({ technology }: SingleSelectedTechnology) => {
  console.log(technology);
  return (
    <div className="flex items-center justify-between border-2 p-4 rounded-xl border-gray-100">
      <div className="flex items-center gap-3">
        <img className="h-9 w-9" src={technology.icon} alt="" />
        <div>
          <h3 className="text-lg font-bold">{technology.name}</h3>
          <p className="font-bold text-[12px] text-gray-400">
            {technology.category}
          </p>
        </div>
      </div>
      <RxCross2
        size={28}
        className="text-gray-400 hover:text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default SingleSelectedTechnology;
