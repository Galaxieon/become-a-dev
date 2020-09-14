let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
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
                message.style.color = "#1eff09";
                send.style.display = "none";
                resend.style.display = "inline-block";
            })
            .catch(function (error) {
                message.innerHTML = error.message;
                message.style.color = "#f44336";
            });
    });
};
var enterName = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var name = document.getElementById("name");
    name.classList.toggle("active");
    var message = document.getElementById("name-message");
    var createName = document.getElementById("createName");
    var update = document.getElementById("update");
    var close = document.getElementById("close");
    update.addEventListener("click", () => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: createName.value,
        })
            .then(function () {
                message.innerHTML = "Name Updated SucessFully";
                message.style.color = "#1eff09";
                createName.readOnly = true;
                update.style.display = "none";
                close.style.display = "inline-block";
            })
            .catch(function (error) {
                message.innerHTML = error.message;
                message.style.color = "#f44336";
            });
    });
};
var edit = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var editProfile = document.getElementById("edit-profile");
    editProfile.classList.toggle("active");
    var profileMessage = document.getElementById("profile-message");
    var profileName = document.getElementById("profile-name");
    var profileMail = document.getElementById("profile-mail");
    var profileUpdate = document.getElementById("profile-update");
    var profileDiscard = document.getElementById("profile-discard");
    var profileClose = document.getElementById("profile-close");
    var user = firebase.auth().currentUser;
    profileName.value = user.displayName;
    profileMail.value = user.email;
    profileUpdate.addEventListener("click", () => {
        user.updateProfile({
            displayName: profileName.value,
        })
            .then(() => {
                user.updateEmail(profileMail.value)
                    .then(() => {
                        // Update successful.
                        profileMessage.innerHTML =
                            "Profile Updated Sucessfully";
                        profileMessage.style.color = "#1eff09";
                        profileName.readOnly = true;
                        profileMail.readOnly = true;
                        profileUpdate.style.display = "none";
                        profileDiscard.style.display = "none";
                        profileClose.style.display = "inline-block";
                    })
                    .catch((error) => {
                        // An error happened.
                        profileMessage.innerHTML = error.message;
                        profileMessage.style.color = "#f44336";
                    });
            })
            .catch((error) => {
                profileMessage.innerHTML = error.message;
                profileMessage.style.color = "#f44336";
            });
    });
};

var passChange = () => {
    var blur = document.getElementById("s1");
    blur.classList.toggle("active");
    var changePassword = document.getElementById("change-password");
    changePassword.classList.toggle("active");
    var passwordMessage = document.getElementById("password-message");
    var newPassword = document.getElementById("new-password");
    var confirmPassword = document.getElementById("confirm-password");
    var updatePassword = document.getElementById("update-password");
    var discardPassword = document.getElementById("discard-password");
    var closePassword = document.getElementById("close-password");
    updatePassword.addEventListener("click", () => {
        if (newPassword.value == confirmPassword.value) {
            var user = firebase.auth().currentUser;
            user.updatePassword(newPassword.value)
                .then(() => {
                    // Update successful.
                    passwordMessage.innerHTML = "Password Changed Sucessfully";
                    passwordMessage.style.color = "#1eff09";
                    newPassword.readOnly = true;
                    confirmPassword.readOnly = true;
                    updatePassword.style.display = "none";
                    discardPassword.style.display = "none";
                    closePassword.style.display = "inline-block";
                    var user = firebase.auth().currentUser;
                    var credential = firebase.auth.EmailAuthProvider.credential(
                        user.email,
                        newPassword.value
                    );
                    // Prompt the user to re-provide their sign-in credentials

                    user.reauthenticateWithCredential(credential)
                        .then(function () {
                            // User re-authenticated.
                            location.reload();
                        })
                        .catch(function (error) {
                            passwordMessage.innerHTML = error.message;
                            passwordMessage.style.color = "#f44336";
                        });
                })
                .catch((error) => {
                    // An error happened.
                    passwordMessage.innerHTML = error.message;
                    passwordMessage.style.color = "#f44336";
                });
        } else {
            passwordMessage.innerHTML = "Password Doesnot match";
            passwordMessage.style.color = "#f44336";
        }
    });
};
