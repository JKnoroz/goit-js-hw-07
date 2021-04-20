const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingrList = document.querySelector("#ingredients");

const ingrListElements = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  return listElement;
});

ingrList.append(...ingrListElements);
