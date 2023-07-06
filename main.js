let correct;
let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
    return document.getElementById(id);
}
function getRandomImages() {
    return images[Math.floor(Math.random(images.length - 1) * 10)]
}
function main() {

    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let coun = getRandomImages()
        if (options.indexOf(coun) === -1) {
            options.push(coun);
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`options${i + 1}label`).innerHTML = options[i].name;
        getElement(`options${i + 1}input`).value = options[i].name;
        getElement(`options${i + 1}input`).checked = false;

    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    getElement("car").src = correct.car
}


function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        main();
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
    if (input === correct.name) {
        correctAnswer++;
        getElement('score').innerHTML = correctAnswer;
    } else {
        incorrectAnswer++;
    }
    main()
}
function finish() {
    clearInterval(checkInterval);
    let parcentage = 100;
    getElement("alertaccuracy").innerHTML = `${parcentage}%`;
}
let checkInterval = setInterval(check, 50);
main()
timer();

