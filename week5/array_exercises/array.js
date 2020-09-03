// Exercise 1. filter()
function fiveAndGreaterOnly(arr) {
  const result = arr.filter(function(num) {
      if (num >=  5 ) {
           return num
       }
   })
   return result
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2,]));


// Exercise 2. filter()
function evensOnly(arr) {
   const result = arr.filter(function (num) {
       if (num % 2 == 0) {
           return num
       }
   })
   return result
}
console.log(evensOnly([3, 6, 8, 2,]));


// Exercise 3. filter()
function fiveCharactersOrFewerOnly(arr) {
   const result = arr.filter(function (num) {
       if (num.length <= 5) {
           return num
       }
   })
   return result
}
console.log(fiveCharactersOrFewerOnly(['dog', 'wolf', 'by', 'family', 'eaten', 'camping']));


// Exercise 4. filter()
function peopleWhoBelongToTheIlluminati(arr) {
   const result = arr.filter(function (num) {
       if (num.member == true) {
           return num
       }
   })
   return result
}
console.log(peopleWhoBelongToTheIlluminati([
   {name: 'Angelina Jolie', member: true}, 
   {name: 'Eric Jones', member: false}, 
   {name: 'Paris Hilton', member: true}, 
   {name: 'Kanye West', member: false},
   {name: 'Bob Ziroll', member: true}]));


// Exercise 5. filter()
function ofAge(arr) {
   const result = arr.filter(function (num) {
       if (num.age >= 18) {
           return num
       }
   })
   return result
}
console.log(ofAge([
   { name: 'Angelina Jolie', age: 80 },
   { name: 'Eric Jones', age: 2 },
   { name: 'Paris Hilton', age: 5 },
   { name: 'Kanye West', age: 16 },
   { name: 'Bob Ziroll', age: 100 }]));


// Exercise 1. map()
function doubleNumbers(arr) {
   const result = arr.map(function(num) {
       return num + num
   })
   return result
}
console.log(doubleNumbers([2, 5, 100]));


// Exercise 2. map()
function stringItUp(arr) {
   const result = arr.map(function (str) {
       return str.toString()
   })
   return result
}
console.log(stringItUp([2, 5, 100]));


// Exercise 3. map()
function capitalizeNames(arr) {
   const result = arr.map(function (str) {
       let extract = str.substring(1)
       return str[0].toUpperCase().concat(extract.toLowerCase())
   })
   return result
}
console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']));


// Exercise 4. map()
function namesOnly(arr) {
   const result = arr.map(function (toStr) {
       return toStr.name
   })
   return result
}
console.log(namesOnly([
   {name: 'Angelina Jolie', age: 80}, 
   {name: 'Eric Jones', age: 2}, 
   {name: 'Paris  Hilton', age: 5}, 
   {name: 'Kayne West', age: 16}, 
   {name: 'Bob Ziroll', age: 100}]));


// Exercise 5. map()
function makeStrings(arr) {
   const result = arr.map(function (str) {
       if (str.age >= 18) {
           return `${str.name} can go to the Matrix`
       } else {
           return `${str.name} is under age!!`
       }
   })
   return result
}
console.log(makeStrings([
   { name: 'Angelina Jolie', age: 80 },
   { name: 'Eric Jones', age: 2 },
   { name: 'Paris  Hilton', age: 5 },
   { name: 'Kayne West', age: 16 },
   { name: 'Bob Ziroll', age: 100 }]));


// Exercise 6. map()
function readyToPutInTheDom(arr) {
   const result = arr.map(function (str) {
       return `<h1>${str.name}</h1><h2>${str.age}</h2>`
   })
   return result
}
console.log(readyToPutInTheDom([
   { name: 'Angelina Jolie', age: 80 },
   { name: 'Eric Jones', age: 2 },
   { name: 'Paris  Hilton', age: 5 },
   { name: 'Kayne West', age: 16 },
   { name: 'Bob Ziroll', age: 100 }]));


// Exercise 1. reduce()
function total(arr){
   const result = arr.reduce(function (totalNum, totalTwo) {
       return totalNum = totalNum + totalTwo
   })
   return result
}
console.log(total([1, 2, 3,]));

   
// Exercise 2. reduce()
function stringConcat(arr) {
   const result = arr.reduce(function (final, str) {
       final = final + str.toString()
           return final
       })
   return result
}
console.log(stringConcat([1, 2, 3,]));


