const form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = input.value.trim();
  let li = document.createElement("li");
  let hasValue = val.length > 0 ? true : false;
  if (hasValue) {
    li.innerText = val;
    input.value = "";
    ul.appendChild(li);
  }
});
