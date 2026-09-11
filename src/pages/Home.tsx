import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav/Nav";
import TechnologiesContainer from "../components/TechnologiesContainer/TechnologiesContainer";
import type { Technology } from "../components/type/type";

const Home = () => {
  const responseData = async (): Promise<Technology[]> => {
    const response = await fetch(
      "https://aspinchakma.github.io/api-for-practice/technology.json",
    );
    const data = await response.json();
    return data;
  };

  return (
    <div className="  flex flex-col min-h-screen relative">
      <ToastContainer />
      <div className="w-[95%] lg:w-[89%] mx-auto sticky top-0 bg-white z-10">
        <Nav />
      </div>
      <main className="flex-1 w-[95%] lg:w-[89%] mx-auto">
        <Hero />
        <Suspense fallback={<Loader />}>
          <TechnologiesContainer technologyResponse={responseData()} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
