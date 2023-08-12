function calculateCalories(pro, car, fat, alc) {
    let pCal = pro * 4;
    let cCal = car * 4;
    let fCal = fat * 9;
    let aCal = alc * 7;
    return pCal + cCal + fCal + aCal;
}

document.getElementById('tree').addEventListener('click', function() {
    let pIntake = parseInt(document.getElementById('protein').value);
    let cIntake = parseInt(document.getElementById('carbs').value);
    let fIntake = parseInt(document.getElementById('fat').value);
    let aIntake = parseInt(document.getElementById('alcohol').value);
    let tCal = calculateCalories(pIntake, cIntake, fIntake, aIntake);
    document.getElementById('write').innerText = "Your total calorie count is: " + tCal;
})