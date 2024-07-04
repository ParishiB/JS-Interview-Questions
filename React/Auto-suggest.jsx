import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [ans, setAns] = useState([]);
  const data = [
    { t: "Apple" },
    { t: "Banana" },
    { t: "Cherry" },
    { t: "Date" },
    { t: "Fig" },
    { t: "Grape" },
  ];

  const callFunc = (e) => {
    const value = e.target.value;
    setVal(value);
    if (value.length > 0) {
      const filteredSuggestion = data.filter((item) =>
        item.t.toLowerCase().includes(value.toLowerCase())
      );
      setAns(filteredSuggestion);
    } else {
      setAns([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setVal(suggestion);
    setAns([]);
  };

  return (
    <div>
      <input type="text" value={val} onChange={callFunc} />
      {ans.length > 0 && (
        <ul>
          {ans.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item.t)}>
              {item.t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
