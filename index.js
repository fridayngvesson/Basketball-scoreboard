let scoreHome = null
let scoreGuest = null


function addOneHome() {
    scoreHome ++
    document.getElementById("scoreHome").textContent = scoreHome
}

function addTwoHome() {
    scoreHome += 2
    document.getElementById("scoreHome").textContent = scoreHome
}

function addThreeHome() {
    scoreHome += 3
    document.getElementById("scoreHome").textContent = scoreHome
}

function addOneGuest() {
    scoreGuest ++
    document.getElementById("scoreGuest").textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    document.getElementById("scoreGuest").textContent = scoreGuest
}

function addThreeGuest() {
    scoreGuest += 3
    document.getElementById("scoreGuest").textContent = scoreGuest
}