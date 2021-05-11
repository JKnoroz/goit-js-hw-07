const input = document.querySelector("#validation-input");
const validLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlurLengthValidator);

function onInputBlurLengthValidator(event) {
  if (event.currentTarget.value.length !== validLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
}
