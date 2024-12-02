
//créer une fonction qui retourne un nombre aléatoire entre 1 et 100
const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

//appeler la fonction

const generateRandomNumber = randomNumber();

console.log('Nombre aléatoire à déviner' + generateRandomNumber)
//créer un tableau pour les essais

const attempts = [];

//créer un prompt pour demander le joueur 

const playerNumber = () => {
    const input = prompt('Entrez un nombre entre 1 et 100');
    //convertir la chaine de caractère en nombre
    const number = parseInt(input);

    if (isNaN(number) || number < 1 || number > 100) {
        alert('Entrée invalide. Veuillez entrer un nombre entre 1 et 100.');
        return null;
        // return number;
    }

        attempts.push(number);
        return number;

    
}



//créer une fonction qui compare le nombre du joueur avec le nombre aléatoire

const compareNumbers = (randomNumber, playerNumber) => {
    if (randomNumber > playerNumber) {
        return "C'est plus!";
    } else if (randomNumber < playerNumber) {
        return "C'est moins!";
    } else if (randomNumber === playerNumber) {
        return "Bravo! Vous avez trouvé en " + attempts.length + "essais!";
    }
}


// console.log(compareNumbers(generateRandomNumber, playerNumber()));


//Jeu 

let playerInput = null;
let message = "";
const maxAttempts = 10;

do {
    playerInput = playerNumber();
    if (playerInput !== null) {
        message = compareNumbers(generateRandomNumber, playerInput);
        console.log(message);
    }
    if (attempts.length >= maxAttempts) {
        console.log("Perdu! Vous avez atteint le nombre maximum d'essais.");
        break;
    }
} while (playerInput !== generateRandomNumber);

if (playerInput === generateRandomNumber) {
    console.log("Bravo! Vous avez trouvé en " + attempts.length + " essais!");
} else {
    console.log("Le nombre à trouver était : " + generateRandomNumber);
}

console.log("Essais du joueur :", attempts);

