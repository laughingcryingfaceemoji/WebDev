function clickable(){
    document.getElementById("demo9").innerHTML = "You did it!"
}
function twoSentences(){
    document.getElementById("demo10").innerHTML = "first sentence.";
    document.getElementById("demo11").innerHTML = "second sentence.";
}

const cars = []
cars[0] = "audi"
cars.push("bmw")
console.log(cars)
//cars = ["toyota"]
// jos yrität nyt runaa tän nii tulee errori heti. console.log(cars)

//käytä aina const ku pystyt.
//käytä konstia arrays ja objecteis voit silti muokkailla niitä listoja/objekteja metodeilla jne.
//mutta et voi vaan ylikirjottaa niitä uusiks.
//käytä let vaa sillon ku et pysty käyttää const


/*function scope on kaikki variaabelit mitkä on {} sisällä näihin ei pääse käsiks funktion ulkoupuolelta
function summ(){
    let num1 = 3;
    let num2 = 4;
}
let num2 = 3;
console.log(num1 + num2);
*/

/*
redeclaariminen toimii vaan uuden blockin sisällä(esim funktion sisällä)
let x = "testi";
let x = 3;
{
let x = 3;
}
*/

function tellDataType(){ // tää heittää aina "string" kato myöhemmin tää läpi
    let test = 67;
    let word = document.getElementById("asda").value;
    if (word === test){
        document.getElementById("demo12").innerHTML = "number";    
    }else{
        document.getElementById("demo12").innerHTML = "string";    
    }
}

//jos yksinkin stringi on laskussa nii koko homma muuttuu stringiks intin sijaan
let a = 3;
let b = "4";
console.log(typeof (a+b));
