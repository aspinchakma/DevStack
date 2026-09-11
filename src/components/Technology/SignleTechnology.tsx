import { FaStar } from "react-icons/fa";
import type { Technology } from "../type/type";

const SignleTechnology = ({ technology }: { technology: Technology }) => {
  console.log(technology);
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const color = randomColor();

  let hello = true;
  return (
    <div className="border-2 p-4 border-gray-200 rounded-xl flex flex-col">
      <div className="relative">
        <img className="w-14 h-14" src={technology.icon} alt="" />
        <h2
          className={` text-black font-semibold text-[12px]  absolute top-0 right-0 border-1 } px-3 py-1 rounded-md`}
          style={{
            color: color,
            backgroundColor: `${color}20 `,
            borderColor: `${color}40`,
          }}
        >
          {technology.badge}
        </h2>
      </div>
      <h3 className="text-2xl font-bold my-3">{technology.name}</h3>
      <p className="flex-1">{technology.description}</p>
      <div className="border border-gray-100 my-4"></div>
      <div className="text-[#64748B] font-medium flex justify-between text-[15px]">
        <p className="bg-slate-100 inline-block px-3 py-1 rounded-lg">
          {technology.category}
        </p>
        <p>{technology.difficulty}</p>
        <p className="flex items-center gap-2">
          <FaStar className="text-[#FBBF24]" size={20} />{" "}
          <span className="font-bold text-black">{technology.rating}</span>
        </p>
      </div>
      <div className="mt-5">
        <button
          className={`w-full py-2 rounded-xl ${hello ? "bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed " : "bg-black text-white hover:bg-white hover:text-black border cursor-pointer"} transition duration-500  font-medium`}
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default SignleTechnology;
