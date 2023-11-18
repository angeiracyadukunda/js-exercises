function countWords(sentence) {
    // Use the split method to split the sentence into an array of words and then get the length
    return sentence.split(/\s+/).length;
}

// Example usage:
const testSentence = "This is a sample sentence.";

console.log(`Number of words in the sentence:`, countWords(testSentence)); // Output: 5
