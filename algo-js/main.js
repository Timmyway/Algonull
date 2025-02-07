import bubbleSort from "./algorythms/bubbleSort.js";

// Example usage
const players = [1, 2, 3, 4, 5, 6, 7];
players.sort(() => Math.random() - 0.5); // Shuffle array
console.log("Input:", players);

const sortedPlayers = bubbleSort([...players]);
console.log("Sorted:", sortedPlayers);