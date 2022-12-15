# Reactive Variables

Reactive variables are a way to store data that can be accessed by any component in your app. They are similar to global variables, but they are reactive, which means that when they change, any component that uses them will be re-rendered. This is useful for things like a user's name, or a counter.

## Creating a reactive variable

To create a reactive variable, create a js file and import pageState from the `avglib` module. Then, create a new variable using the `pageState.varInit` function. The first argument is the name of the variable, and the second argument is the default value. For example:

```js
import { pageState } from "../anframe.js";

const name = pageState.varInit("name", "John Doe");
```

## Using a reactive variable

To use a reactive variable, import pageState from the `avglib` module. Then, access it using `pageState.variables["variable_name"]` (replace "variable_name" with the name of the variable). For example:

```js
import { pageState } from "../anframe.js";

console.log(pageState.variables["name"]);
```

## Changing a reactive variable

To change a reactive variable, import pageState from the `avglib` module. Then, use the `pageState.varSet` function. The first argument is the name of the variable, and the second argument is the new value. For example:

```js
import { pageState } from "../anframe.js";

pageState.varSet("name", "Jane Doe");
```


### Some notes:
After being initialised, the value of the reactive variable is in a span in its parent element, this is necessary for rerendering to work. This may result in issues when styling the element. Also you cannot use the curly bracket syntax to create attributes with reactive variables.