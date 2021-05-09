const rangeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onChangeInput = (event) => {
  const textSize = event.currentTarget.value;
  text.style.fontSize = `${textSize}px`;
};

rangeControl.addEventListener("input", onChangeInput);
