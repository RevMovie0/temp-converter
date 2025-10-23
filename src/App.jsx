import { useState } from "react";
import "./App.css";
import { CtoF } from "./CtoF";
import { FtoC } from "./FtoF";

function App() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("CtoF");

  const result = temp
    ? (scale === "CtoF" ? CtoF(temp) : FtoC(temp)).toFixed(2)
    : "";

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label
        onClick={() => setScale(scale === "CtoF" ? "FtoC" : "CtoF")}
        style={{
          backgroundColor: "green",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        {scale === "CtoF" ? "Convert C to F" : "Convert F to C"}
      </label>{" "}
      <input
        type="number"
        placeholder={scale === "CtoF" ? "Celsius" : "Fahrenheit"}
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <p>
        {result} {scale === "CtoF" ? "'F" : "'C"}
      </p>
    </div>
  );
}

export default App;
