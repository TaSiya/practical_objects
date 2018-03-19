function mostProfitableDepartment(products){

  	var currentHigh = 0;
  	var highest = [0, 0, 0, 0, 0, 0];

  	for(var i = 0 ; i < products.length; i++){
     	switch (products[i].department){

          case 'hardware':
            highest[0] = highest[0] + products[i].sales ;
           	break;

          case 'outdoor':
            highest[1] = highest[1] + products[i].sales;
            break;

          case 'carpentry':
            highest[2] = highest[2] + products[i].sales;
            break;

          case 'electronics':
            highest[3] = highest[3] + products[i].sales;
            break;
        }

    }

    for ( var i = 0 ; i < highest.length ; i++){
		if(currentHigh < highest[i]){ currentHigh = highest[i];}
    }

  	if(currentHigh == highest[0]){ return 'hardware';}
  	else if(currentHigh == highest[1]){ return 'outdoor';}
  	else if(currentHigh == highest[2]){ return 'carpentry';}
 	else if(currentHigh == highest[3]){ return 'electronics';}
}
