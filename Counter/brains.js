let x = 0
function increment(){
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