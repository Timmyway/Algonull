// Bubble Sort Algorithm - A simple sorting algorithm that repeatedly steps through the list, compares adjacent items, and swaps them if they are in the wrong order.

export default function bubbleSort(arr) {
    // If the array has zero or one element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Get the length of the array
    let n = arr.length;

    // Outer loop controls how many rounds we need to run through the array
    for (let i = 0; i < n; i++) {
        // Flag to check if any elements were swapped in the current round
        let swapped = false;

        // Inner loop to compare adjacent elements (n - i - 1 is used to avoid unnecessary comparisons).
        // Adjacent means that we compare the current element with the next one in the array.
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                // Destructuring swap syntax to swap values
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap

                // Set the flag to true since a swap occurred
                swapped = true;

                // Optionally log the swap (this is for debugging or visualization purposes)
                console.log(`${arr[j]} <=> ${arr[j + 1]}`);
            }
        }

        // Log the state of the array after each round for better visualization
        console.log(`Round: ${i + 1}`);

        // If no elements were swapped, the array is already sorted, so break early
        if (!swapped) break;
    }
    return arr;
}