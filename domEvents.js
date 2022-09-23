const buttons = document.querySelectorAll("#book-list li .delete");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
