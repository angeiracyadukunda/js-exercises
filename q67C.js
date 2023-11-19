

function searchForKey(obj, key) {
    return key in obj ? obj[key] : "Key not found";
}

// Example usage:
const searchKey = 'age';
console.log(`\nValue for key ${searchKey}:`, searchForKey(sampleObject, searchKey));
