import unittest
from random import shuffle

players = [1, 2, 3, 4, 5, 6, 7]
shuffle(players)

print(f'Input: {players}')

def bubble_sort(arr):
	n = len(arr)	
	for i in range(n):
		swapped = False
		for j in range(0, n - i - 1):			
			if arr[j] > arr[j + 1]:
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
				swapped = True
				print(f'{arr[j]} <=> {arr[j+1]}')
		print(f'Round: {i+1}')		
		if not swapped:
			break
	return arr

class TestBubbleSort(unittest.TestCase):
	def test_bubble_sort(self):
		players = [1, 2, 3, 4, 5, 6, 7]
		shuffled_players = players[:]  # Copy to avoid modifying original		
		shuffle(shuffled_players)		

		sorted_players = bubble_sort(shuffled_players)
		self.assertEqual(sorted_players, sorted(players))  # Compare with expected sorted list	

if __name__ == '__main__':
	unittest.main()