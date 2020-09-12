auth.onAuthStateChanged(function (user) {
    if (user) {
        if (user != null) {
            var user = auth.currentUser;
            var name, email, photoUrl, uid, emailVerified;
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
            if (emailVerified == true) {
                var username = document.getElementById("user-name");
                var useremail = document.getElementById("user-email");
                username.innerText = name;
                useremail.innerHTML = email;
                document.getElementById("email-verified").style.display =
                    "block";
            } else {
                verify();
            }
            // var btn = document.getElementById("btn");
            // var newName = document.getElementById("name");
            // btn.addEventListener("click", () => {
            //     user.updateProfile({
            //         displayName: newName.value,
            //     })
            //         .then(() => {
            //             var a1 = document.getElementById("a1");
            //             a1.innerHTML = "Welcome " + name;
            //             console.log("Update Sucessfull");
            //             location.reload();
            //         })
            //         .catch((error) => {
            //             console.log(error.message);
            //         });
            // });
        }
    } else {
        window.location = "./index.html";
    }
});
// logout
// const logout = document.getElementById("logout");
// logout.addEventListener("click", (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         window.location = "./index.html";
//     });
// });

var signout = () => {
    auth.signOut().then(() => {
        window.location = "./index.html";
    });
};
