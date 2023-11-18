// 8. Create a function that recieves an array of numbers and return the average of the numbers


function arrayAddiction(array) {
    var sum = 0;
    var average;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        average = sum / array.length;
    }
    return average;
}                         
var array = [1, 2, 3, 4, 5, 6, 7];
let average = arrayAddiction(array);
console.log("The average is : "+average);
console.log(array[0]);

