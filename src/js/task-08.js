const input = document.querySelector("input");
const controls = document.querySelectorAll("#controls button");
const create = controls[0];
const clear = controls[1];
// document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

console.log(input);
console.log(controls);
console.log(create);
console.log(clear);
console.log(boxes);

const box = document.createElement("div");
box.style.width = "30px";
box.style.height = "30px";
box.style.backgroundColor = "tomato";

boxes.append(box);
