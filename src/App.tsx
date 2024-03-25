import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [tierList] = useState(["Beginner", "Intermediate", "Advanced"]);
  return (
    <>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button>Click me</Button>
      <div>
        {tierList.map((tier) => (
          <span key={tier}>{tier}</span>
        ))}
      </div>
    </>
  );
}

export default App;
