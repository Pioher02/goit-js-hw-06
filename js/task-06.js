const input = document.querySelector("#validation-input");


const validate = () => {
    const counter = input.value;
       
    if (counter.length === 6) {
       
        input.classList.add("valid");
      
    } else {
        input.classList.add("invalid");
    }
    
    
  };

input.addEventListener("blur", validate);

