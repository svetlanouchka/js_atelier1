// script.js

// Générer un nombre aléatoire à deviner
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Nombre à deviner (DEBUG) :", randomNumber);

// Initialiser les variables
let attempts = [];
const maxAttempts = 10;

// Sélectionner les éléments DOM
const playerInput = document.getElementById("playerInput");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");
const attemptList = document.getElementById("attemptList");
const restartButton = document.getElementById("restartButton");

// Fonction de comparaison
const compareNumbers = (playerNumber) => {
    if (playerNumber < randomNumber) {
        return "C'est plus!";
    } else if (playerNumber > randomNumber) {
        return "C'est moins!";
    } else {
        return `Bravo! Vous avez trouvé le nombre ${randomNumber} en ${attempts.length} essais.`;
    }
};

// Gérer la soumission
submitButton.addEventListener("click", () => {
    const playerNumber = parseInt(playerInput.value);

    // Vérifier si l'entrée est valide
    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) {
        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }

    // Ajouter la tentative
    attempts.push(playerNumber);
    attemptList.textContent = attempts.join(", ");

    // Comparer les nombres
    const feedback = compareNumbers(playerNumber);
    message.textContent = feedback;

    // Vérifier si le joueur a gagné ou perdu
    if (playerNumber === randomNumber || attempts.length >= maxAttempts) {
        submitButton.disabled = true;
        playerInput.disabled = true;
        restartButton.style.display = "inline-block";

        if (attempts.length >= maxAttempts && playerNumber !== randomNumber) {
            message.textContent = `Perdu! Le nombre à deviner était ${randomNumber}.`;
        }
    }

    playerInput.value = ""; // Réinitialiser le champ de saisie
});

// Redémarrer le jeu
restartButton.addEventListener("click", () => {
    window.location.reload(); // Recharger la page
});