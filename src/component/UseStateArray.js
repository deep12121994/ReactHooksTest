import React from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 1,
      name: "deep",
      age: 27
    },
    {
      id: 2,
      name: "dipali",
      age: 26
    }
  ];

  const [data, setData] = React.useState(bioData);
  const clearArray = () => {
    setData([]);
  };
  return (
    <div>
      {data.map((val) => (
        <h2 key={val.id}>
          My Name is {val.name}. My Age is {val.age}.
        </h2>
      ))}
      <button onClick={clearArray}>Clear Data</button>
    </div>
  );
};

export default UseStateArray;
