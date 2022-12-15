/*
This script allows you to insert html into the page from another html file as a component.
*/
import { renderVariables } from "./variables.js";
let components = new Set();

// This function does a recursive search to find elements with the avg-comp attribute and appends their value to the components set
const scanForComp = (elem) => {
    if (elem.hasAttribute("avg-comp")) {
        components.add(elem.getAttribute("avg-comp"))
    }
    let children = [...elem.children]
    children.map(child => {
        scanForComp(child)
    })
}

// Function to load components in the first time
const initComponents = () => {
    let body = document.body

    scanForComp(body)
    console.log(components)

    components.forEach((component) => {
        
        let componentHTML = document.querySelectorAll(`[avg-comp="${component}"]`);
        let componentPath = `../../components/${component}.html`;
        console.dir()
        
        // check if file in path exitst
        fetch(componentPath)
        .then(response => {
            if (response.ok) {
                return response.text()
                .then((html) => {
                    // remove the outer div from the html
                    let htmlWithoutDiv = html.replace(/<div.*?>/, "").replace(/<\/div>/, "");
                    // insert the html into the page
                    componentHTML.forEach((element) => {
                        element.innerHTML = htmlWithoutDiv;
                        // render any variables in the component
                        renderVariables(element);
                    }
                    )
                })
            } else {
    
                fetch(`../AvgLib/utils/NoComponent.html`)
                .then(response => {
                    return response.text()
                    .then((html) => {
                        document.body.innerHTML = html
                    })
                })
                throw new Error(`File for "${component}" not found`)
            }
        }
    
    );
    })
}

// export the function to be used in the main script
export { initComponents, components }
