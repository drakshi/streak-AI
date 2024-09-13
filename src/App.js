import "./App.css";
import React, { useState } from "react";
import { createInitialGrid, updateGridWithPath, bfs } from "./pathFinding";

function App() {
  const [grid, setGrid] = useState(createInitialGrid(20, 20));
  const [startTile, setStartTile] = useState(null);
  const [endTile, setEndTile] = useState(null);

  const handleClick = (row, col) => {
    if (!startTile) {
      setStartTile({ row, col });
      const newGrid = [...grid];
      newGrid[row][col].isStart = true;
      setGrid(newGrid);
    } else if (!endTile) {
      setEndTile({ row, col });
      const newGrid = [...grid];
      newGrid[row][col].isEnd = true;
      setGrid(newGrid);
    }
  };

  const findPath = () => {
    if (startTile && endTile) {
      const path = bfs(startTile, endTile, grid);
      if (path) {
        const newGrid = updateGridWithPath(grid, path);
        setGrid(newGrid);
      } else {
        alert("No path found");
      }
    } else {
      alert("Please select start and end tiles");
    }
  };

  const resetGrid = () => {
    setGrid(createInitialGrid(20, 20));
    setStartTile(null);
    setEndTile(null);
  };

  return (
    <div className="App">
      <h1>Path finding grid</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell.isStart ? "start" : ""} ${
                  cell.isEnd ? "end" : ""
                } ${cell.isPath ? "path" : ""}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={findPath}>Find Path</button>
        <button onClick={resetGrid}>Reset Grid</button>
      </div>
    </div>
  );
}

export default App;
