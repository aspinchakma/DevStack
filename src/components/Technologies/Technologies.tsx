import SignleTechnology from "../Technology/SignleTechnology";
import type { Technology } from "../type/type";

interface TechnologiesProps {
  technologies: Technology[];
  handleAddSelectedTechnology: (technology: Technology) => void;
}

const Technologies = ({
  technologies,
  handleAddSelectedTechnology,
}: TechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
      {technologies.map((tech) => (
        <SignleTechnology
          key={tech.id}
          technology={tech}
          handleAddSelectedTechnology={handleAddSelectedTechnology}
        />
      ))}
    </div>
  );
};

export default Technologies;
