

function reduce() {
    const numbers = [1,11, 2, 3, 4, 5];
    const sum  = numbers.reduce(function(accumulator, currentValue) {
        console.log(accumulator, currentValue);
        return accumulator + currentValue;
    }   , 0);
    console.log(numbers);
}
reduce();

function sorting() {
    const numbers = [1, 2, 3, 11, 4, 5];
    numbers.sort();//treats elements as strings
    numbers.sort(function(a, b) {//comparator function
        // console.log(a, b);
        return b - a;
    });
    console.log(numbers);
}
// sorting();


function example1() {
    const numbers = [1, 2, 3, 4, 5];
    //add element
    numbers.push(6);
    numbers.push('Pariwesh');
    console.log(numbers); // [1, 2, 3, 4, 5, 6, 'Pariwesh']
    //remove last element
    console.log(numbers[6]); //7 means 8th element
    numbers.pop();
    numbers.pop();
    console.log(numbers);

    //access element
    console.log(numbers[7]); //7 means 8th element
    //sorting
    numbers.sort();
    console.log(numbers);
}