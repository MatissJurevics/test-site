import { pageState } from "../utils/pageState.js";
import { renderVariables } from "./variables.js";

let itir = [];

const scanForItir = elem => {
    if (elem.hasAttribute("avg-itir")) {
        itir.push(elem);
    }
    let children = [...elem.children];
    children.map(child => {
        scanForItir(child);
    })
};

let body = document.body
scanForItir(body)

const initItir = () => {
    itir.map(elem => {
        let content = elem.getAttribute("avg-itir");
        let contentArray = content.split(" ");
        // Error checking
        if (contentArray.length !== 2) {
            throw new Error(`Invalid avg-itir attribute: "${content}"`)
        }
        if (pageState.variables[contentArray[2]] === undefined) {
            throw new Error(`Variable "${contentArray[0]}" not found`)
        }
        // checks for the variable we're itirating through "item in items", this would select 'items'
        let variable = pageState.variables[contentArray[2]];
        // creates a new version of the parent element and clones it with its respective variable reference
        variable.forEach((item, index) => {
            let clone = elem.cloneNode(true);
            clone.removeAttribute("avg-itir");
            // variable name is variable and its index
            pageState.variables[`${contentArray[2]}-${index}`] = item;
            clone.setAttribute("avg-var", `${contentArray[2]}-${index}`)
            elem.parentNode.insertAfter(clone, elem);
            renderVariables(clone);
        });

    })
}

export { initItir };