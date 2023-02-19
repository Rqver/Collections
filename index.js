// Import external libraries
const prompt = require('prompt-sync')();

// Object
let multiDimensionalObject = {
    firstNames: {
        male: ["John", "Liam", "Noah"], female: ["Emma", "Ava", "Olivia"]
    }, lastNames: ["Smith", "Johnson", "Jackson"]
}

// Access various parts of the object
console.log(multiDimensionalObject.firstNames.male[0])

// Array of strings
let stringArray = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'ZY0', '123', '456', '789']

// Print every item of a collection on different lines
stringArray.forEach(string => {
    console.log(string)
})

// Print the first item in the collection
console.log(stringArray[0])

// Print the last item in the collection
console.log(stringArray.slice(-1)[0])

// Print the type of data in the collection
console.log(typeof (stringArray[0]))

// Print half of the array
console.log(stringArray.slice(0, Math.floor(stringArray.length / 2)))

// Print a certain item of the array based on input from the user
let index = prompt('What half of the array do you want to view?')
switch (index) {
    case '1':
        console.log(stringArray.slice(0, Math.floor(stringArray.length / 2)))
        break;
    case '2':
        console.log(stringArray.slice(Math.floor(stringArray.length / 2), stringArray.length))
        break;
    default:
        console.log("Invalid input, enter either 1 or 2.")
}
