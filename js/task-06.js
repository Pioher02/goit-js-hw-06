const input = document.getElementById("validation-input");
const dataLength = input.dataset.length;

const validate = () => {
    const counter = input.value;
    
    if (counter.length == dataLength) {
        
        if (input.classList.contains("invalid")) {
            
            input.classList.replace("invalid", "valid");
            
        } else {
            
            input.classList.add("valid");  
        }
           
    } else {
        
        input.classList.add("invalid");
    }
        
  };

input.addEventListener("blur", validate);
