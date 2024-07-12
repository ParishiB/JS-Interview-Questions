import React, { useState } from "react";

const App = () => {
  const [txt, setTxt] = useState("");
  const saveToLocal = () => {
    localStorage.setItem("savedData", txt);
  };

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  const callFunc = (e) => {
    let inputValue = e.target.innerText;
    setTxt(inputValue);
    if (inputValue.includes("***")) {
      inputValue = inputValue.replace("***", "");
      e.target.style.textDecoration = "underline";
    }
    if (inputValue.includes("**")) {
      inputValue = inputValue.replace("**", "");
      e.target.style.color = "red";
    }
    if (inputValue.includes("*")) {
      inputValue = inputValue.replace("*", "");
      e.target.style.fontWeight = "bold";
    }
    if (inputValue.includes("#")) {
      inputValue = inputValue.replace("#", "");
      e.target.style.fontSize = "2em";
      e.target.style.fontWeight = "bold";
    }
    inputValue = reverseString(inputValue);
    setTxt(inputValue);
  };

  return (
    <div>
      <div className="flex">
        <h1>Portle assignment</h1>
        <button className="border bg-green-200" onClick={saveToLocal}>
          save
        </button>
      </div>
      <div
        className="body-container w-full h-screen"
        contentEditable="true"
        onInput={callFunc}
        dir="ltr"
      >
        {txt}
      </div>
    </div>
  );
};

export default App;
