import React from "react";
import { Button } from "./component/Button";
import Header from "./component/Header";
import Body from "./component/Body";

const App = () => {
  return (
    <div>
      <Body />
      <Header />
    </div>
  );
};

export default App;

// Header

import React from "react";
import { Button } from "./Button";

const Header = () => {
  const solve = (e) => {
    alert("Header button clicked");
  };

  return (
    <div>
      <Button value="Header" onClick={solve} isLoading={true} />
    </div>
  );
};

export default Header;

//Button

import React, { useState } from "react";

export const Button = ({ value, onClick, isLoading }) => {
  
  return isLoading ? (
    <p>It is loading</p>
  ) : (
    <div
      onClick={onClick}
      className="bg-red-700 w-3/4 flex justify-center text-white"
    >
      {value}
    </div>
  );
};

// Body

import React from "react";
import { Button } from "./Button";

const Body = () => {

  const solve = (e) => {
    alert("Body button clicked");
  };

  
  return (
    <div>
      <Button value="Body" onClick={solve} isLoading={false} />
    </div>
  );
};

export default Body;



