import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#ECEEEE] w-full min-h-[100vh] pb-10">
      <Navbar />
      <div className="w-full p-4 flex flex-col justify-center items-center">
        <h1 className="font-bebas text-5xl text-center md:text-8xl tracking-wide">
          Great videos start with a plan
        </h1>
        <h1 className="font-roboto text-md text-gray-500 md:text-2xl">
          Try VEED with our{" "}
          <a className="font-roboto text-[#6A79FE] underline">Free Plan</a>
        </h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
