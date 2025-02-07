import bubbleSort from "../algorythms/bubbleSort.js";

// Test suite
test('Bubble sort should correctly sort an array', () => {
    const players = [1, 2, 3, 4, 5, 6, 7];

    // Copy array and shuffle it
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    // Sort with bubble sort
    const sortedPlayers = bubbleSort(shuffledPlayers);

    // Check if it matches the expected sorted array
    expect(sortedPlayers).toEqual([...players].sort((a, b) => a - b));
});