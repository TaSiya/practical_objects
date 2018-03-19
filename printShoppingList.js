function printShoppingList(products){

  	console.log('Shopping list:');
  	for(var i = 0 ; i < products.length ; i++){
     	console.log('* '+products[i].itemName +' @ R'+ (products[i].price).toFixed(2));
    }
}
