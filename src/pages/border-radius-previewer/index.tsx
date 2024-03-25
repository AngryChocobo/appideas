import viteLogo from "/vite.svg";

import { Slider } from "@/components/ui/slider";

const BorderRadiusPreviewer = () => {
  return (
    <div className="flex m-auto items-center justify-center h-full w-full">
      <div className="relative">
        <img
          src={viteLogo}
          className="logo w-[300px] h-[300px] m-auto border-yellow-600 border-8"
          alt="Vite logo"
        />
        <Slider className="absolute top-[-10px]" />
        <Slider className="absolute bottom-[-10px]" />
        <Slider className="absolute bottom-[-10px] rotate-90" />
        <Slider className="absolute bottom-[-10px] rotate-180" />
      </div>
    </div>
  );
};
export default BorderRadiusPreviewer;
