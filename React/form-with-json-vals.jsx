import React, { useState, useEffect } from "react";

const data = {
  configs: {
    type: "object",
    properties: {
      clientKey: {
        type: "string",
        title: "Client Id",
      },
      pspId: {
        type: "string",
        title: "BillDesk issued merchant id",
        minLength: 1,
      },
    },
  },
};

const App = () => {
  const [vals, setVals] = useState([]);
  const properties = data.configs.properties;

  useEffect(() => {
    const renderVals = (properties) => {
      const newVals = [];
      for (let key in properties) {
        newVals.push(key);
      }
      setVals(newVals);
    };

    renderVals(properties);
  }, [properties]);

  return (
    <div>
      {vals.map((item, index) => (
        <div key={index} className="">
          {item}
          <input type="text" placeholder="Enter values here" />
        </div>
      ))}
    </div>
  );
};

export default App;

