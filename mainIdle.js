// initialize counter (load from localStorage if available)
let TFCount = parseInt(localStorage.getItem("TFCount")) || 0; 

// update the display when page loads
function updateDisplay() {
    document.getElementById("counterDisplay").textContent = TFCount;
}

// handle button click
function buttonClicked() {
    TFCount++;
    saveCounter();
    updateDisplay();
}

// save to localStorage
function saveCounter() {
    localStorage.setItem("TFCount", TFCount);
}

// function you can call when upgrades add to the counter
function addTransforms(amount) {
    TFCount += amount;
    saveCounter();
    updateDisplay();
}

// make sure the display shows the right number on load
window.onload = updateDisplay;