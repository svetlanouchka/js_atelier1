// Générer un nombre aléatoire entre 1 et 100
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
let randomNumber = generateRandomNumber();
console.log('Nombre mystère :', randomNumber);

const attempts = [];
const maxAttempts = 10;

// Récupération des éléments de l'interface
const input = document.getElementById('number');
const feedback = document.getElementById('feedback');
const attemptsCount = document.getElementById('attempts').querySelector('span');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

// Fonction de vérification du nombre
const checkNumber = () => {
    const playerNumber = parseInt(input.value);

    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) {
        feedback.textContent = 'Veuillez entrer un nombre valide entre 1 et 100.';
        feedback.classList.add('negative');
        return;
    }

    attempts.push(playerNumber);
    attemptsCount.textContent = attempts.length;

    if (playerNumber < randomNumber) {
        feedback.textContent = "C'est plus !";
        feedback.classList.remove('positive');
        feedback.classList.add('negative');
    } else if (playerNumber > randomNumber) {
        feedback.textContent = "C'est moins !";
        feedback.classList.remove('positive');
        feedback.classList.add('negative');
    } else {
        feedback.textContent = `Bravo ! Vous avez trouvé en ${attempts.length} essais.`;
        feedback.classList.remove('negative');
        feedback.classList.add('positive');
        endGame();
    }

    if (attempts.length >= maxAttempts && playerNumber !== randomNumber) {
        feedback.textContent = `Perdu ! Le nombre mystère était ${randomNumber}.`;
        endGame();
    }

    input.value = '';
};

// Fin de jeu
const endGame = () => {
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.classList.remove('hidden');
};

// Réinitialiser le jeu
const restartGame = () => {
    randomNumber = generateRandomNumber();
    console.log('Nouveau nombre mystère :', randomNumber);

    attempts.length = 0;
    attemptsCount.textContent = '0';
    feedback.textContent = 'Bonne chance !';
    feedback.classList.remove('positive', 'negative');

    submitBtn.disabled = false;
    input.disabled = false;
    input.value = '';
    restartBtn.classList.add('hidden');
};

// Gestion des événements
submitBtn.addEventListener('click', checkNumber);
restartBtn.addEventListener('click', restartGame);


//Jeu sans inteface graphique
// //créer une fonction qui retourne un nombre aléatoire entre 1 et 100
// const randomNumber = () => {
//     return Math.floor(Math.random() * 100) + 1;
// }

// //appeler la fonction

// const generateRandomNumber = randomNumber();


// console.log('Nombre aléatoire à déviner' + generateRandomNumber)
// //créer un tableau pour les essais

// const attempts = [];
// const maxAttempts = 10;

// //sélectionner les éléments du DOM

// const input = document.getElementById('number');
// const feedback = document.getElementById('feedback');
// const attemptsCount = document.getElementById('attempts').querySelector('span');
// const submitBtn = document.getElementById('submit-btn');
// const restartBtn = document.getElementById('restart-btn');

// //créer un prompt pour demander le joueur 

// const playerNumber = () => {
//     const input = prompt('Entrez un nombre entre 1 et 100');
//     //convertir la chaine de caractère en nombre
//     const number = parseInt(input);

//     if (isNaN(number) || number < 1 || number > 100) {
//         alert('Entrée invalide. Veuillez entrer un nombre entre 1 et 100.');
//         return null;
//         // return number;
//     }

//         attempts.push(number);
//         return number;

    
// }



// //créer une fonction qui compare le nombre du joueur avec le nombre aléatoire

// const compareNumbers = (randomNumber, playerNumber) => {
//     if (randomNumber > playerNumber) {
//         return "C'est plus!";
//     } else if (randomNumber < playerNumber) {
//         return "C'est moins!";
//     } else if (randomNumber === playerNumber) {
//         return "Bravo! Vous avez trouvé en " + attempts.length + "essais!";
//     }
// }


// // console.log(compareNumbers(generateRandomNumber, playerNumber()));


// //Jeu 

// let playerInput = null;
// let message = "";


// do {
//     playerInput = playerNumber();
//     if (playerInput !== null) {
//         message = compareNumbers(generateRandomNumber, playerInput);
//         console.log(message);
//     }
//     if (attempts.length >= maxAttempts) {
//         console.log("Perdu! Vous avez atteint le nombre maximum d'essais.");
//         break;
//     }
// } while (playerInput !== generateRandomNumber);

// if (playerInput === generateRandomNumber) {
//     console.log("Bravo! Vous avez trouvé en " + attempts.length + " essais!");
// } else {
//     console.log("Le nombre à trouver était : " + generateRandomNumber);
// }

// console.log("Essais du joueur :", attempts);

