// Set Settings Cookie
function updateSettingsCookie() {
    var json_str = JSON.stringify(settingsArray);
    createCookie('settingsCookie', json_str, 100);
}

var settingsArray = [];

function loadSettingsCookie() {
    var json_str = getCookie('settingsCookie');
    if (json_str == "[]" || json_str === undefined) {
        // Sets defaults
        console.log("Using Defaults")
        settingsArray = ["1", "2", "3"];
        updateSettingsCookie();
    } else if (json_str != "") {
        settingsArray = JSON.parse(json_str);
    } else {
        console.error("Settings Cookie Error")
    }
}