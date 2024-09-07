"use strict";
// Education
const getH1 = document.getElementById("h1-btn");
const getText = document.querySelector("#edu");
if (getH1 && getText) {
    getH1 === null || getH1 === void 0 ? void 0 : getH1.addEventListener("click", () => {
        if (getText.style.display === "none") {
            getH1.textContent = "Education +";
            getH1.style.border = "none";
            getH1.style.backgroundColor = "#dae0db";
            getText.style.display = "block";
            console.log("show");
        }
        else {
            getH1.textContent = "Education -";
            getH1.style.border = "2px solid black";
            getH1.style.backgroundColor = "#dae0db";
            getText.style.display = "none";
            console.log("hide");
        }
    });
}
else {
    console.log("Element not found");
}
// skill
const getSkillH2 = document.getElementById("h2-btn");
const getSkillText = document.querySelector("#skill");
if (getSkillH2 && getSkillText) {
    getSkillH2 === null || getSkillH2 === void 0 ? void 0 : getSkillH2.addEventListener("click", () => {
        if (getSkillText.style.display === "none") {
            getSkillH2.textContent = "Skill +";
            getSkillH2.style.border = "none";
            getSkillH2.style.backgroundColor = "#dae0db";
            getSkillText.style.display = "block";
            console.log("show");
        }
        else {
            getSkillH2.textContent = "Skill -";
            getSkillH2.style.border = "2px solid black";
            getSkillH2.style.backgroundColor = "#dae0db";
            getSkillText.style.display = "none";
            console.log("hide");
        }
    });
}
else {
    console.log("Element not found");
}
// wotk experience
const getWorkH2 = document.getElementById("h3-btn");
const getWorkText = document.querySelector("#work");
if (getWorkH2 && getWorkText) {
    getWorkH2 === null || getWorkH2 === void 0 ? void 0 : getWorkH2.addEventListener("click", () => {
        if (getWorkText.style.display === "none") {
            getWorkH2.textContent = "Work Experience +";
            getWorkH2.style.border = "none";
            getWorkH2.style.backgroundColor = "#dae0db";
            getWorkText.style.display = "block";
            console.log("show");
        }
        else {
            getWorkH2.textContent = "Work Experience -";
            getWorkH2.style.border = "2px solid black";
            getWorkH2.style.backgroundColor = "#dae0db";
            getWorkText.style.display = "none";
            console.log("hide");
        }
    });
}
else {
    console.log("Element not found");
}
