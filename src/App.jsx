import * as Sentry from "@sentry/react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Gaming from "./components/Gaming";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Gaming />
      <Footer />
    </section>
  );
};

export default Sentry.withProfiler(App);
