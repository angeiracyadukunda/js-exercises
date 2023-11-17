                      
    // square number
// function squareNumber(number){
//     var square= number*number;
//     return square;
// }
// var number=5;
// console.log(squareNumber(number));

/*Write a function that calculates the square of a number.*/
function squareNumber(number){
    if(number === null || number === undefined || !number){
      return 0;
    }
    else{
      // var square=Math.pow(number,3);
          var square=number**3;
    return square;
    }
    
  }
console.log(squareNumber(8));