// question 18
// function bmiCaliculator(w, h) {
//     return w / (h * h);
//   }
//   console.log(bmiCaliculator(60, 1.3));



  function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    // height = height / 100;
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Determine the BMI classification
    let classification;    
    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }
  
    // Return the BMI and classification
    return {
        bmi: bmi.toFixed(2),
        classification: classification
    };
  }
  // Example: Calculate BMI for a person with weight 70kg and height 175cm
  const result = calculateBMI(70, 1.75);
  console.log(`BMI: ${result.bmi}, Classification: ${result.classification}`);
  