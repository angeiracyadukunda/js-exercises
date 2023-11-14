function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      var rowPattern = "";
  
      for (let j = 0; j < rows; j++) {
        if (j < rows - i) {
          rowPattern += "1 ";
        } else {
          rowPattern += "0 ";
        }
      }
  
      console.log(rowPattern);
    }
  }
  
  // Call the function with the number of rows you want
  displayPattern(4);
  