
function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      var rowPattern = "";
  
      for (let j = 0; j < rows - i; j++) {
        rowPattern += "1 ";
      }
  
      console.log(rowPattern);
    }
  }
  
  // Call the function with the number of rows you want
  displayPattern(4);
  
  