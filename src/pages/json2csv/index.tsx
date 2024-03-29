import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function JSON2CSV() {
  const [json, setJson] = useState(`[
  {
    "album": "The White Stripes",
    "year": 1999,
    "price": 200},
  {
    "album": "De Stijl",
    "year": 2000,
    "price": 300
  }
]`);
  const [csv, setCsv] = useState("");
  const clear = () => {
    setCsv("");
    setJson("");
  };
  /**
   * CSV first line is json's key
   * other lines are json's value, using  commasto separate.
   */
  const jsonToCsv = () => {
    try {
      const jsonArray = JSON.parse(json);
      const jsonObj = jsonArray[0];
      if (jsonObj) {
        const keys = Object.keys(jsonObj);

        const header = keys.join(",") + "\n";
        const items = jsonArray.map((obj: Record<string, string>) => {
          return Object.values(obj).join(",") + "\n";
        });

        const str = [header, ...items].join("");
        setCsv(str);
      } else {
        alert("JSON obj error");
      }
    } catch (error) {
      alert("JSON parse Error");
    }
  };
  const csvToJson = () => {
    const rows = csv.split("\n").filter(Boolean);
    const firstRow = rows.shift();
    if (!firstRow) {
      return;
    }
    const keys = firstRow.split(",");
    const jsonArray = rows.map((row) => {
      const values = row.split(",");
      const obj: Record<string, string> = {};
      keys.forEach((key, index) => {
        obj[key] = values[index];
      });
      return obj;
    });
    setJson(JSON.stringify(jsonArray));
  };

  const handleSaveFile = () => {
    const outputValue = csv.trim();

    if (!outputValue.length) return;

    // download file type
    const fileFinalType = "text/csv";

    const type = `${fileFinalType};charset=utf-8`,
      fileExtension = fileFinalType.split("/")[1],
      fileName = `JSVConverter.${fileExtension}`,
      blob = new Blob([outputValue], { type }),
      a = document.createElement("a"),
      url = URL.createObjectURL(blob);

    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  };
  return (
    <div className="m-auto flex h-[500px]  w-[800px]  items-center justify-center gap-6 ">
      <div className=" flex  flex-1 flex-col">
        <label htmlFor="json">JSON</label>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          name="json"
          id="json"
          rows={4}
          className="h-[300px] rounded-md  border border-solid border-gray-400 p-2"
        ></textarea>
      </div>
      <div className="flex flex-col gap-3">
        <Button onClick={jsonToCsv}>{">"}</Button>
        <Button onClick={csvToJson}> {"<"} </Button>
        <Button onClick={clear}> {"Clear"} </Button>
        <Button onClick={handleSaveFile}> {"DownloadCSV"} </Button>
      </div>
      <div className="flex  flex-1 flex-col">
        <label htmlFor="csv">CSV</label>
        <textarea
          value={csv}
          onChange={(e) => setCsv(e.target.value)}
          name="csv"
          id="csv"
          className="h-[300px] rounded-md  border border-solid border-gray-400 p-2"
          rows={4}
        ></textarea>
      </div>
    </div>
  );
}
