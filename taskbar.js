// Start Menu
function showstartmenu() {
    Event.preventDefault;
    var start = document.getElementById('start-menu');
    var startclose = document.getElementById('start-menu-close');
    if (start.classList.contains('visible')) {
        start.classList.remove('visible');
        startclose.classList.remove('visible');
    } else if (!start.classList.contains('visible')) {
        start.classList.add('visible');
        startclose.classList.add('visible');
    } else {
        console.error("Startmenu Classlist Error");
    }
}

const applicationTemplate = document.querySelector("[data-applications-template]");
const applicationContainer = document.querySelector("[data-applications-container]");

let apps = []

fetch("https://raw.githubusercontent.com/XCWalker/xcw/main/googleworkspace.json")
    .then(res => res.json())
    .then(data => {
        sortedapps = data.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        apps = sortedapps.map(app => {
            const card = applicationTemplate.content.cloneNode(true).children[0];
            const title = card.querySelector("[data-applications-title]");
            const svg = card.querySelector("[data-applications-svg]");
            title.textContent = app.title;
            svg.src = app.svg_url;
            card.href = app.redirect_url;

            applicationContainer.append(card);

            return { app }
        });
    })

//Search Menu
function showsearch() {
    Event.preventDefault;
    var search = document.getElementById('taskbar-search-input');
    if (!search.classList.contains('visible')) {
        search.classList.add('visible');
    } else if (search.value.length === 0) {
        if (search.classList.contains('visible')) {
            search.classList.remove('visible');
        } else {
            console.error("Search Classlist Error");
        }
    } else if (search.value.length !== 0) {
        var value = search.value.replace(" ", "+");
        window.open("https://www.google.com/search?q=" + value);
    } else {
        console.error("Input Length Out Of Range")
    }
}

document.getElementById('taskbar-search-input').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        var search = document.getElementById('taskbar-search-input');
        if (search.value.length !== 0) {
            var value = search.value.replace(" ", "+");
            window.open("https://www.google.com/search?q=" + value);
        }
    }
})
