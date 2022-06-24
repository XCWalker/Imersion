//Show Any Window
function show(windowuuid) {
    Event.preventDefault;
    var window = document.getElementById(windowuuid);
    if (window.classList.contains('visible')) {
        window.classList.add('hidden');
        window.classList.remove('visible');
    } else if (!window.classList.contains('visible')) {
        window.classList.add('visible');
        window.classList.remove('hidden');
    } else {
        console.error("Window Classlist Error");
    }
}

// Draggable
var windows = document.getElementsByClassName("draggable");

while (windows.length > 0) {
    dragElement(windows.item(0))
    windows.item(0).classList.remove('draggable')
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.firstElementChild) {
        // if present, the header is where you move the DIV from:
        elmnt.firstElementChild.onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Window Controls
var windowHeaderCenterbar = document.getElementsByClassName("367740de-86bd-4d67-aeab-2b0a04086f26");
var windowHeaderOptionMinimize = document.getElementsByClassName("502c7757-fdb0-4d76-b4bc-0daef05995e8");
var windowHeaderOptionClose = document.getElementsByClassName("012cea6f-cc40-4b50-96da-a89976d4e499");

// Shows Window Options
while (windowHeaderCenterbar.length > 0) {
    windowHeaderCenterbar.item(0).addEventListener("click", function (e) {
        e.preventDefault;
        var window = e.target.nextElementSibling;
        if (window.classList.contains('visible')) {
            window.classList.remove('visible');
        } else if (!window.classList.contains('visible')) {
            window.classList.add('visible');
        } else {
            console.error("Window Classlist Error");
        }
    });
    windowHeaderCenterbar.item(0).classList.remove('367740de-86bd-4d67-aeab-2b0a04086f26')
}
// Minimizes Window Options
while (windowHeaderOptionMinimize.length > 0) {
    windowHeaderOptionMinimize.item(0).addEventListener("click", function (e) {
        e.preventDefault;
        var window = e.target.parentElement.parentElement;
        if (window.classList.contains('visible')) {
            window.classList.remove('visible');
        } else if (!window.classList.contains('visible')) {
            window.classList.add('visible');
        } else {
            console.error("Window Classlist Error");
        }
    });
    windowHeaderOptionMinimize.item(0).classList.remove('502c7757-fdb0-4d76-b4bc-0daef05995e8')
}
// Closes A Window
while (windowHeaderOptionClose.length > 0) {
    windowHeaderOptionClose.item(0).addEventListener("click", function (e) {
        e.preventDefault;
        var window = e.target.parentElement.parentElement.parentElement.parentElement;

        window.classList.add('hidden');
        window.classList.remove('visible');
    });
    windowHeaderOptionClose.item(0).classList.remove('012cea6f-cc40-4b50-96da-a89976d4e499')
}
// Opens A Window
window.addEventListener('popstate', function (e) {
    e.preventDefault;
    var url = this.location.href.toLowerCase();
    if (url.includes("#2bf035f2-41c7-44a9-8b12-c57b66f9ac12")) {
        var about = document.getElementById('2bf035f2-41c7-44a9-8b12-c57b66f9ac12');
        if (about.classList.contains('visible')) {
            about.classList.add('hidden');
            about.classList.remove('visible');
        } else if (!about.classList.contains('visible')) {
            about.classList.add('visible');
            about.classList.remove('hidden');
        } else {
            console.error("About Classlist Error");
        }
    } else if (url.includes("#7474ba22-48d8-47df-8aea-6c4652e139ec")) {
        var about = document.getElementById('7474ba22-48d8-47df-8aea-6c4652e139ec');
        if (about.classList.contains('visible')) {
            about.classList.add('hidden');
            about.classList.remove('visible');
        } else if (!about.classList.contains('visible')) {
            about.classList.add('visible');
            about.classList.remove('hidden');
        } else {
            console.error("About Classlist Error");
        }
    }
    this.location.hash = "";
});