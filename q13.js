function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      var rowPattern = "";
  
      for (let j = 0; j < rows; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === rows - 1) {
          rowPattern += "1 ";
        } else {
          rowPattern += "0 ";
        }
      }
  
      console.log(rowPattern);
    }
  }
  
  // Call the function with the number of rows you want
  displayPattern(5);
  
