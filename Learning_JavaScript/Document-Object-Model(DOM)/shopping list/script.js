var enterButton = document.getElementById("enter");
var deleteButtons = document.getElementsByClassName("delete")
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var brs = document.getElementsByTagName("br")
var listOfItems = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createDeleteButton(){
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    button.classList.add("delete");
    return button;
}

// void function
function createListElement() {
    var li = document.createElement("li"); // create li tags
    var deleteButton = createDeleteButton();
    deleteButton.onclick = removeParent;
    li.appendChild(document.createTextNode(input.value + " ")); // create text for li tags
    li.appendChild(deleteButton);
    ul.appendChild(li); // append to the ul tag
}

// void function
function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement() ;   
        input.value = "";
    }
}

// void function
function addListAfterKeyboardEnter(event){
    if(inputLength() > 0 && event.key === "Enter") {
        createListElement();
        input.value = "";
    }
}

function removeParent(event){
    event.target.parentNode.remove();
}

function cross(event){
    event.target.classList.toggle("done");
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keydown", addListAfterKeyboardEnter);


for(var i = 0; i < deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click", removeParent);
}

for(var i = 0; i < listOfItems.length; i++){
	listOfItems[i].addEventListener("click", cross);
}


// Note: Callback Functions

    // Event listener syntax : 

    // button.addEventListener("click", addListAfterClick);
    // input.addEventListener("keypress", addListAfterKeypress);

    // You didn't see the function being called like this as you may have expected: 

    // button.addEventListener("click", addListAfterClick());
    // input.addEventListener("keypress", addListAfterKeypress(event));
    
    // This is something called a callback function. 
    // When that line of javascript runs, 
    // we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. 
    // We want to let it know though that we want this action to happen when a click happens. 
    // So the function now automatically gets run (gets added the ()) every time the click happens. 
    // So we are passing a reference to the function without running it.