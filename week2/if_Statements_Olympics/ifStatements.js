/*var chris =  {
  weight:189,
  age:20,
  height:"6'9",
  hairColor:"red"
}
var age = chris.age
 if (age === 20){
chris.weight = 120
chris.height = "7'9"
chris.hairColor = "green"
 }  
 //if (age === 20){
   
 //}
  console.log (chris)
  
  */
//Preliminaries
/*Write an if statement that prints "is greater than" if 5 is greater than 3
Write an if statement that prints "is the length" if the length of "cat" is 3
Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.*/


if (5 > 3){
  console.log("is greater than")
}

if("cat".length === 3){
  console.log("is the length")
}

if ("cat"==="dog"){
  console.log("is the same")
}else{
  console.log("not the same")
}

//you helped me with this statement so i don't desrve full credit!


//Bronze Medal
var person = {
  name:"Bobby",
  age : 12

}
 //Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

 if (person.age >= 18){
    
  console.log(person.name + " Is aloud to go to the movie")
 }

 else 
 {
   console.log(person.name + " Is not aloud to go to movies")
 }

 //silver

 if ("1" === 1) {
  console.log ("strict")
} else if ("1" == 1) {
  console.log ("abstract")
} else {
  console.log ("not equal at all")
}
if ((1 <= 2) && (2 === 4)) {
console.log ("yes")
}