import { FaBars } from "react-icons/fa";
import navLogo from "../../assets/logo-text.png";

const Nav = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <FaBars className="lg:hidden md:hidden" size={30} />
      <img src={navLogo} alt="" />
      <div className="hidden lg:block md:block">
        <ul className="flex md:text-[14px] items-center text-[#475569] font-medium md:gap-4 lg:gap-7 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 lg:gap-5 md:gap-5 text-[12px] md:text-[15px] lg:text-[15px]">
        <button className="font-medium block cursor-pointer">Sign In</button>
        <button className="bg-[#D91B7E] px-3 py-1 lg:px-4 md:px-4 block lg:py md:py-2 md:rounded-full lg:rounded-full rounded-xl text-white font-semibold border border-[#D91B7E] hover:bg-white hover:text-[#D91B7E] transition duration-500 cursor-pointer">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Nav;
