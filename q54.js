

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
const originalSentence = "hello world, this is an example";
const capitalizedResult = capitalizeWords(originalSentence);

console.log("Original Sentence:", originalSentence);
console.log("Capitalized Sentence:", capitalizedResult);
