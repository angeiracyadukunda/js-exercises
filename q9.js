/*Create a function that combines two arrays into one single array. 
    Use the following arrays:
    array One = [a,b,c,d]
    array Two = [e,f,g]*/


    function combineArray(arr1 ,arr2){
        var combineArray=arr1.concat(arr2);
        return combineArray;
    }
    var arr1=["a","b","c","d"];
    var arr2=["e","f","g"];
    var answer=combineArray(arr1,arr2);
    console.log(answer);
