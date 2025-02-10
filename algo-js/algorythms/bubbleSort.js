// Algorithme de tri à bulles - Un algorithme de tri simple qui parcourt la liste plusieurs fois, 
// compare les éléments adjacents et les échange s'ils ne sont pas dans le bon ordre.

export default function bubbleSort(arr) {
    // Si le tableau contient zéro ou un élément, il est déjà trié
    if (arr.length <= 1) {
        return arr;
    }
    
    // Obtenir la longueur du tableau
    let n = arr.length;

    // La boucle externe contrôle le nombre de tours à effectuer sur le tableau
    for (let i = 0; i < n; i++) {
        // Indicateur pour vérifier si des éléments ont été échangés lors de ce tour
        let swapped = false;

        // Boucle interne pour comparer les éléments adjacents (n - i - 1 permet d'éviter les comparaisons inutiles).
        // Adjacents signifie que l'on compare l'élément actuel avec le suivant dans le tableau.
        for (let j = 0; j < n - i - 1; j++) {
            // Si l'élément actuel est plus grand que le suivant, on les échange
            if (arr[j] > arr[j + 1]) {
                // Syntaxe de déstructuration pour échanger les valeurs
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Échange

                // Définir l'indicateur à true puisque qu'un échange a eu lieu
                swapped = true;

                // Optionnellement, afficher l'échange (utile pour le débogage ou la visualisation)
                console.log(`${arr[j]} <=> ${arr[j + 1]}`);
            }
        }

        // Afficher l'état du tableau après chaque tour pour mieux visualiser le processus
        console.log(`Tour : ${i + 1}`);

        // Si aucun élément n'a été échangé, le tableau est déjà trié, donc on peut sortir de la boucle
        if (!swapped) break;
    }
    return arr;
}
