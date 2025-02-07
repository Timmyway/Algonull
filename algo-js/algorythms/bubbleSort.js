export default function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swapped = true;
                console.log(`${arr[j]} <=> ${arr[j + 1]}`);
            }
        }
        console.log(`Round: ${i + 1}`);
        if (!swapped) break;
    }
    return arr;
}