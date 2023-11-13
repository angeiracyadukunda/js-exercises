// . Create a function that receives an array and return the sum of all the element
function sumOfArray(arr){
   var sum=0;
   for(let n=0; n<arr.length ; n++){
    sum += arr[n];
    
   }
   return sum;
}
let arr=[1,2,3,4,5,5,5,6];
let result= sumOfArray(arr);
console.log(result);