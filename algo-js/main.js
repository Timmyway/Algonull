// Importing the bubbleSort algorithm from the algorithms folder
import bubbleSort from "./algorythms/bubbleSort.js";

// Example usage of the bubbleSort function

// Define an array of players (or numbers) to be shuffled
const players = [1, 2, 3, 4, 5, 6, 7];

// Shuffle the array using the sort method with a random comparison function
// This is a simple way to randomize the order of the array elements
players.sort(() => Math.random() - 0.5);

console.log("Input:", players);

// Now, let's apply our bubbleSort algorithm to the shuffled array
// We create a copy of the array with [...players] to avoid modifying the original array
const sortedPlayers = bubbleSort([...players]);

console.log("Sorted:", sortedPlayers);