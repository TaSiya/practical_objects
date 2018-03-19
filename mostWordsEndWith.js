
function mostWordsEndWith(sentence, word){

  	var sentence_list = sentence.split(' ');
  	var wordMap = {};

  	for (var i = 0 ; i < sentence_list.length ; i++){
      	var currentWord = sentence_list[i].substring(sentence_list[i].length-1);
     	if (wordMap[currentWord] === undefined){
        wordMap[currentWord] = 0;
    	}

      	wordMap[currentWord] = wordMap[currentWord] +1 ;
    }

  	var highest = 0;
  	var endsMax = '';
  	for(var word in wordMap){
     	if(highest < wordMap[word]){
          	highest =  wordMap[word]
         	endsMax = word;
        }
    }
  	return endsMax;
}
