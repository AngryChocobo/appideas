import { cn } from "@/lib/utils";
import { useState } from "react";
type Operation = "+" | "-" | "*" | "/" | "%";

const Calculator = () => {
  const btns = [
    {
      key: "C",
      method: () => {
        const temp = String(display).split("");
        temp.pop();
        const now = temp.join("");
        setDisplay(now);
      },
    },
    {
      key: "+/-",
      method: () => {
        setDisplay(Number(display) * -1 + "");
      },
    },
    {
      key: "%",
      method: () => {
        addOperation("%");
      },
    },
    {
      key: "/",
      method: () => {
        addOperation("/");
      },
    },
    {
      key: "7",
      method: () => {
        addNumber("7");
      },
    },
    {
      key: "8",
      method: () => {
        addNumber("8");
      },
    },
    {
      key: "9",
      method: () => {
        addNumber("9");
      },
    },
    {
      key: "*",
      method: () => {
        addOperation("*");
      },
    },
    {
      key: "4",
      method: () => {
        addNumber("4");
      },
    },
    {
      key: "5",
      method: () => {
        addNumber("5");
      },
    },
    {
      key: "6",
      method: () => {
        addNumber("6");
      },
    },
    {
      key: "-",
      method: () => {
        addOperation("-");
      },
    },
    {
      key: "1",
      method: () => {
        addNumber("1");
      },
    },
    {
      key: "2",
      method: () => {
        addNumber("2");
      },
    },
    {
      key: "3",
      method: () => {
        addNumber("3");
      },
    },
    {
      key: "+",
      method: () => {
        addOperation("+");
      },
    },
    { key: "", method: () => {} },
    {
      key: "0",
      method: () => {
        addNumber("0");
      },
    },
    {
      key: ".",
      method: () => {
        if (!display.includes(".")) {
          setDisplay(display + ".");
        }
      },
    },
    {
      key: "=",
      method: () => {
        getResult();
      },
    },
  ];
  const addNumber = (numStr: string) => {
    setDisplay(display + numStr);
  };
  const addOperation = (op: Operation) => {
    setOperation(op);
    setPrevNum(Number(display));
    setDisplay("");
  };
  const getResult = () => {
    if (!operation) {
      return;
    }
    let result = 0;
    let now = display;
    if (now.endsWith(".")) {
      now = now.slice(0, -1);
    }
    switch (operation) {
      case "+":
        result = prevNum + Number(now);
        break;
      case "-":
        result = prevNum - Number(now);
        break;
      case "*":
        result = prevNum * Number(now);
        break;
      case "/":
        result = prevNum / Number(now);
        break;
      case "%":
        result = prevNum % Number(now);
        break;
      default:
        break;
    }
    setDisplay(result + "");
    setOperation(undefined);
  };
  const [prevNum, setPrevNum] = useState(0);

  const [display, setDisplay] = useState("");
  const [operation, setOperation] = useState<Operation>();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="rounded-2xl border-2 border-slate-300 p-4">
        <div className="h-[2em] min-h-[2em] w-full p-2 text-right text-4xl">
          {display}
        </div>
        <div className="grid select-none grid-cols-4 gap-4">
          {btns.map((btn) => {
            return (
              <div
                key={btn.key}
                className={cn(
                  "flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-lg hover:cursor-pointer hover:bg-slate-300",
                  !btn.key && "invisible shadow-none",
                )}
                onClick={btn.method}
              >
                {btn.key}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
