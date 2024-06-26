# React

## Overview
Traditionally, web development involved manipulating the DOM directly with JavaScript. This approach can be cumbersome, error-prone, and difficult to scale. React solves these problems by providing a more efficient and organized way to build UIs.
1) Component-based architecture: React breaks down the UI into reusable components, making code more modular and maintainable.
2) Virtual DOM: React uses a virtual DOM to efficiently update the UI, leading to smoother performance and better user experience.

**credit & Readmore**: https://www.linkedin.com/pulse/why-react-so-popular-what-problem-does-solve-how-work-samir-khan-qlvnf/

## Virtual Dom v.s. Browser Dom
**The Browser DOM** is responsible for rendering the web page, handling user events, and updating the displayed content. Whenever there is a change in the state or structure of the web page, the browser has to re-render the entire DOM tree, which can be a computationally expensive process, especially for complex and large-scale applications.

The Virtual DOM is a lightweight and efficient abstraction of the Browser DOM. It is a JavaScript representation of the actual DOM tree. React.js utilizes the Virtual DOM to improve performance by minimizing the number of direct manipulations to the Browser DOM.

**Here’s how the Virtual DOM works in React.js**
1. Initial Rendering: When a React component is rendered for the first time, it creates a corresponding Virtual DOM tree that mirrors the structure of the Browser DOM.

2. Virtual DOM Diffing: Whenever there is a change in the component’s state or props, React.js performs a process called “reconciliation.” It compares the previous Virtual DOM tree with the new one and identifies the minimal set of changes required to update the Browser DOM.

3. Update the Browser DOM: React.js applies the necessary changes identified during the diffing process to update the Browser DOM efficiently. Instead of re-rendering the entire DOM tree, React.js only updates the specific parts that have changed, minimizing the impact on performance.

**credit & readmore**: https://medium.com/@darshana_18428/virtual-dom-vs-browser-dom-in-react-js-eccf466d6e8b

## Create React App
Guide : https://create-react-app.dev/docs/getting-started

## Understanding JSX
stands for JavaScript XML allows us to write HTML in React and makes it easier to write and add HTML in React.

**Embdding Expressions in JSX**

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
