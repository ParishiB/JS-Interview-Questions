import React, { useState, useEffect } from "react";

const App = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [curr, setCurr] = useState("X");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [cells]);

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinner(true);
        return;
      }
    }

    if (cells.every((cell) => cell !== null)) {
      setWinner(false);
    }
  };

  const assignMark = (index) => {
    if (cells[index] !== null || winner) {
      return;
    }

    const newCells = [...cells];
    newCells[index] = curr;
    setCells(newCells);

    setCurr(curr === "X" ? "O" : "X");
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      <div className="grid grid-cols-3 gap-4 w-80 h-80">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-300 bg-gray-100 text-xl cursor-pointer"
            onClick={() => assignMark(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {winner && <p>Player {curr} wins!</p>}
      {!winner && cells.every((cell) => cell !== null) && <p>It's a tie!</p>}
    </div>
  );
};

export default App;
