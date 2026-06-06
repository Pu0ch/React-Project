import { useState } from "react";
import "./App.css";
import Main1 from "./main1";
import Main2 from "../main2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main1/>
      <Main2/>
    </>
  );
}

export default App;
