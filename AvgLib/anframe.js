import { initComponents } from "./renderer/components.js";
import { initConditionals } from "./renderer/conditionals.js";
import { renderVariables } from "./renderer/variables.js";
import { initListeners } from "./utils/eventListener.js";
import { initItir } from "./renderer/itiration.js";
import { pageState } from "./utils/pageState.js"

// run the initial render
renderVariables(document.body);
initComponents();
initConditionals();
initListeners();
document.body.style.visibility = "visible"



export { pageState };