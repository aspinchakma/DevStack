import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import type { Technology } from "../type/type";
import "./SingleTechnologies.css";

interface SingleTechnology {
  technology: Technology;
  handleAddSelectedTechnology: (technology: Technology) => void;
}
const SignleTechnology = ({
  technology,
  handleAddSelectedTechnology,
}: SingleTechnology) => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const color = randomColor();

  return (
    <div
      className={`border-2 p-4  rounded-xl flex flex-col ${technology.isSelected ? "border-red-500 " : "border-gray-200"}`}
    >
      <div className="relative">
        <img className="w-14 h-14" src={technology.icon} alt="" />
        <h2
          className={` text-black font-semibold text-[12px]  absolute top-0 right-0 border} px-3 py-1 rounded-md`}
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
          onClick={() => handleAddSelectedTechnology(technology)}
          className={`addButton border w-full py-2 rounded-xl transition duration-500  font-medium ${technology.isSelected ? "bg-red-100 text-red-600 cursor-not-allowed border-red-400 " : "bg-black text-white hover:bg-white hover:text-black border cursor-pointer"} `}
        >
          {technology.isSelected ? (
            <span className="flex items-center justify-center gap-2">
              <TiTick size={20} />
              Added to Stack
            </span>
          ) : (
            " Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default SignleTechnology;
