(function() {
    const num = 5;
    console.log("Factorial of " + num + " is: " + factorial(num));
})();

function findLargestElement(arr) {
    if (arr.length === 0) return "Array is empty";
    return Math.max(...arr);
}

const findLargestArrow = (arr) => {
    if (arr.length === 0) return "Array is empty";
    return Math.max(...arr);
};

function maxFunctions(){
    const arrayInput = document.getElementById("arrayInput").value;
    const array = arrayInput.split(',').map(Number);
    const largestElement = findLargestElement(array);
    const largestArrowResult = findLargestArrow(array);
    document.getElementById("maximum").innerHTML = "Largest element in array "+ array +" : " +largestElement;
}

const factorialExpression = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers.";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function factorialFunctions() {
    const num = document.getElementById("factorialInput").value;
    const factorialResult = factorial(num);
    const factorialExprResult = factorialExpression(num);
    document.getElementById("factorial").innerHTML = "Factorial of "+num+ " :"+ factorialExprResult;
    
}

