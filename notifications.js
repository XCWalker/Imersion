// Notifications
var notifications = [];
var prevNotificationLength = 0;
var notificationState = 0;
var notifactionPaneState = 0;

// Cookies
function updateNotificationCookie() {
    var json_str = JSON.stringify(notifications);
    createCookie('notificationCookie', json_str, "1");
}

function loadNotificationCookie() {
    var json_str = getCookie('notificationCookie');
    if (json_str == "[]" || json_str === undefined) {
        // Sets defaults
        console.log("Using Defaults")
        notifications = [];
        updateNotificationCookie();
    } else if (json_str != "[]") {
        notifications = JSON.parse(json_str);
    } else {
        console.error("Notification Cookie Error")
    }
    notificationIonUpdate();
}

loadNotificationCookie();
notificationIonUpdate();

// Icon
function notificationIonUpdate() {
    var notifactionIconMute = document.getElementById('notifactions-mute');
    var notifactionIconNew = document.getElementById('notifactions-new');
    var notifactionIconPresent = document.getElementById('notifactions-present');
    var notifactionIconNone = document.getElementById('notifactions-none');

    if (notificationState === 3) {
        // Sets Notifaction To Muted
        var notifactionIcon = notifactionIconMute;
    } else if (notifications.length > prevNotificationLength && notifications.length != 0) {
        // Sets for new notifactions
        var notifactionIcon = notifactionIconNew;
        prevNotificationLength = notifications.length;
    } else if (notifications.length != 0) {
        // Sets for notifactions
        var notifactionIcon = notifactionIconPresent;
    } else {
        // Sets for no notifactions
        var notifactionIcon = notifactionIconNone;
    }

    notifactionIconMute.classList.remove('visible');
    notifactionIconNew.classList.remove('visible');
    notifactionIconPresent.classList.remove('visible');
    notifactionIconNone.classList.remove('visible');
    notifactionIcon.classList.add('visible');
}

// New Notifications
function notifactionPush(title, iconURL, description, href, imageURL) {
    const notificationDate = new Date();
    notifications.push({ title: title, iconURL: iconURL, description: description, href: href, imageURL: imageURL, time: notificationDate.toJSON() });
    notificationIonUpdate();
    newNotificationPopupCheck();
    updateNotificationCookie();
    return "notification Sent"
}

const notificationTemplate = document.querySelector("[data-notification-popup-template]");
const notificationContainer = document.querySelector("[data-notification-popup-container]");

var notifactionsOnHold = 0;

function newNotificationPopupCheck() {
    notifactionsOnHold++;
    const checkLoop = setInterval(check, 1000);
    function check() {
        if (notificationContainer.children.length == 1) {
            if (notifactionPaneState == 0) {
                clearInterval(checkLoop);
                notifactionsOnHold--;
                newNotificationPopup();
            }
        }
    }
}

function newNotificationPopup() {
    var notif = notifications[notifications.length - 1 - notifactionsOnHold];
    if (notif == undefined) {
        return "No Notification"
    }

    const popup = notificationTemplate.content.cloneNode(true).children[0];
    const popupTitle = popup.querySelector("[data-notification-popup-title]");
    const popupDate = popup.querySelector("[data-notification-popup-date]");
    const popupIcon = popup.querySelector("[data-notification-popup-icon]");
    const popupDescription = popup.querySelector("[data-notification-popup-description]");
    const popupImage = popup.querySelector("[data-notification-popup-image]");
    const popupImageContainer = popup.querySelector("[data-notification-popup-image-container]");

    const popupIconContainer = popup.querySelector("[data-notification-popup-icon-container]");
    if (notif.iconURL == undefined) {
        popupIconContainer.classList.add('hidden');
    }

    popupTitle.textContent = notif.title;
    popupDate.textContent = new Date(notif.time).toLocaleTimeString() + " | " + new Date(notif.time).toLocaleDateString();
    popupIcon.src = notif.iconURL;
    popupDescription.textContent = notif.description;
    popupImage.src = notif.imageURL;
    popup.href = notif.href;

    if (notif.imageURL == undefined) {
        popupImageContainer.classList.add('hidden');
    }

    notificationContainer.append(popup);

    setTimeout(function () {
        notificationContainer.children[1].classList.add('visible');
    }, 100);

    setTimeout(function () {
        notificationContainer.children[1].classList.remove('visible');
        setTimeout(function () {
            notificationContainer.children[1].remove();
        }, 500)
    }, 5000)
}

const notificationPanelTemplate = document.querySelector("[data-notification-panel-item-template]");
const notificationPanelContainer = document.querySelector("[data-notification-panel-container]");

function openNotificationPane() {
    notificationIonUpdate();
    if (notifications.length == 0) {
        return ("No Notifications")
    }

    if (notificationContainer.children.length == 2) {
        notificationContainer.children[1].classList.remove('visible');
        setTimeout(function () {
            notificationContainer.children[1].remove();
        }, 500)
    }

    var notifactionPane = document.getElementById('notification-panel');

    if (notifactionPane.classList.contains('visible')) {
        notifactionPane.classList.remove('visible')
        notifactionPaneState = 0;
        setTimeout(function () {
            const clearLoop = setInterval(clear, 10);
            function clear() {
                if (notificationPanelContainer.children.length > 2) {
                    console.log("Removing Child")
                    notificationPanelContainer.children[2].remove();
                } else if (notificationPanelContainer.children.length == 2) {
                    console.log("All Children Removed")
                    clearInterval(clearLoop);
                }
            }
        }, 500)

    } else if (!notifactionPane.classList.contains('visible')) {
        notifactionPaneState = 1;
        notifications.map(notif => {
            const notification = notificationPanelTemplate.content.cloneNode(true).children[0];
            const notificationTitle = notification.querySelector("[data-notification-panel-item-title]");
            const notificationDate = notification.querySelector("[data-notification-panel-item-date]");
            const notificationIcon = notification.querySelector("[data-notification-panel-item-icon]");
            const notificationDescription = notification.querySelector("[data-notification-panel-item-description]");
            const notificationImage = notification.querySelector("[data-notification-panel-item-image]");
            const notificationImageContainer = notification.querySelector("[data-notification-panel-item-image-container]");

            const notificationIconContainer = notification.querySelector("[data-notification-panel-item-icon-container]");
            if (notif.iconURL == undefined) {
                notificationIconContainer.classList.add('hidden');
            }

            notificationTitle.textContent = notif.title;
            notificationDate.textContent = new Date(notif.time).toLocaleTimeString() + " | " + new Date(notif.time).toLocaleDateString();
            notificationIcon.src = notif.iconURL;
            notificationDescription.textContent = notif.description;
            notificationImage.src = notif.imageURL;
            notification.href = notif.href;

            if (notif.imageURL == undefined) {
                notificationImageContainer.classList.add('hidden');
            }

            notificationPanelContainer.append(notification);
        });

        notifactionPane.classList.add('visible')
    } else {
        console.error('Notification Pane Classlist Error')
    }
}

function clearNotifications() {
    openNotificationPane();
    notifications = [];
    updateNotificationCookie();
    notificationIonUpdate();
}