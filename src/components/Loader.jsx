import { Html } from "@react-three/drei";
import { quantum } from "ldrs";

quantum.register();

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="w-[10vw] h-[10vh] rounded-full ">
          <l-quantum size="65" speed="1.75" color="white"></l-quantum>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
