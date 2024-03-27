# React

## Overview
Traditionally, web development involved manipulating the DOM directly with JavaScript. This approach can be cumbersome, error-prone, and difficult to scale. React solves these problems by providing a more efficient and organized way to build UIs.
1) Component-based architecture: React breaks down the UI into reusable components, making code more modular and maintainable.
2) Virtual DOM: React uses a virtual DOM to efficiently update the UI, leading to smoother performance and better user experience.
credit: https://www.linkedin.com/pulse/why-react-so-popular-what-problem-does-solve-how-work-samir-khan-qlvnf/

## Create React App
Guide : https://create-react-app.dev/docs/getting-started

## Understanding JSX
stands for JavaScript XML allows us to write HTML in React and makes it easier to write and add HTML in React.

### Embdding Expressions in JSX
Wrapping everything with {} then you can do JavaScript expression.
Example:

    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
Guide : https://legacy.reactjs.org/docs/introducing-jsx.html ,
        https://www.w3schools.com/react/react_jsx.asp.

## Components, context and props 

2 type of Component
Class Component and function component
### Class Components
Example:

    import { Component } from 'react';

    class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
    }

#### Function Component

    import React from 'react';

    const Home = () => {
        return <h1>Home</h1>;
    };
    
For props and state recommend go read this document below:

Guide: https://www.w3schools.com/react/react_components.asp,
https://react.dev/reference/react/Component


## React Hooks
