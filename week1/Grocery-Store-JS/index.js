/*var shopper = {
      groceryItem:"Item",
      groceryList: true,
      item       : 5,
      itemList   :["eggs","bacon","groundBeef","fruit","potatoes"],
      cartItems  : function() {
          return this.groceryItem + this.itemList + "" + "items:" + this.item;
      }

};
console.log(shopper.cartItems());*/

var array = [{title: "red", author: "Jogn Smith"},{title: "blue", author: "Jogn Smith"}]
for (var i = 0; i < array.length; i++){
    
    console.log("array.length",array.length)
    console.log("array[i]",array[i]) // <= 
    console.log("i",i)
   if (array[i].title === "red"){
       console.log("This is the " + array[i].title+" book!")
   } else{
       console.log("this is the " + array[i].title+" book!")
   }
}