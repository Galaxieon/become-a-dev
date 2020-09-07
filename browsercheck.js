var browserCheck = () => {
    var browser = navigator.userAgent;
    var message = () => {
        var modal = document.getElementById("myModal");
        var close = document.getElementById("close");
            modal.style.display = "block";
        close.onclick = () => {
            modal.style.display = "none";
        };
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    var error =
        "<h1>Update your Browser</h1>" +
        " Recommened Browsers" +
        "<ul>" +
        "<li>Chrome 80 or Above</li>" +
        "<li>Firefox 80 and above</li>" +
        "<li>Safari 13 or above</li>" +
        "<li>IE 10 or above</li>" +
        "<li>Edge 84 or Above</li>" +
        "<li>Opera 70 or Above</li>" +
        "<li>If your are using Android device use Chrome 80 or above</li>" +
        "</ul>" +
        "<h2>If your browser is latest but the page will not loading...</h2>" +
        "<a href='mailto:galaxieon.dev@gmail.com'>Click here...</a>" +
        "mailto:galaxieon.dev@gmail.com";
    if (browser.includes("Chrome/85")) {
        message();
    } else if (browser.includes("Chrome/80")) {
        message();
    } else if (browser.includes("Firefox/80")) {
        message();
    } else if (browser.includes("Safari/13")) {
        message();
    } else if (browser.includes("MSIE 10.0")) {
        message();
    } else if (browser.includes("Opera/70")) {
        message();
    } else if (browser.includes("Edg/79.0.309.43")) {
        message();
    } else {
        document.write(error);
        window.stop();
    }
};
