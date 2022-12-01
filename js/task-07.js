const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");



const fontSize = () => {
    
    let fontSizeNumber = input.value + "px";
    text.style.fontSize = fontSizeNumber;   
    
  };

  input.addEventListener("input", fontSize);

