function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      var rowPattern = "";
  
      for (let j = 0; j < rows; j++) {
        if (j === rows - i - 1) {
          rowPattern += "1 ";  
        } else {
          rowPattern += "  ";
        }
      }
  
      console.log(rowPattern);
    }
  }
  // Call the function with the number of rows you want
  displayPattern(4);
  