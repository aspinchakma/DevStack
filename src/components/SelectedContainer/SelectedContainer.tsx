import type { Technology } from "../type/type";
import SingleSelectedTechnology from "./../SignleSelectedTechnology/SingleSelectedTechnology";

interface SelectedContainerProps {
  selected: Technology[];
}

const SelectedContainer = ({ selected }: SelectedContainerProps) => {
  return (
    <div className="border-2 border-gray-200 p-4 rounded-xl">
      <h2 className="text-2xl font-bold">Your Stack</h2>
      <p className="text-[#94A3B8] mb-4 mt-2">
        {selected.length
          ? `${selected.length} Technology Selected`
          : "No technologies selected yet."}
      </p>
      <div>
        {selected.length ? (
          <div className="grid grid-cols-1 gap-3">
            {selected.map((tech) => (
              <SingleSelectedTechnology key={tech.id} technology={tech} />
            ))}
            <button className="text-red-700 py-2 mt-7 rounded-xl font-bold text-center w-full border-2 border-red-300 cursor-pointer hover:bg-red-700 hover:text-white duration-500 transition hover:border-red-700">
              Remove All
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-200 rounded-xl text-center py-6 text-[#94A3B8]">
            <h3>Your stack is empty.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedContainer;
