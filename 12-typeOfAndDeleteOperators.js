// Typeof and Delete

const myNumber = 10;
const myString = 'uma frase';
const myObject = {
    name: 'Diego'
}

const myArray = [10, 20, 30, 40];

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myObject);
console.log(typeof myArray);

// DELETE:

const myObject2 = {
    name: 'diego',
    age: 42
}

delete myObject2.age;
console.log(myObject2);

