export default function mergeSort(players) {  // "merge" pour "fusion" et "sort" pour "tri"
    // Si l'équipe a 1 ou 0 joueur, pas besoin de la trier !
    if (players.length <= 1) {
        return players;
    }

    // On trouve le milieu de l'équipe
    const middle = Math.floor(players.length / 2);    
    
    // On divise l'équipe en deux groupes
    const leftPlayers = players.slice(0, middle);
    const rightPlayers = players.slice(middle);

    console.log('-- 1. Left group --->', leftPlayers);
    console.log('-- 2. Right group --->', rightPlayers);

    // On trie chaque groupe (voici la récursion en action !)
    const sortedLeft = mergeSort(leftPlayers);
    const sortedRight = mergeSort(rightPlayers);    

    // On fusionne (merge) les deux groupes triés
    const merged = merge(sortedLeft, sortedRight);

    console.log('-- 3. MERGED GROUP --->', merged);
    return merged;
}

// La fonction "merge" (fusion) qui combine deux groupes triés
function merge(leftPlayers, rightPlayers) {
    const result = [];
    let leftIndex = 0;   // Position dans le groupe de gauche
    let rightIndex = 0;  // Position dans le groupe de droite

    // Tant qu'il reste des joueurs dans les deux groupes
    while (leftIndex < leftPlayers.length && rightIndex < rightPlayers.length) {
        console.log('On prend le plus petit entre les deux groupes :')
        console.log('Left ==> ', leftPlayers[leftIndex])
        console.log('Right ==> ', rightPlayers[rightIndex])
        if (leftPlayers[leftIndex] <= rightPlayers[rightIndex]) {
            result.push(leftPlayers[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightPlayers[rightIndex]);
            rightIndex++;
        }
        console.log('Result ==> ', result)
    }

    // On ajoute les joueurs restants
    while (leftIndex < leftPlayers.length) {
        result.push(leftPlayers[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < rightPlayers.length) {
        result.push(rightPlayers[rightIndex]);
        rightIndex++;
    }

    console.log('================> MERGED GROUP', result);

    return result;
}