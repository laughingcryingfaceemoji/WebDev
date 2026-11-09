let x = 0
doubletime = false
function increment(){
    if (doubletime){
        x += 2
        document.getElementById("cookie").innerHTML = x
        return
    }
    x += 1
    document.getElementById("cookie").innerHTML = x
}
function decrement(){
    x -= 1
    document.getElementById("cookie").innerHTML = x
}
function reset(){
    x = 0
    document.getElementById("cookie").innerHTML = x
}
function activateDoubletime(){
    if (x > 10){
        doubletime = true;
        let x = document.getElementById("doubletime") //putting the button inside a variable so I can control it
        x.disabled = true //setting the button to disabled so user cant click it anymore
        reset()
    }
}
