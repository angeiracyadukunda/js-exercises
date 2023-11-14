function sortAndDisplay(numbers) {
    // Sort the array in ascending order
    var sortedArray = numbers.sort((a, b) => a - b);
  
    // Display the last 3 numbers
    var lastThree = sortedArray.slice(-3);
    console.log("Last 3 numbers:", lastThree);
  
    // Display the first 3 numbers
    var firstThree = sortedArray.slice(0, 3);
    console.log("First 3 numbers:", firstThree);
  
    // Modify the original array to display the last 3 numbers and the first 3 numbers
    var modifiedArray = lastThree.concat(sortedArray, firstThree);
    console.log("Modified Array:", modifiedArray);
  
    // Display the first 3 numbers from the sorted array
    console.log("First 3 numbers from sorted array:", sortedArray.slice(0, 3));
  }
  
  var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
  sortAndDisplay(someNumbers);
  