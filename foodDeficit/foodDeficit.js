function calculateDeficit(male, weight, height, age, exercise, pregnant, lactate) {
    let trueValue = 0;
    if (male) {
        weight *= 13.7;
        height *= 5.0;
        age *= 6.8;
        trueValue = 66 + weight + height - age;
    } else {
        weight *= 9.7;
        height *= 1.8;
        age *= 4.7;
        trueValue = 655 + weight + height - age;
    }
    if (exercise === 1) {
        trueValue *= 1.2;
    } else if (exercise === 2) {
        trueValue *= 1.375;
    } else if (exercise === 3) {
        trueValue *= 1.55;
    } else if (exercise === 4) {
        trueValue *= 1.725
    } else {
        trueValue *= 1.9;
    }

    if (pregnant) {
        trueValue += 300;
    }
    if (lactate) {
        trueValue += 500;
    }

    return trueValue;
}

let weightValue = 0;
let heightValue = 0;
let ageValue = 0;
let exerciseValue = 0;

let isPregnant = false;
let isLactating = false;
let tCal = 0;

let isMale = false;
let isFemale = false;

let isTrue = true;

document.getElementById('arbre').addEventListener('click', function() {
    document.getElementById('errorMassage').innerText = " ";

    let keys = document.getElementsByName('sexThing');
    let gender = 0;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i].checked) {
            gender = i + 1;
        }
    }
    if (gender === 1) {
        isMale = true;
        isFemale = false;
    } else if (gender === 2) {
        isFemale = true;
        isMale = false;
    } else {
        document.getElementById('errorMassage').innerText += "Please enter a sex (either male or female)";
    }

    if (isTrue) {
        let thingy = document.getElementById('read');
        let op = 0;
        let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        thingy.style.opacity = op;
        op += 0.01
    }, 10)
    }
        weightValue = document.getElementById('weight').value;
        heightValue = document.getElementById('height').value;
        ageValue = document.getElementById('age').value;
        exerciseValue = parseInt(document.getElementById('myRange').value);

        if (isFemale) {
            if (document.getElementById('gregnant').checked) {
                isPregnant = true;
            } else {
                isPregnant = false;
            }
            if (document.getElementById('pregananant').checked) {
                isLactating = true;
            } else {
                isLactating = false;
            }
        } else {
            isPregnant = false;
            isLactating = false;
        }

        tCal = calculateDeficit(isMale, weightValue, heightValue, ageValue, exerciseValue, isPregnant, isLactating);
        console.log(tCal);
        document.getElementById('caloriesNotHere').innerText = "is estimated to be " + Math.ceil(tCal) + " kCal";
        // isTrue = false;
})

document.getElementById('sureCalorie').addEventListener('click', function() {
    let second = document.getElementById('read');
    second.style.opacity = 0;
    isTrue = true;
})