let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
var message = document.getElementById("message");
var email = document.getElementById("email");
var icon = document.getElementById("icon");
var signin = document.getElementById("signin");
var getlink = document.getElementById("getlink");
var resend = document.getElementById("resendlink");
var recoverform = document.getElementById("recover-form");
recoverform.addEventListener("submit", (e) => {
    e.preventDefault();
    var auth = firebase.auth();
    var emailAddress = email.value;
    auth.sendPasswordResetEmail(emailAddress)
        .then(() => {
            message.innerText = "Link Sent to your Mail " + email.value;
            message.style.fontSize = "25px";
            icon.style.display = "none";
            getlink.style.display = "none";
            signin.style.display = "block";
            resend.style.display = "block";
        })
        .catch((error) => {
            message.innerText = error.message;
            message.style.fontSize = "25px";
        });
});
