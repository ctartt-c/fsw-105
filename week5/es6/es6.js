// Exercise 1. 
let name = 'John'
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        name;
        if (pets[i] === 'cat') {
            name = 'fluffy'
        } else {
            name = 'spot'
        }
        console.log('pet name: ', name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log('man name: ', name)
    return petObjects 
}
runForLoop(['cat', 'dog'])


// Exercise 2. 
const carrots = ['bright orange', 'ripe', 'rotten']

function mapVegetables() {
    return array.map(carrot => {
        return { type: 'carrot', name: carrot }
    }) 
}


// Exercise 3.
const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
];

function filterForFriendly(arr){
    return arr.filter( person => {
        return person.friendly
    })
};


// Exercise 4. 
const doMathSum = (a, b) => a + b   

const produceProduct = (a, b) => a * b


// Exercise 5. 
const printString = (firstName, lastName, age) => {
    // Exercise 6.
    return `Hi ${firstName} ${lastName} how does it feels to be ${age}?`
}
console.log(printString('Jane', 'Doe', 100))


//  Exercise 7.
const animals = [
    {
        type: 'dog',
        name: 'theodore'
    },
    {
        type: 'cat',
        name: 'whiskers'
    },
    {
        type: 'pig',
        name: 'piglette'
    },
    {
        type: 'dog',
        name: 'sparky'
    }
];
const filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);
console.log(filterForDogs(animals))


// Exercise 8.
const message = (location, name) => {
    return `Hi ${name}! \n \n Welcome to ${location}. \n \n I hope you enjoy your stay. Please ask the president of ${location} if you need a \n nything.`
} 
console.log(message('Hawaii', 'Janice'))