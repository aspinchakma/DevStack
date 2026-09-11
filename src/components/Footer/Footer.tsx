import footerLogo from "../../assets/logo-text.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-12">
      <div className="grid grid-cols-1 gap-2 md:gap-10 lg:gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img className="mx-auto lg:mx-0" src={footerLogo} alt="" />
          <p className="text-[16px] text-[#64748B] text-center lg:text-left my-4">
            Curated tools, technologies, and resources for developers building{" "}
            <br className="hidden lg:inline-block" />
            modern software.
          </p>
          <div>
            <ul className="flex items-center gap-4  justify-center lg:justify-start text-[#4b5563]">
              <li>
                <a href="#" className="font-semibold">
                  GitHub
                </a>
              </li>

              <li className="size-[6px] rounded-full lg:hidden bg-[#4b5563]"></li>

              <li>
                <a href="#" className="font-semibold">
                  Twitter
                </a>
              </li>

              <li className="size-[6px] lg:hidden rounded-full bg-[#4b5563]"></li>

              <li>
                <a href="#" className="font-semibold">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[15px]">PRODUCT</h3>
          <ul className="text-[#4b5563] mt-3 leading-8 text-[15px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block lg:block">
          <h3 className="font-bold text-[15px]">COMPANY</h3>
          <ul className="text-[#4b5563] mt-3 leading-8 text-[15px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block lg:block">
          <h3 className="font-bold text-[15px]">LEGAL</h3>
          <ul className="text-[#4b5563] mt-3 leading-8 text-[15px]">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-0.5 bg-[#f1f5f9] my-6"></div>
      <div className="text-[#94A3B8] flex items-center justify-between">
        <p>&copy; {year} Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
