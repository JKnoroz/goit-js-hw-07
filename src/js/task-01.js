const navCat = document.querySelectorAll(".item");
// console.log(navCat);
const navCatLength = navCat.length;
console.log(`В списке ${navCatLength} категории`);

navCat.forEach((item) =>
  console.log(
    "Категория:",
    item.firstElementChild.textContent,
    ", Количество элементов:",
    item.lastElementChild.childElementCount
  )
);
