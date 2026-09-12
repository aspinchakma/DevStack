import bannerImg from "../../assets/banner-stack.png";
import { brandGradient } from "../../CommonColor/colorGradient";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8 mt-10 lg:mt-0 md:mt-0">
      <div className="banner_title_container md:mt-8">
        <h1 className=" md:text-5xl text-3xl text-center lg:text-left md:text-left lg:text-6xl font-extrabold">
          Build Your Ideal
        </h1>
        <h1
          className={`text-3xl md:text-5xl text-center lg:text-left md:text-left lg:text-6xl font-extrabold bg-clip-text text-transparent mt-2 ${brandGradient}`}
        >
          Development Stack
        </h1>
        <p className="mt-5 mb-7 leading-8 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex items-center gap-2 justify-center md:justify-start lg:justify-start text-[12px] lg:text-[15px] md:text-[15px]">
          <button className="text-white font-semibold px-4 py-3 rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] cursor-pointer">
            Explore Technologies
          </button>

          <button className="px-12 py-[10px] border-2 border-[#e5e7eb] rounded-md cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img className="mx-auto" src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
