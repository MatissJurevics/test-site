import { pageState } from "../utils/pageState.js";

let renderVariables = (elem) => {
    // check if the text inside the element contains text with the format {{variable}} while keeping the brackets
    if (elem.innerHTML.match(/{{.*?}}/)) {
        // get the text inside the brackets
        elem.style.display = "hidden"
        let variableName = elem.innerHTML.match(/{{(.*?)}}/)[1];
        console.log(variableName, pageState.variables[variableName])
        // create a span with the arg-var attribute equal to the variable name and the text inside the span equal to the value of the variable
        let variableSpan = document.createElement("span");
        variableSpan.setAttribute("avg-var", variableName);
        variableSpan.innerHTML = pageState.variables[variableName];
        // replace the text inside the element with the span
        elem.innerHTML = elem.innerHTML.replace(/{{.*?}}/, variableSpan.outerHTML);
    }   
    // check if the element contains a span with the avg-var attribute
    if (elem.querySelector("[avg-var]")) {
        // get the variable name from the attribute
        let variableName = elem.querySelector("[avg-var]").getAttribute("avg-var");
        // replace the text inside the span with the value of the variable
        elem.querySelector("[avg-var]").innerHTML = pageState.variables[variableName];
    }
}

export { renderVariables };