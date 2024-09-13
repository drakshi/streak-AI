**Overview**

This project is a React.js application that implements a pathfinding algorithm on a 20x20 grid. The user can interact with the grid, select a start and end tile, and visualize the shortest path between them using the Breadth-First Search (BFS) algorithm.

**Pathfinding Algorithm**

The Breadth-First Search (BFS) algorithm is used to find the shortest path between the start and end tiles. BFS is well-suited for unweighted grid-based problems, ensuring that the shortest path is always found by expanding all nodes level by level.

**How the Algorithm Works:**

Starting from the selected start tile, BFS explores neighboring tiles in all four directions (up, down, left, right).
The algorithm continues expanding outward until the end tile is reached, at which point the path is returned.
If the end tile is unreachable, the user is notified that no path exists.

**React Hooks:** Used useState to manage grid state, start/end tiles, and path updates.

**State Management:** Given the small size of the app, the state is managed locally within components rather than using external state management libraries like Redux.

**Grid Representation:** The grid is represented as a 2D array, with each cell containing information about its state (e.g., isStart, isEnd, isPath).

Pathfinding logic is abstracted into a separate pathfinding.js file to ensure clean separation between UI and logic.

**Screenshots from localhost**
<img width="1440" alt="Screenshot 2024-09-13 at 12 48 18 PM" src="https://github.com/user-attachments/assets/640a187b-bc29-4b61-be25-b92de512619d">

<img width="1440" alt="Screenshot 2024-09-13 at 12 48 21 PM" src="https://github.com/user-attachments/assets/77e0fd8c-6ee8-428a-bfd2-6ac0fcc6fa6e">
