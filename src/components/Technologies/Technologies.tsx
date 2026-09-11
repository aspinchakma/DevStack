import SignleTechnology from "../Technology/SignleTechnology";
import type { Technology } from "../type/type";

const Technologies = ({ technologies }: { technologies: Technology[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
      {technologies.map((tech) => (
        <SignleTechnology key={tech.id} technology={tech} />
      ))}
    </div>
  );
};

export default Technologies;
