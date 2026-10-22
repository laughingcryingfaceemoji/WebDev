let kanta1;
let kanta2;
let hypotenuusa;
let tunnit;
let halkaisija;
let count = 0;
const submitButtonTriangle = document.getElementById("mySubmit");
if (submitButtonTriangle) {
    submitButtonTriangle.onclick = function () {
        kanta1 = Number(document.getElementById("myText").value);
        kanta2 = Number(document.getElementById("myText2").value);
        hypotenuusa = Number(document.getElementById("myText3").value);
        const answer = document.getElementById("answer");
        if (answer) {
            if (kanta1 ** 2 + kanta2 ** 2 == hypotenuusa ** 2) {
                answer.textContent = "Suorakulmainen kolmio";
            }
            else {
                answer.textContent = "Ei suorakulmainen kolmio";
            }
        }
    };
}
const submitButtonHours = document.getElementById("mySubmitHours");
if (submitButtonHours) {
    submitButtonHours.onclick = function () {
        tunnit = Number(document.getElementById("myHours").value);
        const answerHours = document.getElementById("answerHours");
        if (answerHours) {
            const beginningHours = ((10000 / tunnit) / 365 + "years...").toString();
            const position = beginningHours.indexOf(".");
            const finalYears = beginningHours.slice(0, position + 3);
            answerHours.textContent = finalYears + "Years";
        }
    };
}
const ympyraPintaala = document.getElementById("halkaisijaInput");
if (ympyraPintaala) {
    ympyraPintaala.onclick = function () {
        halkaisija = Number(document.getElementById("halkaisijaSyote").value);
        const halkaisijaVastaus = document.getElementById("halkaisijaVastaus");
        if (halkaisijaVastaus) {
            const oikeaVastaus = (((halkaisija ** 2) * Math.PI) / 4).toString();
            halkaisijaVastaus.textContent = oikeaVastaus;
        }
    };
}
const increaseButton = document.getElementById("increaseButton");
if (increaseButton) {
    increaseButton.onclick = function () {
        const countLabel = document.getElementById("countLabel");
        if (countLabel) {
            count++;
            countLabel.textContent = count.toString();
        }
    };
}
const decreaseButton = document.getElementById("decreaseButton");
if (decreaseButton) {
    decreaseButton.onclick = function () {
        const countLabel = document.getElementById("countLabel");
        if (countLabel) {
            count--;
            countLabel.textContent = count.toString();
        }
    };
}
const resetButton = document.getElementById("resetButton"); // luodaan aiheesta variaabeli, joka ottaa tiedon aiheen Id:llä
if (resetButton) {
    resetButton.onclick = function () {
        const countLabel = document.getElementById("countLabel"); // luodaan aiheesta variaabeli, joka ottaa tiedon aiheen Id:llä
        if (countLabel) {
            count = 0;
            countLabel.textContent = count.toString();
        }
    };
}