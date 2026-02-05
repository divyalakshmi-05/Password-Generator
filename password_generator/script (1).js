const passwordBox = document.getElementById("password1");
const slider = document.getElementById("inputslider");
const sliderValue = document.getElementById("slidervalue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.querySelector(".genbtn");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "@#$%&*";

sliderValue.textContent = slider.value;

slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
});

generateBtn.addEventListener("click", () => {
    let allChars = "";
    let password = "";
    const length = slider.value;

    if (lowercase.checked) allChars += lowerChars;
    if (uppercase.checked) allChars += upperChars;
    if (numbers.checked) allChars += numberChars;
    if (symbols.checked) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    passwordBox.value = password;
});
