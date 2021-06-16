import React, { useState } from "react";

const UseStateObject = () => {
  const [myObj, setMyObj] = useState({
    myName: "deep",
    myAge: 25,
    degree: "ME(IT)"
  });

  const updateData = () => {
    setMyObj({ ...myObj, myName: "Dipali" });
  };

  return (
    <div>
      <h1>
        My name is {myObj.myName}. My Age {myObj.myAge}. My Degree{" "}
        {myObj.degree}.
      </h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default UseStateObject;
