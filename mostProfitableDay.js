
function mostProfitableDay(products){

 	var profit = [0,0,0,0,0,0,0];
  	var highest = 0 ;

  	for(var i = 0 ; i < products.length ; i++){
   		switch(products[i].day){
          	case 'Monday':
            	profit[0] = profit[0] + products[i].sales;
            	break;

            case 'Tuesday':
            	profit[1] = profit[1] + products[i].sales;
            	break;

            case 'Wednesday':
            	profit[2] = profit[2] + products[i].sales;
            	break;

            case 'Thursday':
            	profit[3] = profit[3] + products[i].sales;
            	break;

            case 'Friday':
            	profit[4] = profit[4] + products[i].sales;
            	break;

            case 'Saturday':
            	profit[5] = profit[5] + products[i].sales;
            	break;

            case 'Sunday':
            	profit[6] = profit[6] + products[i].sales;
            	break;

          	default:
            	break;
        }

  	}

  	for(var i = 0; i < profit.length ; i++){
      if(highest < profit[i]){ highest = profit[i];}
    }

  	switch(highest){
      case profit[0]:
        return 'Monday';

      case profit[1]:
      return 'Tuesday';

      case profit[2]:
      return 'Wednesday';

      case profit[3]:
      return 'Thursday';

      case profit[4]:
      return 'Friday';

      case profit[5]:
      return 'Saturday';

      case profit[6]:
      return 'Sunday';

      default:
        return '';
    }
}
