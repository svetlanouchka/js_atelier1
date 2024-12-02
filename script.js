console.log('Hello, world!');

//créer une fonction qui retourne un nombre aléatoire entre 1 et 100
const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

//appeler la fonction

randomNumber();

console.log(randomNumber());

//créer un prompt pour demander le joueur 

const playerNumber = () => {
    const input = prompt('Entrez un nombre entre 1 et 100');
    //convertir la chaine de caractère en nombre
    const number = parseInt(input);
    return number;
}

console.log(playerNumber());

//créer une fonction qui compare le nombre du joueur avec le nombre aléatoire

const compareNumbers = (randomNumber, playerNumber) => {
    if (randomNumber > playerNumber) {
        message.textContent = "C'est plus!";
    } else if (randomNumber < playerNumber) {
        message.textContent = "C'est moins!";
    } else if (randomNumber === playerNumber) {
        message.textContent = "Bravo!";
    }
}

compareNumbers(randomNumber(), playerNumber());

console.log(compareNumbers(randomNumber(), playerNumber()));


