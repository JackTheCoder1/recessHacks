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
let bloodpoisoning = ["Blood Poisoning", "Loss of consciousness", "Severe breathlessness", "Fever", "Confusion", "Disorientation", "Slurred speech", "Mottled skin", "Increased heart rate", "Fast breathing", "Chills", "Dizziness", "Vomiting", "Nausea", "Diarrhea"];
let bonecancer = ["Bone Cancer", "Persistent bone pain", "Swelling", "Redness", "Lump over a bone"];
let bowelcancer = ["Bowel Cancer", "",];
let braintumor = [];
let breastcancerfemale = [];
let breastcancermale = [];
let bronchitis = [];
let bunion = [];

let carcinoidsyndrome = [];
let cervicalcancer = [];
let chickenpox = [];
let chlamydia = [];
let chronicfatiguesyndrome = [];
let croniclymphocyticleukemia = [];
let coldsore = [];
let commoncold = [];
let constipation = [];
let coronavirus = [];
let crohnsdisease = [];

let dehydration = [];
let dementia = [];
let depression = [];

let earache = [];
let ebola = [];
let erectiledysfunction = [];
let escherichiacoli = [];
let eyecancer = [];

let flu = [];
let foodpoisoning = [];

let gallbladdercancer = [];
let genitalherpes = [];
let genitalwarts = [];
let gonorrhoea = [];

let handfootmouthdisease = [];
let heyfever = [];
let headlice = [];
let heartfailure = [];
let hepatitisA = [];
let hepatitisB = [];
let hepatitisC = [];
let hiv = [];
let huntington = [];

let indigestion = [];
let ingrowntoenail = [];
let insomnia = [];
let ibs = [];

let kidneycancer = [];
let kidneystone = [];

let lactoseintolerance = [];
let laryngitis = [];
let livercaner = [];
let lungcancer = [];
let lymedisease = [];

let malaria = [];
let malignantbraintumor = [];
let malnutrition = [];
let measles = [];
let mouthulcer = [];

let nasalandsinuscancer = [];
let nasopharyngealcancer = [];
let neuroblastoma = [];
let neuroendocrinetumors = [];
let nonhodgkinlymphoma = [];
let norovirus = [];

let ocd = [];
let obstructivesleepapnoea = [];
let oesophagealcancer = [];
let osteoporosis = [];
let osteosarcoma = [];
let ovariancancer = [];
let overactivethyroid = [];

let pigetsdisease = [];
let pancreaticcancer = [];
let panicdisorder = [];
let parkinsonsdisease = [];
let pelvicinflammatorydisease = [];
let penilecancer = [];
let pleurisy = [];
let pneumonia = [];
let ptsd = [];
let prostatecancer = [];

let retinoblastoma = [];
let rhabdomyosarcoma = [];
let ringworm = [];

let syphilisfirststage = [];
let syphilissecondstage = [];
let syphilissthirdstage = [];
let stroke = [];
let streptococcusA = [];
let stomachcancer = [];
let softtissuesarcomas = [];
let slappedcheeksyndrome = [];
let skincancernon = [];
let skincancermelanoma = [];
let sjogrenssyndrome = [];
let sicklecelldesease = [];
let shingles = [];
let scoliosis = [];
let scizonphrenia = [];
let scarletfever = [];

let testicularcancer = [];
let threadworms = [];
let thyroidcancer = [];
let tinnitus = [];
let tonsillitis = [];
let tia = [];
let tb = [];
let tp1disbetes = [];
let tp2disbetes = [];

let urticaria = [];
let urinarytractinfection = [];
let underactivethyroid = [];

let vulvarcancer = [];
let varicoseecxema = [];
let vaginalcancer = [];

let wombcancer = [];
let wilmstumor = [];
let whoopingcough = [];





