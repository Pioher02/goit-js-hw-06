const input = document.getElementById("validation-input");
const dataLength = input.dataset.length;

const validate = () => {
    const counter = input.value;
    
    if (counter.length == dataLength) {
        console.log("Counter tiene 6 caracteres");

        if (input.classList.contains("invalid")) {
            console.log("existe la clase invalid se cambia");
            input.classList.replace("invalid", "valid");
            
        } else {
            console.log("no existe invalid");
            input.classList.add("valid");  
        }
           
    } else {
        console.log("Counter NO TIENE 6 caracteres");
        input.classList.add("invalid");
    }
        
  };

input.addEventListener("blur", validate);
