let books = document.querySelectorAll("#book-list li .name"); //NodeList
// We CAN use array methods on NodeList's

books.forEach((book) => {
  book.innerHTML += " (book title)";
});
const best = "BIBLE - Best Instructions Before Leaving Earth.";
// Store book-list
let booklist = document.querySelector("#book-list");
// Replace entire HTML w/ your own heading.
// booklist.innerHTML = `<h1>${best}<h1>`;
// Appnd to booklist's HTML a paragraph.
booklist.innerHTML += `<aside><strong>${best}</strong></aside>`;

// Source: https://www.w3schools.com/jsref/prop_node_nodetype.asp
// Node Type
// console.log(`node TYPE: ${booklist.nodeType}`);
// Node Name
// console.log(`node NAME: ${booklist.nodeName}`);
// Has child nodes?
// console.log(`Node type: ${booklist.hasChildNodes()}`);
// Lets make a clone
const clonedList = booklist.cloneNode(true);
// console.log(clonedList);
// What's the parent node?
let banner = document.getElementById("page-banner");
// console.log("node PARENT: ", banner.parentNode);
// console.log("node PARENT: ", banner.parentElement.parentElement);

// Have some children?
// console.log("child Element count: ", booklist.childElementCount); // 3
// console.log("node CHILD: ", booklist.childNodes); // Returns even line breaks.
// console.log("children: ", booklist.children); //

// Siblings
console.log("next sibling element: ", booklist.nextElementSibling);
console.log("next sibling: ", booklist.nextSibling);

console.log("previous sibling: ", booklist.previousSibling);
console.log("previous sibling element: ", booklist.previousElementSibling);
booklist.previousElementSibling.querySelector("p").innerText =
  "Books for Success";
