// Importation de l'algorithme du tri à bulles depuis le dossier algorythms
import bubbleSort from "./algorythms/bubbleSort.js";
import mergeSort from './algorythms/mergeSort.js';

// Exemple d'utilisation de la fonction bubbleSort

// Définir un tableau de joueurs (ou de nombres) à mélanger
const players = [1, 2, 3, 4, 5, 6, 7];

// Mélanger le tableau en utilisant la méthode sort avec une fonction de comparaison aléatoire
// C'est une manière simple de randomiser l'ordre des éléments du tableau
players.sort(() => Math.random() - 0.5);

console.log("Entrée :", players);

// Appliquer l'algorithme du tri à bulles au tableau mélangé
// On crée une copie du tableau avec [...players] pour éviter de modifier l'original
// const sortedPlayersWithBubbleSort = bubbleSort([...players]);
const sortedPlayersWithMergeSort = mergeSort([...players]);

// console.log("Trié en utilisant 'Bubble Sort' :", sortedPlayersWithBubbleSort);
console.log("Trié en utilisant 'Merge Sort' :", sortedPlayersWithMergeSort);
