import { renderVariables } from "../renderer/variables.js"
import { initConditionals } from "../renderer/conditionals.js"
import { initItir } from "../renderer/itiration.js"

/*
Pagestate is used to control all functions and values in anframe,
You use pagestate to create and modify variables and functions that are run in anframe.
In Order to do so you must import pagestate in your script.

*/ 
export let pageState = {
    "variables": {},
    "functions": {}, 
    varInit: function(varName, varValue) {
        this.variables[varName] = varValue;
        console.log(this)
        renderVariables(document.body);
        initConditionals();
        // initItir();
    },
    varSet: function(varName, varValue) {
        this.variables[varName] = varValue;
        renderVariables(document.body);
        initConditionals();
        // initItir();
    },
    funcInit: function(funcName, func) {
        this.functions[funcName] = func;
    },
}