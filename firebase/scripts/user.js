auth.onAuthStateChanged(function (user) {
    if (user) {
        if (user != null) {
            var user = auth.currentUser;
            if (user.emailVerified == false) {
                verify();
            }
            if (name == null) {
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
                if (profile.photoURL != null) {
                    userphoto.src = profile.photoURL;
                } else {
                    userphoto.src = "./img/user.svg";
                }
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
