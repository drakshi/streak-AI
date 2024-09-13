// pathFinding.js

export const bfs = (start, end, grid) => {
  const queue = [[start]];
  const visited = new Set();
  visited.add(`${start.row}-${start.col}`);

  while (queue.length > 0) {
    const path = queue.shift();
    const { row, col } = path[path.length - 1];

    //if reached the end
    if (row === end.row && col === end.col) {
      return path;
    }

    const neighbors = getNeighbors(row, col, grid);
    neighbors.forEach((neighbor) => {
      const { row: nRow, col: nCol } = neighbor;
      if (!visited.has(`${nRow}-${nCol}`)) {
        visited.add(`${nRow}-${nCol}`);
        queue.push([...path, neighbor]);
      }
    });
  }
  return null;
};

export const getNeighbors = (row, col, grid) => {
  const neighbors = [];
  if (row > 0) neighbors.push({ row: row - 1, col }); //up
  if (row < grid.length - 1) neighbors.push({ row: row + 1, col }); //down
  if (col > 0) neighbors.push({ row, col: col - 1 }); //left
  if (col < grid[0].length - 1) neighbors.push({ row, col: col + 1 }); //right
  return neighbors;
};

export const createInitialGrid = (rows, cols) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push({
        row,
        col,
        isStart: false,
        isEnd: false,
        isPath: false,
        isObstacle: false,
      });
    }
    grid.push(currentRow);
  }
  return grid;
};

export const updateGridWithPath = (grid, path) => {
  const newGrid = [...grid];
  path.forEach(({ row, col }) => {
    newGrid[row][col].isPath = true;
  });
  return newGrid;
};
