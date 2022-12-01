const output = document.querySelector("#name-input");
const newName = document.querySelector("#name-output");


const text = () => {
    if(output.value===""){
        newName.textContent = "Anónimo";    
    }else{
        newName.textContent = output.value;
    }
  };

  output.addEventListener("input", text);


