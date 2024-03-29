import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function DynamicCssVariables() {
  const [color, setColor] = useState("#00ff00");
  const [size, setSize] = useState("16px");
  useEffect(() => {
    document.documentElement.style.setProperty("--custom-bg", color);
    document.documentElement.style.setProperty("--custom-fontsize", size);
  }, [color, size]);
  return (
    <div className="flex h-full  w-full flex-col items-center justify-center ">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        type="text"
        className="w-auto"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <div
        className="mt-3  h-40 w-40 border"
        style={{ background: "var(--custom-bg)" }}
      >
        <p
          style={{
            fontSize: `var(--custom-fontsize)`,
          }}
        >
          You can change bg color and font size!{" "}
        </p>
      </div>
    </div>
  );
}
