import { use, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { brandGradient } from "../../CommonColor/colorGradient";
import SelectedContainer from "../SelectedContainer/SelectedContainer";
import Technologies from "../Technologies/Technologies";
import type { Technology } from "../type/type";
import "./Technologies.css";

interface TechnologiesContainerProps {
  technologyResponse: Promise<Technology[]>;
}

const TechnologiesContainer = ({
  technologyResponse,
}: TechnologiesContainerProps) => {
  const technologiesData = use(technologyResponse);
  // set all technologies to state
  const [technologies, setTechnologies] =
    useState<Technology[]>(technologiesData);
  // store selected
  const [selected, setSelected] = useState<Technology[]>([]);

  // handle add technology
  const handleAddSelectedTechnology = (technology: Technology): void => {
    // check is it containe in selected or not
    const result = selected.filter((tech) => tech.id === technology.id);
    if (result.length === 0) {
      // add to selected
      setSelected([...selected, technology]);

      // update isSelected property
      const updatedTechnologies = technologies.map((tech) => {
        if (tech.id === technology.id) {
          return {
            ...tech,
            isSelected: true,
          };
        }
        return tech;
      });
      setTechnologies(updatedTechnologies);
      // show successfull message
      toast.success(`Successfully Added ${technology.name} Technology.`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      // showing already exist
      toast.error(`${technology.name} already added!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // handle delete technology each
  const handleDeleteTechnology = (technology: Technology): void => {
    // delete from selected technology
    const result = selected.filter((tech) => tech.id !== technology.id);
    setSelected(result);
    // update property then update technologies
    const finalTechnologies = technologies.map((tech) => {
      if (tech.id === technology.id) {
        return {
          ...tech,
          isSelected: false,
        };
      }
      return tech;
    });
    setTechnologies(finalTechnologies);

    // show message
    toast.success(`Successfully Deleted ${technology.name}`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleRemoveAll = () => {
    // remove all selected items
    setSelected([]);
    // set isSelected items
    setTechnologies(technologiesData);
    // remove all successfully message show
    toast.success(`Successfully Deleted All`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <section className="mb-20">
      <div className=" technologies_container">
        <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-extrabold ">
          Explore the{" "}
          <span className={`bg-clip-text text-transparent ${brandGradient}`}>
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-center lg:text-left mt-2 mb-8 text-[14px] lg:text-[18px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
        <div className="lg:col-span-9">
          <Technologies
            technologies={technologies}
            handleAddSelectedTechnology={handleAddSelectedTechnology}
          />
        </div>
        <div className="lg:col-span-3">
          <SelectedContainer
            selected={selected}
            handleDeleteTechnology={handleDeleteTechnology}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesContainer;
