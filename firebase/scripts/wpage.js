var toggleMenu = () => {
    var navigation = document.getElementById("nav");
    var toggle = document.getElementById("toggle");
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
};
var user = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var userProfile = document.getElementById("user-profile");
    userProfile.classList.toggle("active");
};
var logout = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var signout = document.getElementById("signout");
    signout.classList.toggle("active");
};
var verify = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var verify = document.getElementById("verify");
    verify.classList.toggle("active");
    var send = document.getElementById("send");
    var resend = document.getElementById("resend");
    var message = document.getElementById("verify-message");
    send.addEventListener("click", () => {
        var user = firebase.auth().currentUser;

        user.sendEmailVerification()
            .then(function () {
                message.innerHTML = "Verication Mail Sent to " + user.email;
                send.style.display = "none";
                resend.style.display = "inline-block";
            })
            .catch(function (error) {
                message.innerHTML = error.message;
            });
    });
};
