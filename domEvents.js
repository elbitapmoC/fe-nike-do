const list = document.querySelector("#book-list ul");

// Deletes books
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
