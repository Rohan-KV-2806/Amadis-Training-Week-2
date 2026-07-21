

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(" for loop ");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\n while loop ");
let i = 0;
while (i < 5) {
    console.log(numbers[i]);
    i++;
}

console.log("\n do...while loop ");
let j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j > 100);

console.log("\n for...of loop ");
for (const fruit of fruits) {
    console.log(fruit);
}

console.log("\n for...in loop ");
for (const index in fruits) {
    console.log(index, fruits[index]);
}

console.log("\n Array.forEach() ");
fruits.forEach(function (fruit, index) {
    console.log(index, fruit);
});

console.log("\n break ");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
    }
    console.log(k);
} 

console.log("\n continue ");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }
    console.log(k);
}


console.log("\n Nested Loops ");

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row}, Column ${col}`);
    }
}