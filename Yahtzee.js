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
    
    // if (rollcount === 2) { 
    //     const rollButton = document.getElementById('rollButton');
        
    //     // rollButton.disabled = true;
    //     rollButton.value = "Out Of Rolls";
    // }
    
}


    rollcount++;

    tellen1s();
    tellen2s();
    tellen3s();
    tellen4s();
    tellen5s();
    tellen6s();
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

let EenPressed = false;

function EenPressedFunc(){
    if(EenPressed)return;
    const Eenvast = document.getElementById('Eenvast');
    const result1 = tellen1s();
    document.getElementById("score-enen").innerHTML = result1;
    EenPressed = true;
    Eenvast.disabled = true;
    OndersteHelft += result1;
    document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
    totalScore += result1;
    document.getElementById("Score").innerHTML = totalScore;
    Dobbel();
}



function tellen1s(){
    let result1 = 0;

    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        if(diceSrc === 'dob1.png'){
            result1++;
        }
    }

    console.log(result1 + " 1s");

    return result1;
    
}

let TweePressed = false;

function tweePressedFunc(){
    if(TweePressed)return;
    const Tweevast = document.getElementById('Tweevast');
    const result2 = tellen2s();
            document.getElementById("score-tweeën").innerHTML = result2 * 2;
            TweePressed = true;
            Tweevast.disabled = true;
            OndersteHelft += result2 * 2;
            document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
            totalScore += result2 * 2;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
}



function tellen2s(){
    let result2 = 0;
    
    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        if(diceSrc === 'dob2.png'){
            result2++;
        }
    }
    
    console.log(result2 + " 2s");

    return result2;
    
}

let driePressed = false;

function driePressedFunc(){
    if(driePressed)return;
    const drievast = document.getElementById('Drievast');
    const result3 = tellen3s();
            document.getElementById("score-drieën").innerHTML = result3 * 3;
            driePressed = true;
            drievast.disabled = true;
            OndersteHelft += result3 * 3;
            document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
            totalScore += result3 * 3;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
}



function tellen3s(){
    let result3 = 0;

    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        
        if(diceSrc === 'dob3.png'){
            result3++;
        }
    }

    console.log(result3 + " 3s");

    return result3;
}

let vierPressed = false;

function vierPressedFunc(){
    if(vierPressed)return;
    const viervast = document.getElementById('viervast');
    const result4 = tellen4s();
    document.getElementById("score-vieren").innerHTML = result4 * 4;
            vierPressed = true;
            viervast.disabled = true;
            OndersteHelft += result4 * 4;
            document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
            totalScore += result4 * 4;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
}



function tellen4s(){
    let result4 = 0;

    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        
        if(diceSrc === 'dob4.png'){
            result4++;
        }
    }

    console.log(result4 + " 4s");
    return result4;
}

let vijfPressed = false;

function vijfPressedFunc(){
    if(vijfPressed)return;
    const vijfvast = document.getElementById('vijfvast');
    const result5 = tellen5s();
    document.getElementById("score-vijven").innerHTML = result5 * 5;
            vijfPressed = true;
            vijfvast.disabled = true;
            OndersteHelft += result5 * 5;
            document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
            totalScore += result5 * 5;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
}



function tellen5s(){
    let result5 = 0;

    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        
        if(diceSrc === 'dob5.png'){
            result5++;
        }
    }


    console.log(result5 + " 5s");
    return result5;
}

let zesPressed = false;

function zesPressedFunc(){
    if(zesPressed)return;
    const zesvast = document.getElementById('zesvast');
    const result6 = tellen6s();
    document.getElementById("score-zessen").innerHTML = result6 * 6;
            zesPressed = true;
            zesvast.disabled = true;
            OndersteHelft += result6 * 6;
            document.getElementById("Onderste-helft").innerHTML = OndersteHelft;
            totalScore += result6 * 6;
            document.getElementById("Score").innerHTML = totalScore;
            Dobbel();
}



function tellen6s(){
    let result6 = 0;

    for(let i = 0; i < currentDices.length; i++){
        let diceSrc = currentDices[i].getAttribute('src');
        
        if(diceSrc === 'dob6.png'){
            result6++;
        }
    }


    console.log(result6 + " 6s");
    return result6;
}

let isYahtzeePressed = false;

function YahtzeeF(){
    
    if (isYahtzeePressed) return;

    const Yahtzee = document.getElementById('Yahtzee');
    const result1 = tellen1s();
    const result2 = tellen2s();
    const result3 = tellen3s();
    const result4 = tellen4s();
    const result5 = tellen5s();
    const result6 = tellen6s();
    
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
Yahtzee.addEventListener("click", function(){
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
});
}
}



function Chance(){

if (chancePressed) return;

    const Chance = document.getElementById('Chance');
    const result1 = tellen1s();
    const result2 = tellen2s();
    const result3 = tellen3s();
    const result4 = tellen4s();
    const result5 = tellen5s();
    const result6 = tellen6s();
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
    const result1 = tellen1s(); 
    const result2 = tellen2s();
    const result3 = tellen3s();
    const result4 = tellen4s();
    const result5 = tellen5s();
    const result6 = tellen6s();

    
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
    const result1 = tellen1s(); 
    const result2 = tellen2s();
    const result3 = tellen3s();
    const result4 = tellen4s();
    const result5 = tellen5s();
    const result6 = tellen6s();
    

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
    const result1 = tellen1s(); 
    const result2 = tellen2s();
    const result3 = tellen3s();
    const result4 = tellen4s();
    const result5 = tellen5s();
    const result6 = tellen6s();

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
        const result1 = tellen1s();
        const result2 = tellen2s();
        const result3 = tellen3s();
        const result4 = tellen4s();
        const result5 = tellen5s();
        const result6 = tellen6s();
        
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
        const result1 = tellen1s();
        const result2 = tellen2s();
        const result3 = tellen3s();
        const result4 = tellen4s();
        const result5 = tellen5s();
        const result6 = tellen6s();
        
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