import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <div className="w-[95%] lg:w-[89%] mx-auto  flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <h3>main Section</h3>
      </main>
      <h3>This is Footer</h3>
    </div>
  );
};

export default Home;
