auth.onAuthStateChanged(function (user) {
    if (user) {
        if (user != null) {
            var user = auth.currentUser;
            if (user.emailVerified == false) {
                verify();
            }
            if (user.displayName == null) {
                enterName();
            }
            user.providerData.forEach((profile) => {
                var username = document.getElementById("user-name");
                var useremail = document.getElementById("user-email");
                var userphoto = document.getElementById("user-photo");
                username.innerText = profile.displayName;
                useremail.innerHTML = profile.email;
                // document.getElementById("email-verified").style.display =
                //     "block";
            });
        }
    } else {
        window.location = "./index.html";
    }
});
var signout = () => {
    auth.signOut().then(() => {
        window.location = "./index.html";
    });
};
