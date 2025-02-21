// Sum of rumbers
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((accumulator, nextnumber) => accumulator + nextnumber);
console.log("Sum of numbers : ", sum);

// Function to filter even numbers
function evenNumbers(arr) {
    return arr.filter(numbers => numbers % 2 === 0);
}
console.log("Even numbers:", evenNumbers(numbers));
 
// Create an object
const data = {
    subject: "Java ",
    name: "Chandra Shekar ",
    year: 2025
};
console.log(data);

data.getMethod = function () {
    return `${this.subject} ${this.name} ${this.year}.`;
};
console.log(data.getMethod());