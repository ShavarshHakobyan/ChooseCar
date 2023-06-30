const Images = [
    {
        "car": "images/ford.jpg",
        "name": "Ford"
    },
    {
        "car": "images/audi.jpg",
        "name": "Audi"
    },
];
function randomImage() {
    getElementById("car");

}


let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
    return document.getElementById(id);
}

function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds === 5) getElement("time").style.color = "red";
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value
    } catch {
        //alert("unecaq sxal")
        return;
    }
    correctAnswer++;
    getElement('score').innerHTML = correctAnswer;
    clearInterval(checkInterval);
}
function finish() {
    clearInterval(checkInterval);
    let parcentage = 100;
    getElement("alertaccuracy").innerHTML = `${parcentage}%`;
}
let checkInterval = setInterval(check, 50);
timer();

