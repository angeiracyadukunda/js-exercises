/*Write a function that counts the number of vowels in a string.*/

function countVowels(inputstring){
    var vowels =["a","e","u","I","o"];
    var lowerCase=inputstring.toLowerCase();
    var vowelCount=0;
    for(let i=0; i<lowerCase.length; i++){
        if(vowels.includes(lowerCase[i])){

            vowelCount ++ ;
        } 
    }return vowelCount;

}
 console.log(countVowels("angel"));