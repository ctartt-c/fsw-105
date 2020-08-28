var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];


function arrayStyle() {
    // Exercise 1.
    let removeVegetables = vegetables.pop();
    console.log(removeVegetables);
    // console.log(vegetables)

    //Exercise 2.
    let removeFruit = fruit.shift();
    console.log(removeFruit);
    //console.log(fruit)

    //Exercise 3.
    let findIndex = fruit.indexOf('orange');
    console.log(findIndex);

    //Exercise 4.
    let addIndex = fruit.push(1);
    console.log(addIndex);
    // console.log(fruit)

    //Exercise 5.
    let vegetableLength = vegetables.length;
    console.log(vegetableLength);

     //Exercise 6. 
    let addToVegetableArr = vegetables.push(vegetableLength);
    console.log(addToVegetableArr);
   //  console.log(vegetables)

    //Exercise 7.
    let joinArr = fruit.concat(vegetables);
    console.log(joinArr);
    
    //Exercise 8.
    let removeEl = joinArr.splice(4, 2);
    console.log(removeEl);
    console.log(joinArr);

    //Exercise 9.
    let reverse = joinArr.reverse();
    console.log(reverse);
    
    //Exercise 10.
    let toStr = joinArr.toString();
    console.log(toStr)
}

arrayStyle();