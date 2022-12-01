function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

const changeColor = () =>{
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

button.addEventListener("click", changeColor);



