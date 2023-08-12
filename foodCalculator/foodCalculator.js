function calculateCalories(pro, car, fat, alc) {
    let pCal = pro * 4;
    let cCal = car * 4;
    let fCal = fat * 9;
    let aCal = alc * 7;
    return pCal + cCal + fCal + aCal;
}

let globalCounter = 0;

let previousP = 0;
let previousC = 0;
let previousF = 0;
let previousA = 0;

let pIntake = 0;
let cIntake = 0;
let fIntake = 0;
let aIntake = 0;

let isTrue = true;

document.getElementById('tree').addEventListener('click', function() {
    pIntake = parseInt(document.getElementById('protein').value);
    cIntake = parseInt(document.getElementById('carbs').value);
    fIntake = parseInt(document.getElementById('fat').value);
    aIntake = parseInt(document.getElementById('alcohol').value);

    if (globalCounter === 0) {
        if (isTrue) {
            let thingy = document.getElementById('write');
            let op = 0;
            let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            thingy.style.opacity = op;
            op += 0.01
    }, 10)

        }
        previousP = pIntake;
        previousC = cIntake;
        previousF = fIntake;
        previousA = aIntake;

        let tCal = calculateCalories(pIntake, cIntake, fIntake, aIntake);
        document.getElementById('caloriesHere').innerText = "is estimated to be " + tCal + " kCal";
        globalCounter++;
        isTrue = false;

    } else {

        if (pIntake === previousP && cIntake === previousC && fIntake === previousF && aIntake === previousA) {

            document.getElementById('errorMessage').innerText = "Please try entering a different set of values.";

        } else {

            globalCounter--;
            document.getElementById('errorMessage').innerText = "";
            let tCal = calculateCalories(pIntake, cIntake, fIntake, aIntake);
            document.getElementById('caloriesHere').innerText = "is estimated to be " + tCal + " kCal";

        }
    }
})

document.getElementById('okayCalorie').addEventListener('click', function() {
    console.log("me!")
    let second = document.getElementById('write');
    second.style.opacity = 0;
    isTrue = true;
    globalCounter--;
})