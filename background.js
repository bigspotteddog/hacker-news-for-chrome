var firstRequest = true;

function startRequest() {
    UpdateIfReady(firstRequest);
    firstRequest = false;
    window.setTimeout(startRequest, 6e4);
}

function init() {
    if (localStorage["HN.Notifications"] == null) {
        var notification = webkitNotifications.createHTMLNotification("initialNotification.html");
        notification.show();
        localStorage["HN.Notifications"] = false;
    }
    SetInitialOption("HN.RequestInterval", 12e5);
    SetInitialOption("HN.BackgroundTabs", false);
    startRequest();
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});