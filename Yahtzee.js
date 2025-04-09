let rollcount = 0;
let totalScore = 0;
let BovensteHelft = 0;
let OndersteHelft = 0;
document.getElementById("Score").innerHTML = totalScore;

const images = [
    'dob1.png',
    'dob2.png',
    'dob3.png',
    'dob4.png',
    'dob5.png',
    'dob6.png'
];

const lockedDice = [false, false, false, false, false];

for (let i = 0; i < 5; i++) {
    const imageElement = document.getElementById("dice" + (i + 1));
    if (imageElement) {
        imageElement.src = images[i];
        imageElement.addEventListener("click", function(event){
            console.log(event.target);
            console.log(this);
            hold(i, this);
        });
    }
}


const currentDices = [null, null, null, null, null];

let chancePressed = false;

function Dobbel() {
   
if(rollcount !== 3){

    for (let i = 0; i < 5; i++) {
        const imageElement = document.getElementById("dice" + (i + 1));
        currentDices[i] = imageElement;


        if (imageElement && !lockedDice[i]) {
            const randomIndex = Math.floor(Math.random() * images.length);
            imageElement.src = images[randomIndex];
        }

    }
    
    if (rollcount === 2) { 
        const rollButton = document.getElementById('rollButton');
        
        // rollButton.disabled = true;
        rollButton.value = "Out Of Rolls";
    }
    
}


    rollcount++;


    Chance();
    GroteStraat();
    KleineStraat();
    FullHouse();
    Carre();
    ThreeOfAKind();
    YahtzeeF();
}



function hold(index, diceElement){
    lockedDice[index] = !lockedDice[index]; 

    if (lockedDice[index]) {
        diceElement.style.border = "3px solid green";  
    } else {
        diceElement.style.border = "";
    }

    console.log("Dice " + (index + 1) + (lockedDice[index] ? " locked" : " unlocked"));
}


let isYahtzeePressed = false;

function YahtzeeF(){
    
    if (isYahtzeePressed) return;

    const Yahtzee = document.getElementById('Yahtzee');
    const result1 = tellen('dob1.png');
    const result2 = tellen('dob2.png');
    const result3 = tellen('dob3.png');
    const result4 = tellen('dob4.png');
    const result5 = tellen('dob5.png');
    const result6 = tellen('dob6.png');
    
    const values = [result1, result2, result3, result4, result5, result6];
    let Y1 = false;

    for (let i = 0; i < 6; i++) {
if (values[i] >= 5) {
    Y1 = true;
}
}
Yahtzee.disabled = true;
if(Y1 == true && isYahtzeePressed == false){
    Yahtzee.disabled = false;
    Yahtzee.disabled = true;
    if (isYahtzeePressed) return;
    Yahtzee.disabled = true;
    let Yahsc = 50;
document.getElementById("yahtzee-score").innerHTML = Yahsc;
BovensteHelft += 50;
document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
isYahtzeePressed = true;
totalScore += 50;
document.getElementById("Score").innerHTML = totalScore;
Dobbel();
}
}



function Chance(){

if (chancePressed) return;

    const Chance = document.getElementById('Chance');
    const result1 = tellen('dob1.png');
    const result2 = tellen('dob2.png');
    const result3 = tellen('dob3.png');
    const result4 = tellen('dob4.png');
    const result5 = tellen('dob5.png');
    const result6 = tellen('dob6.png');
    Tjans = result1 + (result2 * 2) + (result3 * 3) + (result4 * 4) + (result5 * 5) + (result6 * 6);
    document.getElementById("chance-score").innerHTML = Tjans;
        Chance.addEventListener("click", function(){
            if (chancePressed) return;
            Chance.disabled = true;
            chancePressed = true;
            BovensteHelft += Tjans;
        document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
        totalScore += Tjans;
        document.getElementById("Score").innerHTML = totalScore;
        Dobbel();
    });
}

let GroteStraatPressed = false;

