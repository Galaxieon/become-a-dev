//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //getinng user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    //signup the user
    auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            return db.collection("user").doc(cred.user.uid).set({
                Name: signupForm["name"].value,
            });
        })
        .then(() => {
            window.location = "./welcome.html";
            signupForm.reset();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            document.getElementById("error-sup").innerHTML = errorMessage;
        });
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        window.location = "./welcome.html";
        loginForm.reset();
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("error-sin").innerHTML = errorMessage;
    });
});
