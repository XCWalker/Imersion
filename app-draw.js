fetch("https://raw.githubusercontent.com/XCWalker/Default/main/app-switcher.json")
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
            svg.src = app.iconURL;
            card.href = app.URL;

            applicationContainer.append(card);

            if (app.title == "Immersion") {
                document.title = app.title + " | " + app.hoverTXT + " | XCWalker"
            }

            return { app }
        });
    })