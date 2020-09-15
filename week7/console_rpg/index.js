let readlineSync = require('readline-sync');
 

let userName = readlineSync.question('What is your name? ');
console.log(`Welcome ${userName} to my game \n Lets elxplore this fun world!`);

const instructions = (`instructions for the game is as follows \n 1.  walk  \n 2.  view stats \n 3. use to quit`);
let choice = ["walk", "stats", "quit"]
console.log(instructions);

readlineSync.keyInPause(`game start:`);

const monsters = ["Killer Monkey", "Lion", "  Wolf", "Killer Bees"];
const lootItems = ["Chest full of Money", "Tresure Chest", "Diamonds", "Extra life"];
let playerHealth = 50;
const droppedItem = lootItems[Math.floor(Math.random() * lootItems.length)];

 const theGame = function game(){
    const prize = [ ];
    let name = userName
    let monstersHealth = 50;
    const monster = monsters[Math.floor(Math.random() * monsters.length)]
    const attack = Math.floor(Math.random() * 6 + 8);
    const monsterAttack = Math.floor(Math.random() * 6 + 8);

    const task = readlineSync.keyInSelect(choice, `What is your choice?`)
    
    if(choice[task] == "quit"){
        return playerHealth = 0;
    }else if(choice[task] == "stats"){
        console.log(` HP = ${playerHealth} \n Items = ${droppedItem}`);
    }else if(choice[task] ==  "walk"){
        let key = Math.random();
        if(key <= .25){
            console.log(`Walking through the land.`);
        }else if(key >= .25){
            console.log(`${monster} has attacked!`);
            while(monstersHealth > 0 && playerHealth > 0){
                const user = readlineSync.question(`"a" to attack \n "r" to run \n What will happen ${name}?`)

                switch(user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5){
                            playerHealth -= monsterAttack
                            console.log(`${monster} hit you for ${monsterAttack} stoping your escape!`)

                            switch(user){
                                case 'a':
                                    monstersHealth -= attack
                                    console.log (`you hit ${monster} for ${attack}`)

                                    playerHealth -= monsterAttack
                                    console.log(`${monster} hit you for ${monsterAttack}`)
                                    
                                    if(monstersHealth <= 0){
                                        console.log(`You have killed the ${monster}!`)
                                        let loot = Math.random()
                                        if(loot <= .3){
                                            prize.push(lootItems)
                                        }
                                    }else if(playerHealth <= 0){
                                        console.log(`${monster} has killed you!`)
                                        return theGame
                                    }
                            }                            
                        } else if( run > .5){
                            console.log(`you got away safely!`)
                            return theGame                            
                        }
                    case 'a':
                        case 'a':
                            monstersHealth -= attack
                            console.log (`you hit ${monster} for ${attack}`)

                            playerHealth -= monsterAttack
                            console.log(`${monster} hit you for ${monsterAttack}`)
                            
                            if(monstersHealth <= 0){
                                console.log(`You have killed the ${monster}! and healed your self to full`)
                                let loot = Math.random()
                                if(loot <= .3){
                                    prize.push(lootItems)
                                }
                            }else if(playerHealth <= 0){
                                console.log(`${monster} has killed you!`)
                            }
                }
            }
        }
    }
}

while (playerHealth > 0){
    userLife = function(){
        userAlive = true;
        playerHealth = 50;
    }
    userLife()
    theGame()
}