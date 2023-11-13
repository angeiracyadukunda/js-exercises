// /*. Create a function that displays a pattern like this:
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *  */
// // function rectangleFunction(){
// console.log("* * * *")
// console.log("* * * *" )
// console.log("* * * *" )
// console.log("* * * *" )


// rectangleFunction();


function pattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = '';
        for (let j = 0; j < columns; j++) {
            rowPattern += '* ';
        }
        console.log(rowPattern);
    }
}
pattern(4, 5);