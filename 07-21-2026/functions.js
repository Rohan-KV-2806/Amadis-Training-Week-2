console.log(" Function Declaration ");
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

console.log("\n Function Expression ");
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3));

console.log("\n Arrow Function ");
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

console.log("\n Default Parameters ");
function power(base, exp = 2) {
    return base ** exp;
}
console.log(power(3));
console.log(power(3, 3));

console.log("\n Map Function ");
let  = [1, 2, 3, 4];
const doubled = singled.map((n) => n * 2);
console.log(doubled);

console.log("\n Recursion ");
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
