import { use, useState } from "react";
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

  const [technologies, setTechnologies] =
    useState<Technology[]>(technologiesData);
  return (
    <section className="border-2 mb-20">
      <div className=" technologies_container">
        <h2 className="text-4xl text-center lg:text-left font-extrabold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-center lg:text-left mt-2 mb-8 text-[18px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-5">
        <div className="lg:col-span-9 md:col-span-9">
          <Technologies technologies={technologies} />
        </div>
        <div className="lg:col-span-3 md:col-span-3">
          <SelectedContainer />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesContainer;