function GroteStraat(){

    if (GroteStraatPressed) return;

    const Gstraat = document.getElementById("Gstraat");
    const result1 = tellen('dob1.png');
    const result2 = tellen('dob2.png');
    const result3 = tellen('dob3.png');
    const result4 = tellen('dob4.png');
    const result5 = tellen('dob5.png');
    const result6 = tellen('dob6.png');

    
    Gstraat.disabled = true;
    if ((result1 === 1 && result2 === 1 && result3 === 1 && result4 === 1 && result5 === 1) || 
        (result2 === 1 && result3 === 1 && result4 === 1 && result5 === 1 && result6 === 1)) {
        
            Gstraat.disabled = false;
            Gstraat.addEventListener("click", function(){
                if (GroteStraatPressed) return;
                Gstraatscore = 40;
                Gstraat.disabled = true;
                document.getElementById("grote-straat").innerHTML = Gstraatscore;
                BovensteHelft += 40;
                document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
                GroteStraatPressed = true;
            totalScore += 40;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
             });
    }
}

let KleineStraatPressed = false;

function KleineStraat() {

    if (KleineStraatPressed) return;

    const Kstraat = document.getElementById("Kstraat");
    const result1 = tellen('dob1.png');
    const result2 = tellen('dob2.png');
    const result3 = tellen('dob3.png');
    const result4 = tellen('dob4.png');
    const result5 = tellen('dob5.png');
    const result6 = tellen('dob6.png');
    

    if (
        ((result1 == 1 || result1 == 2) && (result2 == 1 || result2 == 2) && (result3 == 1 || result3 == 2) && (result4 == 1 || result4 == 2)) ||
        ((result2 == 1 || result2 == 2) && (result3 == 1 || result3 == 2) && (result4 == 1 || result4 == 2) && (result5 == 1 || result5 == 2)) ||
        ((result3 == 1 || result3 == 2) && (result4 == 1 || result4 == 2) && (result5 == 1 || result5 == 2) && (result6 == 1 || result6 == 2))) 
        {
        
        Kstraat.disabled = false;

        Kstraat.addEventListener("click", function() {
            if (KleineStraatPressed) return;
            let Kstraatscore = 30;
            Kstraat.disabled = true;
            document.getElementById("kleine-straat").innerHTML = Kstraatscore;
            BovensteHelft += 30;
            document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
            KleineStraatPressed = true;
            totalScore += 30;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
        });

    } else {
        Kstraat.disabled = true;
    }
}

let FullHousePressed = false;

function FullHouse(){

    if(FullHousePressed) return;

    const FH = document.getElementById("FullHouse");
    const result1 = tellen('dob1.png');
    const result2 = tellen('dob2.png');
    const result3 = tellen('dob3.png');
    const result4 = tellen('dob4.png');
    const result5 = tellen('dob5.png');
    const result6 = tellen('dob6.png');

    FH.disabled = true;

    const values = [result1, result2, result3, result4, result5, result6];
    let v2 = false;
    let v3 = false;

    for (let i = 0; i < 6; i++) {
if (values[i] == 3) {
    v3 = true;
}}
for (let i = 0; i < 7; i++) {
if (values[i - 1] == 2) {
    v2 = true;
}
}

if (v3 && v2 == true) {
    FH.disabled = false;
    FH.addEventListener("click", function() {
        if(FullHousePressed) return;
        let FHScore = 25;
        document.getElementById("full-house").innerHTML = FHScore;
        BovensteHelft += 25;
        document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
        FH.disabled = true;
        FullHousePressed = true;
        totalScore += 25;
        document.getElementById("Score").innerHTML = totalScore;
        Dobbel();
    });
    }
}

let isCarrePressed = false;

