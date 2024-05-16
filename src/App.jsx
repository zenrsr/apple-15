import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </section>
  );
};

export default App;
