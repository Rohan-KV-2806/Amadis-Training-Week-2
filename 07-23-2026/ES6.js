const add = (a, b) => {
    return a + b;
};

const sub = (x, y) => x + y;
console.log(add(3,3));
console.log(sub(5,3));

let name = "Rohan";

console.log(`Hello ${name}`);   

function greet(name = "Guest") {
    console.log("Hello", name);
}

greet();
greet("Rohan");

let a = [1, 2, 3, 4, 5]
let b = [4, 3, 5, 6, 7]
let c = [...a,...b]
console.log(c);

const user = {
    name: "Rohan",
    age: 33
};

const updated = {
    ...user,
    age: 21
};

console.log(updated);

let g = [3, 4, 5];
let h = g;
console.log(h);