function Carre(){

    if (isCarrePressed) return;

        const Carrer = document.getElementById('Carrer');
        const result1 = tellen('dob1.png');
        const result2 = tellen('dob2.png');
        const result3 = tellen('dob3.png');
        const result4 = tellen('dob4.png');
        const result5 = tellen('dob5.png');
        const result6 = tellen('dob6.png');
        
        const values = [result1, result2, result3, result4, result5, result6];
        let c1 = false;
    
        for (let i = 0; i < 6; i++) {
    if (values[i] >= 4) {
        c1 = true;
    }
}

    Carrer.disabled = true;


    

if (c1 == true) {
    Carrer.disabled = false;
    Carrer.addEventListener("click", function(){
        if (isCarrePressed) return;
        carreScore = result1 + (result2 * 2) + (result3 * 3) + (result4 * 4) + (result5 * 5) + (result6 * 6);
        Carrer.disabled = true;
        document.getElementById("Carre").innerHTML = carreScore;
        BovensteHelft += carreScore;
        document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
        isCarrePressed = true;
        totalScore += carreScore;
        document.getElementById("Score").innerHTML = totalScore;
        Dobbel();
    });}else{Carrer.disabled = true;}
    }

    let isThreeOfAKindPressed = false;

    function ThreeOfAKind(){

        if (isThreeOfAKindPressed) return;

        const TOAK = document.getElementById("TOAK");
        const result1 = tellen('dob1.png');
        const result2 = tellen('dob2.png');
        const result3 = tellen('dob3.png');
        const result4 = tellen('dob4.png');
        const result5 = tellen('dob5.png');
        const result6 = tellen('dob6.png');
        
        const values = [result1, result2, result3, result4, result5, result6];
        let T1 = false;
    
        for (let i = 0; i < 6; i++) {
    if (values[i] >= 3) {
        T1 = true;
    }
    }

    TOAK.disabled = true;

    if (T1 == true) {
        TOAK.disabled = false;
        TOAK.addEventListener("click", function(){
        if (isThreeOfAKindPressed) return;
            Tscore = result1 + (result2 * 2) + (result3 * 3) + (result4 * 4) + (result5 * 5) + (result6 * 6);
            TOAK.disabled = true;
            document.getElementById("three-of-a-kind").innerHTML = Tscore;
            BovensteHelft += Tscore;
            document.getElementById("Bovenste-helft").innerHTML = BovensteHelft;
            isThreeOfAKindPressed = true;
            totalScore += Tscore;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
        });}else{TOAK.disabled = true;}
}






function tellen(diceValue) {
    let result = 0;
    for (let i = 0; i < currentDices.length; i++) {
        let diceSrc = currentDices[i].getAttribute('src');
        if (diceSrc === diceValue) {
            result++;
        }
    }
    console.log(result + " " + diceValue);
    return result;
}



function PressedFunc(diceValue, multiplier, buttonId, scoreId, scoreKey) {
    if (window[scoreKey]) return;

    const button = document.getElementById(buttonId);
    const result = tellen(diceValue);
    const score = result * multiplier;

    document.getElementById(scoreId).innerHTML = score;

    window[scoreKey] = true;
    button.disabled = true;

    OndersteHelft += score;
    document.getElementById("Onderste-helft").innerHTML = OndersteHelft;

    totalScore += score;
    document.getElementById("Score").innerHTML = totalScore;

    Dobbel();

    const rollButton = document.getElementById('rollButton');
    rollButton.disabled = false;
    rollButton.value = "Roll";
    rollcount = 0;

    // Reset locked dice
    // for (let i = 0; i < lockedDice.length; i++) {
    //     lockedDice[i] = false;
    // }
}



let EenPressed = false;
function EenPressedFunc() {
    PressedFunc('dob1.png', 1, 'Eenvast', 'score-enen', 'EenPressed');
}

let TweePressed = false;
function tweePressedFunc() {
    PressedFunc('dob2.png', 2, 'Tweevast', 'score-tweeën', 'TweePressed');
}

let driePressed = false;
function driePressedFunc() {
    PressedFunc('dob3.png', 3, 'Drievast', 'score-drieën', 'driePressed');
}

let vierPressed = false;
function vierPressedFunc() {
    PressedFunc('dob4.png', 4, 'viervast', 'score-vieren', 'vierPressed');
}

let vijfPressed = false;
function vijfPressedFunc() {
    PressedFunc('dob5.png', 5, 'vijfvast', 'score-vijven', 'vijfPressed');
}

let zesPressed = false;
function zesPressedFunc() {
    PressedFunc('dob6.png', 6, 'zesvast', 'score-zessen', 'zesPressed');
}