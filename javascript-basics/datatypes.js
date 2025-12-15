let a = 1; //number
a = 'hello'; 
// a = true;
console.log(typeof a); // number

//functions
function add(x, y) {
    return x + y;
}

console.log(add(2, 3)); // 5
console.log(add(4, 'bar')); // 'foobar'

//objects
const person = {
    name: 'Alice',
    age: 30,
    isEmployed: true
};
person.age = 31; // valid
console.log(person.name); // 'Alice'
person.salary = 50000; // valid
console.log(person); // 50000

// person = 1; //error
//loops
const numbers = [1, 2, 3, 4, 5]; //array of numbers
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}