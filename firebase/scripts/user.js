auth.onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        var userdata = db
            .collection("user")
            .doc(user.uid)
            .onSnapshot(doc => {
                document.getElementById("a1").innerHTML =
                    "Hi, " + doc.data().Name;
                document.getElementById("title").innerHTML =
                    "Welcome, " + doc.data().Name;
            });
        var changebtn = document.getElementById("btn");
        var name = document.getElementById("name");
        changebtn.addEventListener("click", (e) => {
            db.collection("user").doc(user.uid).update({
                Name: name.value,
            });
        });
    } else {
        // User is not signned in
        window.location = "./index.html";
    }
});

//logout
const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location = "./index.html";
    });
});
