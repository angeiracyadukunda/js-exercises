

function accessNestedObject(obj, keys) {
    let result = obj;

    for (let key of keys) {
        if (result[key]) {
            result = result[key];
        } else {
            return "Key not found in the nested object";
        }
    }

    return result;
}

// Example usage:
const nestedObject = { a: { b: { c: 'nested value' } } };
const nestedKeys = ['a', 'b', 'c'];
console.log("Value from the nested object:", accessNestedObject(nestedObject, nestedKeys));
