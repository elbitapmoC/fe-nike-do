const list = document.querySelector("#book-list ul");
const userInput = document.querySelector("#add-book input");
const form = document.querySelector("#add-book");
// Deletes books
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Add books
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Don't want the form to be submitted or page to be refreshed.
  if (userInput.value === "") {
    alert("It's empty... I could really use something to do");
  } else {
    let value = userInput.value; //input

    // create elements
    const li = document.createElement("li");
    const book = document.createElement("span");
    const deleteButton = document.createElement("span");

    // Add classes
    book.classList.add("name");
    book.innerText = value;
    deleteButton.classList.add("delete");
    deleteButton.innerText = "delete";

    // clear input
    userInput.value = "";

    // Add elements
    li.append(book, deleteButton);
    list.append(li);

    // getAttribute
    console.log("getAttribute: ", deleteButton.getAttribute("class"));
    // setAttribute
    deleteButton.setAttribute(
      "title",
      "remove this from my bookshelf...immediately!"
    );
    console.log(
      "setAttribute above(title): ",
      deleteButton.getAttribute("title")
    );

    // hasAttribute
    console.log("hasAttribute: ", deleteButton.hasAttribute("title"));
    // removeAttribute
    deleteButton.removeAttribute("title");
    console.log("removeAttribute: title");
  }
});
