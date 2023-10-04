let body = document.querySelectorAll(".body-jsedit");
let header = document.querySelectorAll(".header-jsedit");
let section = document.querySelectorAll(".section-jsedit");
let colorSection = document.querySelectorAll(".colorSection-jsedit");
let h2 = document.querySelectorAll(".h2-jsedit");
let footer = document.querySelectorAll(".footer-jsedit");
let button = document.querySelectorAll(".button-jsedit");
let selector = document.querySelectorAll(".selector-jsedit");

var theme = document.querySelector("#theme");

var savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    theme.value = savedTheme;
    SetTheme(savedTheme);
}

theme.addEventListener("change", function () {
    SetTheme(theme.value);
    localStorage.setItem("theme", theme.value);
});

function SetTheme(Theme)
{
    switch (Theme)
    {
        case "light":
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
        case "dark":
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
    }
}