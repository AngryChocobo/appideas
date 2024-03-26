import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tier, ideaList } from "./ideaList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";

function App() {
  const [tierList] = useState<Tier[]>(["Beginner", "Intermediate", "Advanced"]);
  const [checkedTier] = useState<Tier[]>([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]);
  const progress =
    (ideaList.filter((v) => v.status).length / ideaList.length) * 100;

  return (
    <div className="m-auto h-full max-w-screen-md">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="mb-4 flex items-center space-x-4">
        <div className="text-lg">Tier Options </div>
        {tierList.map((tier) => (
          <div key={tier} className="flex items-center">
            <Checkbox id={tier} checked={checkedTier.includes(tier)} />
            <label
              htmlFor={tier}
              className="ml-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {tier}
            </label>
          </div>
        ))}
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Short Description</TableHead>
            <TableHead>Tier</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ideaList.map((idea) => (
            <TableRow key={idea.name}>
              <TableCell className="font-medium">
                <Button variant="link" className="px-0 font-bold">
                  <Link to={idea.href ?? "/"}>{idea.name}</Link>
                </Button>
              </TableCell>
              <TableCell>{idea.shortDescription}</TableCell>
              <TableCell>
                <Badge key={idea.tier}>{idea.tier}</Badge>
              </TableCell>
              <TableCell className="text-right">
                {idea.status ? "✅" : "⭕️"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell colSpan={2} className="text-right">
              <Progress value={progress} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default App;
