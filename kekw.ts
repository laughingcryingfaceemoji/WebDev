export{};
let base1: number;
let base2:number;
let hypotenuse:number;
let hours:number;
let diameter:number;
let count = 0;

const submitButtonTriangle = document.getElementById("rightAngleTriangle");
if (submitButtonTriangle){
   submitButtonTriangle.onclick = function(){
    base1 = Number((document.getElementById("base1") as HTMLInputElement).value);
    base2 = Number((document.getElementById("base2") as HTMLInputElement).value);
    hypotenuse = Number((document.getElementById("base3") as HTMLInputElement).value);
    const answer = document.getElementById("rightAngleTriangleAnswer");
    if(answer){
        if(base1 ** 2 + base2 ** 2 == hypotenuse ** 2){
            answer.textContent = "Right triangle"
        }else{
            answer.textContent = "Not a right triangle"
        }
    }   
}
}

const submitButtonHours = document.getElementById("mySubmitHours");
if(submitButtonHours){
    submitButtonHours.onclick = function(){
    hours = Number((document.getElementById("myHours") as HTMLInputElement).value);
    const answerHours = document.getElementById("answerHours");
    if(answerHours){
        const beginningHours = ((10_000 / hours) / 365 + "years...").toString()
        const position = beginningHours.indexOf(".");
        const finalYears = beginningHours.slice(0, position + 3);
        answerHours.textContent = finalYears + "Years";
    }
    }
}

const circleArea = document.getElementById("circleAreaCalculate");
if(circleArea){
        circleArea.onclick = function(){
        diameter = Number((document.getElementById("diameterLength") as HTMLInputElement).value);
        const circleAreaShow = document.getElementById("circleAreaShow");
            if(circleAreaShow){
                const circleAreaSize = (((diameter ** 2 ) * Math.PI) / 4).toString()
                circleAreaShow.textContent = circleAreaSize
            }
        }
}

const increaseButton = document.getElementById("increaseButton");
if(increaseButton){
    increaseButton.onclick = function(){
        const countLabel = document.getElementById("countLabel");
        if(countLabel){
            count++;
            countLabel.textContent = count.toString();
        }
    }
}



 const decreaseButton = document.getElementById("decreaseButton");
 if(decreaseButton){
    decreaseButton.onclick = function(){
        const countLabel = document.getElementById("countLabel");
        if(countLabel){
            count--;
            countLabel.textContent = count.toString();
        }
    }
 }
 const resetButton = document.getElementById("resetButton"); 
 if(resetButton){  
    resetButton.onclick = function(){
        const countLabel = document.getElementById("countLabel"); 
            if(countLabel){
                count = 0
                countLabel.textContent = count.toString();    
            }
        }
 }