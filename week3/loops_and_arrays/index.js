// Exercise 1.
var officeItems = ['stapler', 'monitor', 'computer', 'desk', 'lamp', 'computer', 'lamp', 'stapler', 'computer', 'computer'];

var count = 0;
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] == 'computer') {
        console.log(count++);
    }
}

// Exercise 2.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name:'Mike',
        age: 12,
        gender: 'him' //male
    },
    {
        name: 'Madeline',
        age: 80,
        gender: 'her' //female
    },
    {
        name: 'Cheryl',
        age: 22,
        gender: 'her' //female
    },
    {
        name: 'Sam',
        age: 30,
        gender: 'him' //male
    },
    {
        name: 'Suzy',
        age: 4,
        gender: 'her' //female
    }
];
// Exercise 3 - 4
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
         console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max Fury Road, let ${peopleWhoWantToSeeMadMaxFuryRoad[i].gender} in.`);
     } else {
         console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road, don't let ${peopleWhoWantToSeeMadMaxFuryRoad[i].gender} in.`);
     }
}

//Exercise 5.
for (var i = 0; i < 101; i++){
    if (i % 2 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}