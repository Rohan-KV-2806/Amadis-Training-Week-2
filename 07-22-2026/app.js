

const title = document.getElementById("title");

console.log(title);
console.log(title.textContent);

const paragraphs = document.getElementsByClassName("info");

console.log(paragraphs);

console.log(paragraphs[0].textContent);
console.log(paragraphs[1].textContent);



const headings = document.getElementsByTagName("h2");

for (const heading of headings) {
    console.log(heading.textContent);
}


const input = document.getElementsByName("username");

console.log(input[0]);
const firstParagraph = document.querySelector(".info");

console.log(firstParagraph.textContent);


const allParagraphs = document.querySelectorAll(".info");
allParagraphs.forEach((item) => {
    console.log(item.textContent);
});


const button = document.getElementById("saveBtn");

const parentCard = button.closest(".card");

console.log("\nclosest()");
console.log(parentCard);


console.log("\nmatches()");

console.log(button.matches("#saveBtn")); 
console.log(button.matches(".card"));    