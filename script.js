let cwelCount = 0;

// Upgrade ceny i wartości
let clickValue = 1;
let autoValue = 0;

let clickUpgradePrice = 100;
let autoUpgradePrice = 250;

// Elementy
const cwelDisplay = document.getElementById("cwelCount");
const takoImage = document.getElementById("tako");
const clickSound = document.getElementById("clickSound");
const clickUpgradeBtn = document.getElementById("clickUpgrade");
const autoUpgradeBtn = document.getElementById("autoUpgrade");
const clickPriceDisplay = document.getElementById("clickUpgradePrice");
const autoPriceDisplay = document.getElementById("autoUpgradePrice");

// Funkcja aktualizacji wyświetlacza
function updateDisplay() {
    cwelDisplay.textContent = cwelCount;
    clickPriceDisplay.textContent = clickUpgradePrice;
    autoPriceDisplay.textContent = autoUpgradePrice;
}

// Klikanie Tako
takoImage.addEventListener("click", () => {
    cwelCount += clickValue;
    clickSound.currentTime = 0;
    clickSound.play();
    updateDisplay();
});

// Upgrade kliknięć
clickUpgradeBtn.addEventListener("click", () => {
    if(cwelCount >= clickUpgradePrice){
        cwelCount -= clickUpgradePrice;
        clickValue += 1;
        clickUpgradePrice *= 2;
        updateDisplay();
    }
});

// Automatyczny upgrade
autoUpgradeBtn.addEventListener("click", () => {
    if(cwelCount >= autoUpgradePrice){
        cwelCount -= autoUpgradePrice;
        autoValue += 1;
        autoUpgradePrice *= 2;
        updateDisplay();
    }
});

// Funkcja automatycznego przyrostu cwelów
setInterval(() => {
    cwelCount += autoValue;
    updateDisplay();
}, 1000);
