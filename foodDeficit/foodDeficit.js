function calculateDeficit(male, weight, height, age) {
    if (male) {
        weight *= 13.7;
        height *= 5.0;
        age *= 6.8;
        return 66 + weight + height - age;
    } else {
        weight *= 9.7;
        height *= 1.8;
        age *= 4.7;
        return 655 + weight + height - age;
    }

}

let weightValue = 0;
let heightValue = 0;
let ageValue = 0;

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
    } else if (gender === 2) {
        isFemale = true;
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
        console.log(ageValue);

        let tCal = calculateDeficit(isMale, weightValue, heightValue, ageValue)
        document.getElementById('caloriesNotHere').innerText = "is estimated to be " + Math.ceil(tCal) + " kCal";
        isTrue = false;
})

document.getElementById('sureCalorie').addEventListener('click', function() {
    let second = document.getElementById('read');
    second.style.opacity = 0;
    isTrue = true;
})