let allIllnesses = [acne, allergicRhinitis, allergies, alzheimers, analCancer, anaphylaxis, anorexiaNervosa, anxiety, appendicitis, arthritis, asthma, bladderCancer, bloodpoisoning, bonecancer,
bowelcancer, braintumor, breastcancerfemale, breastcancerfemale, bronchitis, bunion, arcinoidsyndrome, cervicalcancer, chickenpox, chlamydia, chronicfatiguesyndrome, croniclymphocyticleukemia,
coldsore, commoncold, constipation, coronavirus, crohnsdisease, dehydration, dementia, depression, earache, ebola, erectiledysfunction, escherichiacoli, eyecancer, flu, foodpoisoning, gallbladdercancer, genitalherpes,
genitalwarts, gonorrhoea, handfootmouthdisease, heyfever, headlice, heartfailure, hepatitisA, hepatitisB, hepatitisC, hiv, huntington, indigestion, ingrowntoenail, insomnia, ibs, kidneycancer, kidneystone,
lactoseintolerance, laryngitis, livercaner, lungcancer, lymedisease, malaria, malignantbraintumor, malnutrition, measles, mouthulcer, nasalandsinuscancer, nasopharyngealcancer,
neuroblastoma, neuroendocrinetumors, nonhodgkinlymphoma, norovirus, ocd, obstructivesleepapnoea, oesophagealcancer, osteoporosis, osteosarcoma, ovariancancer, overactivethyroid, pigetsdisease, pancreaticcancer,
panicdisorder, parkinsonsdisease, pelvicinflammatorydisease, penilecancer, pleurisy, pneumonia, ptsd, prostatecancer, retinoblastoma, rhabdomyosarcoma, ringworm, syphilisfirststage,
syphilissecondstage, syphilissthirdstage, stroke, streptococcusA, stomachcancer, softtissuesarcomas, slappedcheeksyndrome, skincancernon, skincancermelanoma, sjogrenssyndrome, sicklecelldesease,
shingles, scoliosis, scizonphrenia, scarletfever, testicularcancer, threadworms, thyroidcancer, tinnitus, tonsillitis, tia, tb, tp1disbetes, tp2disbetes, urticaria, urinarytractinfection,
underactivethyroid, vulvarcancer, varicoseecxema, vaginalcancer, wombcancer, wilmstumor, whoopingcough];


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

    document.getElementById('diseasesHere').innerText = "";
    document.getElementById('mildDiseases').innerText = "";

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
    }} else {
        document.getElementById('diseasesHere').innerText += "there are no diseases that are most likely to have.";
    }

    if (probableIllnesses.length > 0) {
        document.getElementById('mildDiseases').innerText += "you may also have the following, though it is less likely:"
        for (let i = 0; i < probableIllnesses.length; i++) {
            document.getElementById('mildDiseases').innerText += "\n- " + probableIllnesses[i];
        }
    } else {
        document.getElementById('mildDiseases').innerText += "there are no diseases in which most of your symptoms match.";
    }

    funStuff();
    funAgain();
})

document.getElementById('acceptCancer').addEventListener('click', function() {
    if (globalCounter === 1 || globalCounter === 2) {
        let moveItem = document.getElementById('write');
        moveItem.style.opacity = 0;
        globalCounter--;
    }
})

document.getElementById('acceptMostly').addEventListener('click', function() {
    if (globalCounter === 1 || globalCounter === 2) {
        let moveItem = document.getElementById('read');
        moveItem.style.opacity = 0;
        globalCounter--;
    }
})


let globalCounter = 0;

function funStuff() {
    if (globalCounter === 0) {
        let thingy = document.getElementById('read');
        let op = 0;
        let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            thingy.style.opacity = op;
            op += 0.01
        }, 10)
        globalCounter++;
    }
}

function funAgain() {
    if (globalCounter === 1) {}
        let thingyTwo = document.getElementById('write');
        let op = 0;
        let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            thingyTwo.style.opacity = op;
            op += 0.01
        }, 10)
        globalCounter++;
    }
