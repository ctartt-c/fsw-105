var shopper = {
      groceryItem:"Item",
      groceryList: true,
      item       : 5,
      itemList   :["eggs","bacon","groundBeef","fruit","potatoes"],
      cartItems  : function() {
          return this.groceryItem + this.itemList + "" + "items:" + this.item;
      }

};
console.log(shopper.cartItems());