
function shoppingList(products){
  	var total = 0 ;
  	for(var i = 0 ; i < products.length ; i++){
     	 total = total + products[i].price
    }
  	return total;
}
