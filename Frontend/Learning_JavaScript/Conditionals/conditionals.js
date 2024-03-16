const name = "Ford";

if (name === "Nithi") {
    console.log("hi Nithi")
}else{
    console.log("you are not Nithi")
}
// _______________________________________________________


if (name === "Nithi") {
    console.log("hi Nithi")
}else if (name === "Ford"){
    console.log("hi Ford")
}else {
    console.log("Who are you")
}

// _______________________________________________________

function isItCorrect(bool) {
    return bool;
}

var answer = isItCorrect(true) ? "It is" : "No it is not"

var incorrectResponse = "Your answer is " + ( isUserValid(false) ? "correct" : "not correct");

// _______________________________________________________

function moveCommand(direction) {
    var whatHappens;
    switch(direction){
        case "forward": whatHappens = "you encounter a monster";
            break;
        case "back": whatHappens = "you arrived home";
            break;
        case "right": whatHappens = "you found a river";
            break;
        case "left": whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens
}