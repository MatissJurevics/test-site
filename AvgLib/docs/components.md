# Components

A HTML component is a reusable piece of code that can be used throughout your webapp. It can be a button, a form, a table, or anything else you can think of. Components are defined in a single file, and can be used in any other file. Components are defined in the `components` folder.

## Creating a component

To create a component, create a new file in the `components` folder. The file name should be the name of the component, with '.html' as its extention. For example, if you want to create a component called 'button', the file name should be 'button.html'. In this file you dont need to include the `<html>` or `body` tag, just the contents of the component inside of a div. (the div will be automtically removed when the component is used)

## Using a component

To use a component, simply create a html element with the attribute "avg-comp" and the value of the component name. For example, if you want to use the 'navbar' component, you would create an element like this:

```html
<nav avg-comp="navbar"></nav>
```

