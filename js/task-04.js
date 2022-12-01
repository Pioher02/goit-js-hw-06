const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");
let counterValue = 0;


const incrementClick = () => {
    counterValue = counterValue + 1;
    counter.textContent = counterValue;
    return counterValue;
  };

  increment.addEventListener("click", incrementClick);
 
  const decrementClick = () => {
    counterValue = counterValue - 1;
    counter.textContent = counterValue;
    return counterValue;
  };

  decrement.addEventListener("click", decrementClick);
  