
function match() {
    let text = "Visit  W3Schools   W3Schools";
    let allOccurrences = text.match(/w3schools/ig);  //greedy search for all occurrences of "W3Schools", case insensitive
    let firstOccurence = text.match(/w3schools/i);  //search for first occurrence of "W3Schools", case insensitive
    console.log(allOccurrences); // Outputs: 6
}

function search() {
    let text = "Give 100%!";
    const result = text.match(/1|2|3|4|5|0/g); //search for any digit between 1 and 5
    const result1 = text.match(/\d/g); //search for any digit
    const result2 = text.match(/d/g); //search for the letter 'd'

    console.log(result1); // Outputs: 4
}

//replace all whitespace characters with a single space
function replace() {
    let text1 = "Visit Microsoft    Microsoft !";
    let result = text1.replace(/Microsoft/gi, "W3Schools");
    console.log(result); // Outputs: Visit W3Schools!
}
search();