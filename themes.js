/* ------------ Elements ------------ */

const body = document.querySelectorAll(".body-jsedit");
const header = document.querySelectorAll(".header-jsedit");
const section = document.querySelectorAll(".section-jsedit");
const colorSection = document.querySelectorAll(".colorSection-jsedit");
const h2 = document.querySelectorAll(".h2-jsedit");
const footer = document.querySelectorAll(".footer-jsedit");
const button = document.querySelectorAll(".button-jsedit");
const selector = document.querySelectorAll(".selector-jsedit");

/* ------------ Selector ------------ */

let theme = document.querySelector("#theme");

let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    theme.value = savedTheme;
    SetTheme(savedTheme);
}

theme.addEventListener("change", function () {
    SetTheme(theme.value);
    localStorage.setItem("theme", theme.value);
});

/* ------------ Themes ------------ */

function SetTheme(Theme)
{
    switch (Theme)
    {
        /* ------------ Blue ------------ */
        case "light-blue":
            body.forEach(function(body){
                body.style.backgroundColor = "white";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#6C7DEA";
            })
            section.forEach(function(section){
                section.style.color = "black";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#6C7DEA";
            })
            h2.forEach(function(h2){
                h2.style.color = "black";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#6C7DEA";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#8a97ea";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#8a97ea";
            })
        break;
        case "dark-blue":
            body.forEach(function(body){
                body.style.backgroundColor = "#202020";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#5468e8";
            })
            section.forEach(function(section){
                section.style.color = "white";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#5468e8";
            })
            h2.forEach(function(h2){
                h2.style.color = "white";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#5468e8";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#6C7DEA";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#6C7DEA";
            })
        break;
        /* ------------ Orange ------------ */
        case "light-orange":
            body.forEach(function(body){
                body.style.backgroundColor = "white";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#ff8233";
            })
            section.forEach(function(section){
                section.style.color = "black";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#ff8233";
            })
            h2.forEach(function(h2){
                h2.style.color = "black";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#ff8233";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#ff8e47";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#ff8e47";
            })
        break;
        case "dark-orange":
            body.forEach(function(body){
                body.style.backgroundColor = "#202020";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#ff7a26";
            })
            section.forEach(function(section){
                section.style.color = "white";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#ff7a26";
            })
            h2.forEach(function(h2){
                h2.style.color = "white";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#ff7a26";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#ff8e47";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#ff8e47";
            })
        break;
        /* ------------ Purple ------------ */
        case "light-purple":
            body.forEach(function(body){
                body.style.backgroundColor = "white";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#d117cb";
            })
            section.forEach(function(section){
                section.style.color = "black";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#d117cb";
            })
            h2.forEach(function(h2){
                h2.style.color = "black";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#d117cb";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#f720f0";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#f720f0";
            })
        break;
        case "dark-purple":
            body.forEach(function(body){
                body.style.backgroundColor = "#202020";
            })
            header.forEach(function(header){
                header.style.backgroundColor = "#bf04b9";
            })
            section.forEach(function(section){
                section.style.color = "white";
            })
            colorSection.forEach(function(colorSection){
                colorSection.style.backgroundColor = "#bf04b9";
            })
            h2.forEach(function(h2){
                h2.style.color = "white";
            })
            footer.forEach(function(footer){
                footer.style.backgroundColor = "#bf04b9";
            })
            button.forEach(function(button){
                button.style.backgroundColor = "#d117cb";
            })
            selector.forEach(function(selector){
                selector.style.backgroundColor = "#d117cb";
            })
        break;
    }
}
