# DOM
## what is it
The Browser DOM is responsible for rendering the web page, handling user events, and updating the displayed content. Whenever there is a change in the state or structure of the web page, the browser has to re-render the entire DOM tree, which can be a computationally expensive process, especially for complex and large-scale applications.

## vocabulary
**The Mounting Phase** begins when a component is first created and inserted into the DOM. The Updating Phase occurs when a component's state or props change. 

**the Unmounting Phase** occurs when a component is removed from the DOM.
    
## DOM Selectors
    .getElementsByTagName("")                 E.X. document.getElementsByTagName
    .getElementByclassName("")                E.X. document.getElementByclassName
    .getElementById("")                       E.X. document.getElementById  

    .querySelector("")
    .querySelectorAll("")

    .getAttribute("")
    .setAttribute("")
## Changing Styles
    style.{property} // it's ok to use this but we want to sephtml css javascript to be seperate

    .className   // best
    .classList   //  best

    .classList.add("")
    .classList.remove("")
    .classList.toggle("")

    innerHTML //DANGEROUS
    parentElement
    children
### It is imprtant to CACHE selectors in varaibles
## DOM EVENTS
EVENT: https://developer.mozilla.org/en-US/docs/Web/Events

Javascript Char Codes (Key Codes) : https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
