import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5
    });
  }, []);
  return (
    <div
      id="highlights"
      className="w-screen h-full common-padding overflow-hidden bg-zinc"
    >
      <div>
        <div className="mb-12 w-full flex items-center justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-center gap-5 sm:flex-col md:flex-row">
            <p className="link text-normal sm:text-lg md:text-xl">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link  text-normal sm:text-lg md:text-xl">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </div>
  );
};

export default Highlights;
