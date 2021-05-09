const refs = {
  input: document.querySelector("input"),
  create: document.querySelector('button[data-action="render"]'),
  clear: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

console.log(refs.input);
console.log(refs.create);
console.log(refs.clear);
console.log(refs.boxes);
