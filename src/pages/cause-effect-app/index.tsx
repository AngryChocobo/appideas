import { useState } from "react";

const CauseEffectApp = () => {
  const lights = ["red", "orange", "yellow", "green", "aqua", "blue", "purple"];
  const [selected, setSelected] = useState<string>();
  return (
    <div
      className="flex h-full w-full flex-col
  items-center justify-center bg-black"
    >
      <div className="flex h-11 w-1/2 justify-center gap-2 ">
        {lights.map((light) => {
          return (
            <div
              key={light}
              className="neon-light h-[40px] w-[40px] rounded-full"
              style={{
                backgroundColor: light,
              }}
              onClick={() => setSelected(light)}
            ></div>
          );
        })}
      </div>
      <div className=" text-white">
        Selected color: <span style={{ color: selected }}>{selected}</span>
      </div>
    </div>
  );
};

export default CauseEffectApp;
