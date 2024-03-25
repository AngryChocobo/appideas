import { useState } from "react";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const BorderRadiusPreviewer = () => {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(30);
  const [right, setRight] = useState(20);
  const [bottom, setBottom] = useState(30);
  const borderRadius = `${top}% ${100 - top}% ${100 - bottom}% ${bottom}% / ${100 - left}% ${100 - right}% ${right}% ${left}%`;
  return (
    <div className="m-auto flex h-full w-full flex-col items-center justify-center">
      <div className="relative">
        <img
          src={viteLogo}
          className="logo m-auto h-[300px] w-[300px] border-8 border-yellow-600"
          alt="Vite logo"
          style={{ borderRadius }}
        />
        <input
          type="range"
          className="absolute top-[-1em] w-full "
          value={top}
          onChange={(e) => setTop(Number(e.target.value))}
        />
        <input
          type="range"
          className="absolute bottom-[-1em] w-full"
          value={bottom}
          onChange={(e) => setBottom(Number(e.target.value))}
        />
        <input
          type="range"
          style={{
            writingMode: "vertical-lr",
          }}
          className="absolute bottom-0 left-[-1em] h-full w-[1em]"
          value={left}
          onChange={(e) => setLeft(Number(e.target.value))}
        />
        <input
          type="range"
          style={{
            writingMode: "vertical-lr",
          }}
          className="absolute bottom-0 right-[-1em] h-full w-[1em]"
          value={right}
          onChange={(e) => setRight(Number(e.target.value))}
        />
      </div>
      <div className="mt-4 flex gap-2">
        <div className="">left: {left}</div>
        <div className="">right: {right}</div>
        <div className="">top: {top}</div>
        <div className="">bottom: {bottom}</div>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="mt-4 rounded-lg bg-slate-200 p-2 hover:bg-slate-400">
              border-radius: {borderRadius};
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Click to Copy~</p>
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default BorderRadiusPreviewer;
