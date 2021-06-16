import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("Dipali");
  // console.log(useState("deep"));
  // let myFirstVal = useState("Deepali")[0];
  //console.log(myFirstVal);

  const clickOnMe = (e) => {
    console.log(val);
    /* if(val == "Dipali")
      setVal("Welcome to Hooks Tutorial")
    else
      setVal("Dipali")  */
    setVal(val === "Dipali" ? "Welcome" : "Dipali");
  };
  return (
    <div className="App">
      <h1 id="text">{val}</h1>
      <button onClick={clickOnMe} id="btn">
        Click
      </button>
    </div>
  );
}