//Exercise 3. reduce()
function totalVotes(arr) {
   const result = arr.reduce(function (final, voter) {
       if (voter.voted === true) {
           final++
       }
       return final
   }, 0) 
   return result
}
let voters = [
   { name: 'Bob', age: 30, voted: true},
   { name: 'Jake', age: 32, voted: true },
   { name: 'Kate', age: 25, voted: false },
   { name: 'Sam', age: 20, voted: false },
   { name: 'Phil', age: 21, voted: true },
   { name: 'Ed', age: 55, voted: true },
   { name: 'Tami', age: 54, voted: true },
   { name: 'Mary', age: 31, voted: false },
   { name: 'Becky', age: 43, voted: false },
   { name: 'Joey', age: 41, voted: true },
   { name: 'Jeff', age: 30, voted: true },
   { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters));


// Exercise 4. reduce()
function shoppingSpree(arr) {
   const result = arr.reduce(function (final, wishlisItem){
       final += wishlisItem.price
       return final
}, 0)                                                                             
   return result
}
let wishlist = [
   { title: 'German Shepard', price: 900 },
   { title: '12 carat knecklace', price: 15000 },
   { title: 'versace shoes', price: 1500 },
   { title: 'CBR1000', price: 12000 },
   { title: 'S550 Benz', price: 90000 },
];
console.log(shoppingSpree(wishlist));


// Exercise 5. reduce()
function flatten(arr){
   const result = arr.reduce(function (final, array) {
        final += array.concat('')
           return final
   }, [])
   return result
}
let arrays = [
   ['1', '2', '3'],
   [true],
   [4, 5, 6]
];
console.log(flatten(arrays));


// Exercise 6. reduce()
let secondVoters = [
   { name: 'Bob', age: 30, voted: true },
   { name: 'Jake', age: 32, voted: true },
   { name: 'Kate', age: 25, voted: false },
   { name: 'Sam', age: 20, voted: false },
   { name: 'Phil', age: 21, voted: true },
   { name: 'Ed', age: 55, voted: true },
   { name: 'Tami', age: 54, voted: true },
   { name: 'Mary', age: 31, voted: false },
   { name: 'Becky', age: 43, voted: false },
   { name: 'Joey', age: 41, voted: true },
   { name: 'Jeff', age: 30, voted: true },
   { name: 'Zack', age: 19, voted: false }
];

function voterResult(arr) {
   const result = arr.reduce(function (final, voter){
       if (voter.age >= 18 && voter.age <= 25 && voter.voted == true) {
           final.youngVotes++ 
       }
           if (voter.age >= 18 && voter.age <= 25) {
               final.youth++ 
           }
               if (voter.age >= 26 && voter.age <= 35 && voter.voted == true) {
                   final.midVotes++ 
               }
                    if (voter.age >= 26 && voter.age <= 35) {
                       final.mids++
               }
                       if (voter.age >= 36 && voter.age <= 55 && voter.voted == true) {
                           final.oldVotes++
                       }
                           if (voter.age >= 36 && voter.age <= 55) {
                               final.olds++
                           }
       return final
     
   }, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 }) 
   return result
}
console.log(voterResult(secondVoters));



// Exercise 1. sort()
function leastToGreatest(arr) {
   const result = arr.sort(function (a, b){
   return a - b
   })
   return result
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));


// Exercise 2. sort()
function greatestToLeast(arr) {
   const result = arr.sort(function (a, b) {
       return b - a
   })
   return result
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));


// Exercise 3. sort()
function lengthSort(arr) {
   const result = arr.sort(function (a, b) {
       return a.length - b.length 
   })
   return result
}
console.log(lengthSort(['dog', 'wolf', 'by', 'family', 'eaten']));


// Exercise 4. sort()
function alphabetical(arr) {
   const result = arr.sort()
       return result
}
console.log(alphabetical(['dog', 'wolf', 'by', 'family', 'eaten']));


// Exercise 5. sort()
function byAge(arr) {
   const result = arr.sort(function (a, b) {
        return a.age - b.age
   })
   return result
}
console.log(byAge([
   { name: 'Quiet Samurai', age: 22 },
   { name: 'Arrogant Ambassador', age: 100 },
   { name: 'Misunderstood Observer', age: 2 },
   { name: 'Unlucky Swami', age: 77 } ]));

