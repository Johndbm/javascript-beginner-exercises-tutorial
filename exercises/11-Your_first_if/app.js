let total = prompt('How many km are left to go?');

// Your code below:
function distance(d) {
    let result;
    if (d > 100){
        result = "We still have a bit of driving left to go";
    } else {
        result = ""
    }
}
//intentando algo en la estructura del cuerpo de la funcion
function distance(d) {
    let result;
    if (d > 100){
        result = "We still have a bit of driving left to go";
    } else {
        if (d >= 50){
            
        } else if (d <= 100){
            result = "We'll be there in 5 minutes";
        }
    }
}