const readlineSync = require('readline-sync')
const introToGame = readlineSync.keyInYN('Hello Welcome to the Escape Room! Are you ready to play? ');
const userChoice = readlineSync.question(`You have 3 options to escape the room \n 1. Put your hand in the hole \n 2. Find the key \n 3. Open the door \n What would you like to do? Select a number to move on with the game! `);

let isAlive = true


if (userChoice == 1) {
    console.log(`You have decided to put your hand in the hole before finding the key. You have died!`);
    console.log(`GAME OVER!`)
    isAlive == false

} else if (userChoice == 2) {
    console.log(`You are close to finding the key, try again!`);
    isAlive == true

    const secondUserChoice = readlineSync.question(`Select the number 2 again to try to find the key once again! `);
    if (secondUserChoice == 2) {
        console.log(`Congratulations you have found the key!! Now use the key to open the door to escape the room.`);
        const thirdUserChoice = readlineSync.question(` 1. Put your hand in the hole \n 2. Find the key \n 3. Open the door \n What would you like to do? Select a number to move on with the game! `);

        if (thirdUserChoice == 3) {
            console.log(`You have opended the door successfully with the key, You have escaped the room CONGRATULATION!!`);
            isAlive == true
        } else if (thirdUserChoice == 1) {
            console.log(`Wrong choice!!! you died`);
            console.log(`GAME OVER!!`)
        }
    }

} else if  (userChoice == 3) {
    console.log(`You havent found the key yet try looking for the key first!`);
    isAlive == true

    const secondUserChoice = readlineSync.question(` 1. Put your hand in the hole \n 2. Find the key \n 3. Open the door \n What would you like to do? Select a number to move on with the game! `);
    if (secondUserChoice == 2) {
        console.log(`Congratulations you have found the key!! Now use the key to open the door to escape the room.`);
        const thirdUserChoice = readlineSync.question(` 1. Put your hand in the hole \n 2. Find the key \n 3. Open the door \n What would you like to do? Select a number to move on with the game! `);

        if (thirdUserChoice == 3) {
            console.log(`You have opended the door successfully with the key, You have escaped the room CONGRATULATION!!`);
            isAlive == true
        } else if (thirdUserChoice == 1) {
            console.log(`Wrong choice!!! you died`);
            console.log(`GAME OVER!!`)
        }
    }
}