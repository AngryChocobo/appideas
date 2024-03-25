import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

function Bin2Dec() {
  const [num, setNum] = useState("");
  const getDecimal = () => {
    const list = num.split("");
    let times = 1;
    let total = 0;
    list.reverse();
    list.forEach((item) => {
      const value = Number(item);
      total += value * times;
      times = times * 2;
    });
    return total;
  };
  const errorMsg = /^[01]+$/.test(num)
    ? ""
    : "Your input is not a binary number";
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Bin2Dec</CardTitle>
        <CardDescription>Binary-to-Decimal number converter</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="userInput">Binary</Label>
              <Input
                id="userInput"
                placeholder="Binary Value"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
              {num && errorMsg && (
                <span className="text-red-500">{errorMsg}</span>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="decimal">Decimal</Label>
              <Input
                id="decimal"
                placeholder="Decimal Value"
                value={getDecimal()}
                readOnly
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
export default Bin2Dec;
