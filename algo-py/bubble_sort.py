import unittest
from random import shuffle

# Liste d'exemple de joueurs
players = [1, 2, 3, 4, 5, 6, 7]

# Mélanger la liste aléatoirement pour simuler une entrée non triée
shuffle(players)
print(f'Entrée : {players}')

# Fonction implémentant l'algorithme du tri à bulles
def bubble_sort(arr):
	n = len(arr)

	# Sortie anticipée si la liste est vide ou contient un seul élément
	if n <= 1:
		return arr

	# Boucle externe pour suivre les tours de tri
	for i in range(n):
		swapped = False # Indicateur pour vérifier si un échange a eu lieu dans ce tour
		for j in range(0, n - i - 1): # Le -i évite de revérifier les éléments déjà triés		
			if arr[j] > arr[j + 1]: # Si l'élément actuel est plus grand que le suivant
				arr[j], arr[j + 1] = arr[j + 1], arr[j] # Les échanger
				swapped = True # Marquer qu'un échange a eu lieu

				# Afficher les détails de l'échange pour le débogage/apprentissage
				print(f'{arr[j]} <=> {arr[j+1]}')

		# Afficher l'état du tableau après chaque tour		
		print(f'Tour : {i + 1}')	

		# Si aucun échange n'a eu lieu, la liste est déjà triée, donc on arrête prématurément
		if not swapped:
			break

	return arr # Retourner la liste triée

# Classe de test unitaire pour l'algorithme du tri à bulles
class TestBubbleSort(unittest.TestCase):
	def test_bubble_sort(self):
		players = [1, 2, 3, 4, 5, 6, 7]
		shuffled_players = players[:]  # Copier la liste originale pour la préserver	
		shuffle(shuffled_players) # Mélanger la liste pour le test

		# Appeler la fonction bubble_sort et stocker le résultat
		sorted_players = bubble_sort(shuffled_players)

		# Vérifier que le résultat de bubble_sort est identique à la liste triée attendue
		self.assertEqual(sorted_players, sorted(players))  # Comparer avec la fonction sorted() de Python

# Exécuter les tests unitaires lorsque ce script est lancé
if __name__ == '__main__':
	unittest.main()