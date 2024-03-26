import { useState } from "react";
import "./index.css";

const ChristmasLights = () => {
  const lights = ["red", "orange", "yellow", "green", "aqua", "blue", "purple"];
  const [duration, setDuration] = useState(2);
  return (
    <div
      className="flex h-full w-full flex-col
  items-center justify-center bg-black"
    >
      <div className="aa flex h-11 w-1/2 gap-2 text-white">
        {lights.map((light) => {
          return (
            <div
              key={light}
              className="neon-light h-[40px] w-[40px] rounded-full"
              style={{
                backgroundColor: light,
                animationDuration: duration + "s",
                animationName: "animation-red",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ChristmasLights;
