const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const text = document.createElement("p");
text.classList.add("text");
text.textContent = "Hey I'm red!";

container.appendChild(text);

let elements = document.getElementsByClassName('text');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'red';
}

const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a blue h3!";

container.appendChild(header);

elements = document.getElementsByClassName('header');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue';
}

const box = document.createElement("div");
box.classList.add("box");

container.appendChild(box);

elements = document.getElementsByClassName('box');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.border = 'black';
  elements[i].style.background = 'pink';
}

const bin = document.querySelector(".box");

const contains = document.createElement("div");
contains.classList.add("contains");
contains.textContent = "I'm in a div!";

bin.appendChild(contains);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "ME TOO!";

bin.appendChild(paragraph);