# Conditionals

## if

    if (conditional) {
        
    }

## else

    if (conditional) {
        
    }else{
        
    }

## else if

    if (conditional) {
    
    }else if (conditional){
        
    }

## ternary operator 

    condition ? expr1 : expr2;
## switch

    function moveCommand(direction) {
        var whatHappens;
        switch(direction){
            case "forward": whatHappens = "you found pikachu";
                break;
            case "back": whatHappens = "you found mewtwo ";
                break;
            case "right": whatHappens = "you found monster";
                break;
            case "left": whatHappens = "you found nothting";
                break;
            default:
                whatHappens = "please enter a valid direction";
        }
        return whatHappens
    }
