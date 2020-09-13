let spinnerWrapper = document.querySelector('.spinner-wrapper');

    window.addEventListener('load', function () {
        // spinnerWrapper.style.display = 'none';
        spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    });
//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //getinng user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    //signup the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location = "./welcome.html";
            signupForm.reset();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            document.getElementById("error-sin").style.visibility = "hidden";
            document.getElementById("error-sup").style.visibility = "visible";
            document.getElementById("error-sup").innerHTML = errorMessage;
        });
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
            window.location = "./welcome.html";
            loginForm.reset();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            document.getElementById("error-sup").style.visibility = "hidden";
            document.getElementById("error-sin").style.visibility = "visible";
            document.getElementById("error-sin").innerHTML = errorMessage;
        });
});

var googleLog = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithRedirect(provider)
        .then(() => {
            window.location = "./welcome.html";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            document.getElementById("error-sin").style.visibility = "hidden";
            document.getElementById("error-sup").style.visibility = "visible";
            document.getElementById("error-sup").innerHTML = errorMessage;
        });
};
firebase.auth().getRedirectResult().then(function(result) {

    var user = result.user;
    if (user) {
        window.location = "./welcome.html";
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
