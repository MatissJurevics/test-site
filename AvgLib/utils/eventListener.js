import { pageState } from "../utils/pageState.js";

const initListeners = () => {
    // get all elements with the avg-on:click attribute
    let clickElements = document.querySelectorAll("[avg-on\\:click]");
    // loop through the elements
    clickElements.forEach((element) => {
        // get the value of the attribute
        let clickValue = element.getAttribute("avg-on:click");
        // add an event listener to the element
        element.addEventListener("click", () => {
            // check if the value of the attribute is a function
            if (pageState.functions[clickValue]) {
                // call the function
                pageState.functions[clickValue]();
            }
        });
    })
   
    
};

export { initListeners };