// 6. Create a function that recieves an array and returns the greatest value inside that array

function greatArrayFunction(arr){
if (!arr || arr.length===0){
    return null;
}
let maxValue=arr[0];
for(i=1; i<arr.length; i++){

    if(arr[i]>maxValue){
        maxValue = arr[i]; 
    }
    return maxValue;
}
}
const myArray=[1,3,4,5,6];
const result=greatArrayFunction(myArray);
console.log("the greatest value is :", result);