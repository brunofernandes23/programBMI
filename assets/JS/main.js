const form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector("#weight");
    const inputHeight = e.target.querySelector("#height");

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult("Invalid weight", false);
        return;
    }

    if (!height) {
        setResult("Invalid height", false);
        return;
    }

    const bmi = getBmi(weight, height);
    const ratingBmi = getRatingBmi(bmi);

    const message = `Your BMI is ${bmi} (${ratingBmi})`;

    setResult(message, true);
});

function getRatingBmi(bmi) {
    const rating = [
        "Underweight",
        "Normal weight",
        "Overweight",
        "Grade 1 obesity",
        "Grade 2 obesity",
        "Grade 3 obesity",
    ];

    if (bmi >= 39.9) return rating[5];
    if (bmi >= 34.9) return rating[4];
    if (bmi >= 29.9) return rating[3];
    if (bmi >= 24.9) return rating[2];
    if (bmi >= 18.5) return rating[1];
    if (bmi < 18.5) return rating[0];
}

function getBmi(weight, height) {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function createParagraph() {
    const p = document.createElement("p");
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector("#result");
    result.innerHTML = "";

    const p = createParagraph();

    if (isValid) {
        p.classList.add("paragraph-result");
    } else {
        p.classList.add("paragraph-invalid-result");
    }

    p.innerHTML = message;
    result.appendChild(p);
}