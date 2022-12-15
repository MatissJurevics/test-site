# Conditional Rendering

Conditional rendering allows for the rendering of different components based on a condition. This is useful for rendering different components based on the state of the application.

## If

In order to have an element render conditionally you must use the avg-if attribute. The value of this attribute must be a valid javascript expression. The element will only render if the expression evaluates to true.

```html
<div avg-if="name === 'John Doe'">
    <avg-text>Hello John Doe!</avg-text>
</div>
```

Note how the variable name is used rather than pageState.variables["name"]. This is because the avg-if attribute will only evaluate variables in the pageState.variables object. This is to prevent the use of variables that are not reactive from being used in order to prevent unexpected behaviour.

# Else

As of writing this the only way to have an else statement is to wrap your previous if statement in brackets and inverting it. i.e. `avg-if="!(name === 'John Doe')"`.