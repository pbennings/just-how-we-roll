/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;
function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}


/*
# ========================================================
# = Roll Functions
# ========================================================
*/

function rollD6(){
    const result = Math.floor(Math.random()* 6)+1;
sixes.push(result);
    const d6Roll = document.querySelector('#d6-roll')
    const d6RollPath = './images/d6'
    switch(result) {
        case 1: d6Roll.src=`${d6RollPath}/1.png`
        break;
        case 2: d6Roll.src=`${d6RollPath}/2.png`
        break;
        case 3: d6Roll.src=`${d6RollPath}/3.png`
        break;
        case 4: d6Roll.src=`${d6RollPath}/4.png`
        break;
        case 5: d6Roll.src=`${d6RollPath}/5.png`
        break;
        case 6: d6Roll.src=`${d6RollPath}/6.png`
        break;

        default: d6Roll.src = './image/start/06.png'
}

function doubleD12Roll1(){
    const result = Math.floor(Math.random()* 12)+1;
twelves.push(result);
    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll1dPath = './images/d6'
    switch(result) {
        case 1: doubleD12Roll1.src=`${doubleD12Roll1Path}/1.png`
        break;
        case 2: doubleD12Roll1.src=`${doubleD12Roll1Path}/2.png`
        break;
        case 3: doubleD12Roll1.src=`${doubleD12Roll1Path}/3.png`
        break;
        case 4: doubleD12Roll1.src=`${doubleD12Roll1Path}/4.png`
        break;
        case 5: doubleD12Roll1.src=`${doubleD12Roll1Path}/5.png`
        break;
        case 6: doubleD12Roll1.src=`${doubleD12Roll1Path}/6.png`
        break;

        default: doubleD12Roll1.src = './image/start/06.png'
}

function d12Roll(){
    const result = Math.floor(Math.random()* 12)+1;
twelves.push(result);
    const d12Roll = document.querySelector('#d12-roll')
    const d12RollVB = './images/d6'
    switch(result) {
        case 1: d12Roll.src=`${d12RollPath}/1.png`
        break;
        case 2: d12Roll.src=`${d12RollPath}/2.png`
        break;
        case 3: d12Roll.src=`${d12RollPath}/3.png`
        break;
        case 4: d12Roll.src=`${d12RollPath}/4.png`
        break;
        case 5: d12Roll.src=`${d12RollPath}/5.png`
        break;
        case 6: d12Roll.src=`${d12RollPath}/6.png`
        break;

        default: d12Roll.src = './image/start/06.png'
}

function d20Roll(){
    const result = Math.floor(Math.random()* 6)+1;
sixes.push(result);
    const d20Roll = document.querySelector('#d20-roll')
    const d20RollVB = './images/d6'
    switch(result) {
        case 1: d20Roll.src=`${d20RollVBPath}/1.png`
        break;
        case 2: d20Roll.src=`${d20RollVBPath}/2.png`
        break;
        case 3: d20Roll.src=`${d20RollVBPath}/3.png`
        break;
        case 4: d20Roll.src=`${d20RollVBPath}/4.png`
        break;
        case 5: d20Roll.src=`${d20RollVBPath}/5.png`
        break;
        case 6: d20Roll.src=`${d20RollVBPath}/6.png`
        break;

        default: d20Roll.src = './image/start/06.png'
}

function resetButton(){
    const resetButton = Math.floor(Math.random()* 6)+1;
sixes.push(result);
    const resetButtonAgain = document.querySelector('#reset-button')
    const resetButtonVB = './images/d6'
    switch(result) {
        case 1: resetButton.src=`${resetButtonPath}/1.png`
        break;
        case 2: resetButton.src=`${resetButtonVBPath}/2.png`
        break;
        case 3: resetButton.src=`${resetButtonVBPath}/3.png`
        break;
        case 4: resetButton.src=`${resetButtonVBPath}/4.png`
        break;
        case 5: resetButton.src=`${resetButtonVBPath}/5.png`
        break;
        case 6: resetButton.src=`${resetButtonVBPath}/6.png`
        break;

        default: resetButton.src = './image/start/06.png'
}
/*
# ========================================================
# = Math Functions
# ========================================================
*/
meanAverage(myArr) 
    let result = 0
    result = myArr[i] 
    return = return/2
}

medianAverage(myArr) {
    myArr.sort(functiona(a,b)){return a-b})
    return myArr[]
    Math.floor(myArr.length/20)
    }
}

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

