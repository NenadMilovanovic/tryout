function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
square = x => {
    return x * x;
}
function calculate (a, b, operation) {
    return operation(a, b);
}
// Example usage:
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15
console.log(square(4)); // Output: 16

