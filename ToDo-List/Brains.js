/*
//hyviä uutisia javascriptillä voi luoda uusia html elementtejä!!!!!
const para = document.createElement("h1"); // mikä elementti luodaan button,p,h1 jne...
const node = document.createTextNode("HIHIHI"); //elementin esitys teksti <button>This is new.<button/>
para.appendChild(node); //syötetään luodulle tagille sen esitys teksti
const element = document.getElementById("div1"); //tää on se mihin elementti lisätään tässä tapauksessa div1 sisälle.
element.appendChild(para); //tää syöttää uuden elementin sen vanhempi elementille(mikä on yläpyuolella määritettty)

const para2 = document.createElement("button");
const node2 = document.createTextNode("click me");
para2.appendChild(node2);
const element2 = document.getElementById("div1")
element2.appendChild(para2)

const para3 = document.createElement("p");
const node3 = document.createTextNode("im a paragraph");
para3.appendChild(node3);
const element3 = document.getElementById("div1");
element3.appendChild(para3);


function createToDo(){
    const para = document.createElement("p"); // mikä elementti luodaan button,p,h1 jne...
    const node = document.createTextNode(ToD); 
    para.appendChild(node); //syötetään luodulle tagille sen esitys teksti
    const element = document.getElementById("div1"); //tää on se mihin elementti lisätään tässä tapauksessa div1 sisälle.
    element.appendChild(para);
}
*/

/*
function viewTask(){
    let answer = document.getElementById("ToDoTask").value;
    console.log(answer);
}
*/

function createTask(){
    let todoTask = document.getElementById("ToDoTask").value;

    const para = document.createElement("p");
    const node = document.createTextNode(todoTask);
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);

    const para2 = document.createElement("button");
    const node2 = document.createTextNode("Edit");
    para2.appendChild(node2);
    const element2 = document.getElementById("div1");
    element2.appendChild(para2);

    const paraa3 = document.createElement("button");
    const nodee3 = document.createTextNode("Delete");
    paraa3.appendChild(nodee3);
    const elementt3 = document.getElementById("div1");
    elementt3.appendChild(paraa3);
    paraa3.onclick="remmove()"
    function remmove(){
        console.log("test")
    }
    
}