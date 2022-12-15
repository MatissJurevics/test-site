import { pageState } from "../utils/pageState.js";

let conditionals = [];

const scanForComp = (elem) => {
    if (elem.hasAttribute("avg-if")) {
        conditionals.push(elem)
    }
    let children = [...elem.children]
    children.map(child => {
        scanForComp(child)
    })
}

const initConditionals = () => {
    let body = document.body;
    scanForComp(body);
    
    
    conditionals.map(elem => {
        let statement = elem.getAttribute("avg-if");
        
        // Replace all possible variables with their values
        let variables = statement.match(/([a-zA-Z0-9_]+)/g);
        // it matches any word character (a-z, A-Z, 0-9, _) and then matches it globally
        // so if the statement is "(test) > 5" it will match "test" and "5"
        
        variables.map(variable => {
            // check that the variable doesnt only contains numbers and is in the pageState
            if (isNaN(variable) && pageState.variables[variable] !== undefined) {
                statement = statement.replace(variable, pageState.variables[variable])
            } else if (isNaN(variable)) {
                // replace variable with undefined if it doesnt exist in pageState
                statement = statement.replace(variable, undefined)
            }
            
        })

        /*
        TODO:
        - Find a more secure way to evaluate the statement than using eval (or find a way to make eval safer)
        */
        let evaled = eval(statement)
        if (evaled) {
            elem.style.display = "block"
        } else {
            elem.style.display = "none"
        }
    })
}
    


export { initConditionals };
