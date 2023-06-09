const div = document.getElementById("div");

var inputform = document.createElement("input");
inputform.type = "text";
inputform.classList.add("input-form");
div.appendChild(inputform);

var button = document.createElement("button");
button.innerHTML = "Print Text";
button.classList.add("button");
div.appendChild(button);

var textElement = document.createElement("p");
textElement.classList.add("text");
div.appendChild(textElement);

button.addEventListener("click", () => {
  setTimeout(() => {
    textElement.innerHTML = inputform.value;
    textElement.style.display = "block";
  }, 900);
});



