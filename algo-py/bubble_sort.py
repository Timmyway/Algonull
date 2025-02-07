import unittest
from random import shuffle

# Sample list of players
players = [1, 2, 3, 4, 5, 6, 7]

# Shuffle the list randomly to simulate an unsorted input
shuffle(players)
print(f'Input: {players}')

# Bubble sort algorithm function
def bubble_sort(arr):
	n = len(arr)

	# Early exit if the list is empty or has only one element
	if n <= 1:
		return arr

	# Outer loop to track rounds of sorting
	for i in range(n):
		swapped = False # Flag to track if any elements were swapped in this round
		for j in range(0, n - i - 1): # The -i avoids re-checking already sorted elements		
			if arr[j] > arr[j + 1]: # If the current element is greater than the next
				arr[j], arr[j + 1] = arr[j + 1], arr[j] # Swap them
				swapped = True # Mark that a swap happened

				# Print swap details for debugging/learning
				print(f'{arr[j]} <=> {arr[j+1]}')

		# Print the state of the array after each round		
		print(f'Round: {i + 1}')	

		# If no elements were swapped, the list is already sorted, so break early
		if not swapped:
			break

	return arr # Return the sorted array

# Unit test class for Bubble Sort algorithm
class TestBubbleSort(unittest.TestCase):
	def test_bubble_sort(self):
		players = [1, 2, 3, 4, 5, 6, 7]
		shuffled_players = players[:]  # Copy the original list to preserve it	
		shuffle(shuffled_players) # Shuffle the list for testing

		# Call the bubble_sort function and store the result
		sorted_players = bubble_sort(shuffled_players)

		# Assert that the output of bubble_sort is the same as the expected sorted list
		self.assertEqual(sorted_players, sorted(players))  # Compare with Python's built-in sorted function

# Run the unit tests when this script is executed
if __name__ == '__main__':
	unittest.main()