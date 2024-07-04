import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <CiStar
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            color: index <= hoveredIndex ? "yellow" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default App;
