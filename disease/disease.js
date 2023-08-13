// Why didn't they do a CSV file now I have to code this
// VERY IMPORTANT: make sure the name of the illness is ALWAYS at index 0 in the array!!! My code will handle the rest.

let acne = ["Acne", "Spots", "Oily skin"];
let allergicRhinitis = ["Allergic Rhinitis", "Sneezing", "Itchiness"];
let allergies = ["Allergies", "Sneezing", "Runny nose", "Watery eyes", "Wheezing", "Coughing", "Rash", "Itchiness"];
let alzheimers = ["Alzheimer's disease", "Confusion", "Disorientation", "Difficulty speaking", "Problems performing self-care tasks", "Personality changes", "Hallucinations", "Anxiety"];
let analCancer = ["Anal cancer", "Rectal bleeding", "Itching and pain around the anus", "Small lumps around the anus", "Discharge of mucus from the anus", "Bowel incontinence"];
let anaphylaxis = ["Anaphylaxis", "Itchy skin", "Swollen eyes", "Swollen lips", "Swollen hands", "Swollen feet", "Lightheadedness", "Swollen mouth", "Wheezing", "Abdominal pain", "Nausea", "Vomiting", "Unconsciousness"];
let anorexiaNervosa = ["Anorexia", "Low body weight", "Excessive exercise", "Vomiting after eating"];
let anxiety = ["Anxiety", "Nervousnesss", "Sense of impending danger", "Increased heart rate", "Hyperventilation", "Sweating", "Trembling", "Problems concentrating"];
let appendicitis = ["Appendicitis", "Swelling of the appendix", "Abdominal pain", "Loss of appetite", "Diarrhea", "Difficulty walking"];
let arthritis = ["Arthritis", "Joint pain", "Joint stiffness", "Joint inflammation", "Restricted joint movement"];
let asthma = ["Asthma", "Wheezing", "Coughing", "Chest tightness", "Increased heart rate", "Drowsiness", "Confusion", "Dizziness", "Blue lips", "Blue fingers", "Fainting"];
let bladderCancer = ["Bladder cancer", "Blood in urine", "Pain while urinating", "Frequent urination"];


let allIllnesses = [acne, allergicRhinitis, allergies, alzheimers, analCancer, anaphylaxis, anorexiaNervosa, anxiety, appendicitis, arthritis, asthma, bladderCancer];

let definiteIllnesses = [];
let probableIllnesses = [];
let unlikelyIllnesses = [];
let notIllnesses = [];

let counterOne = 0;

document.getElementById('arbre').addEventListener('click', function() {
    definiteIllnesses = [];
    probableIllnesses = [];
    unlikelyIllnesses = [];
    notIllnesses = [];

    let fromDoc = document.getElementById('symptoms').value;
    let docArray = fromDoc.split(", ");

    if (docArray.length !== 0) {
        for (let i = 0; i < allIllnesses.length; i++) {
            counterOne = 0;
            for (let j = 1; j < allIllnesses[i].length; j++) {
                for (let k = 0; k < docArray.length; k++) {
                    if (docArray[k].toLowerCase() === allIllnesses[i][j].toLowerCase()) {
                        counterOne++;
                    }
                }
            }
    
        if (counterOne === docArray.length) {
            definiteIllnesses.push(allIllnesses[i][0]);
        } else if (counterOne - 2 >= docArray.length && docArray.length >= 1) {
            probableIllnesses.push(allIllnesses[i][0]);
        } else if (counterOne - 4 >= docArray.length && docArray.length >= 1) {
            unlikelyIllnesses.push(allIllnesses[i][0]);
        } else {
            notIllnesses.push(allIllnesses[i][0]);
        }
    }
    } else {
        document.getElementById('errorMassage').innerText = "Please try entering more than 0 symptoms.";
    }

    if (definiteIllnesses.length > 0) {
        document.getElementById('diseasesHere').innerText = "it is very likely you have the following: ";
        for (let i = 0; i < definiteIllnesses.length; i++) {
            document.getElementById('diseasesHere').innerText += "\n- " + definiteIllnesses[i];
    }}

    if (probableIllnesses.length > 0) {
        document.getElementById('diseasesHere').innerText += "\n\nFurthermore, you may also have the following, though it is less likely:"
        for (let i = 0; i < probableIllnesses.length; i++) {
            document.getElementById('diseasesHere').innerText += "\n- " + probableIllnesses[i];
        }
    }

    function funStuff() {
        let moveItem = document.getElementById('read');
        let miStyle = window.getComputedStyle(moveItem);
        let leftValue = miStyle.getPropertyValue("left").replace("px", "");
        moveItem.style.left = (Number(leftValue) + 9) + "px";
        counter++;
        if (counter > 100) {
            clearInterval(countInterval);
        }
    }
    setTimeout(fadeIn, 4000);


})