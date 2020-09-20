let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
var verify = () => {
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
var modal = document.getElementById("modal");
var profile = () => {
    modal.classList.toggle("active");
};
var closepop = () => {
    modal.classList.remove("active");
};
var editinfo = () => {
    var editinfo = document.getElementById("edit-info");
    editinfo.classList.toggle("active");
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
var changepass = () => {
    var changepass = document.getElementById("change-pass");
    changepass.classList.toggle("active");
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
var logout = () => {
    var signout = document.getElementById("signout");
    signout.classList.toggle("active");
};
//chapter1 data reteivel english
db.collection("chapters12eng")
    .doc("1")
    .get()
    .then((doc) => {
        var cname = document.getElementById("c1name");
        var ename = document.getElementById("e1name");
        var e1 = document.getElementById("e1");
        let li = document.createElement("li");
        let loc = document.createElement("a");
        loc.setAttribute("href", doc.data().Location);
        cname.innerHTML = doc.data().Name;
        ename.innerHTML = doc.data().Name;
        li.setAttribute("data-id", doc.id);
        loc.textContent = doc.data().Exeresies;
        li.appendChild(loc);
        e1.appendChild(li);
    })
    .catch((error) => {
        var cname = document.getElementById("c1name");
        cname.innerHTML = error.message;
    });

db.collection("chapters12eng")
    .doc("1")
    .collection("topics")
    .get()
    .then((snap) => {
        snap.forEach((doc) => {
            disptc1(doc);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
var disptc1 = (doc) => {
    var list = document.getElementById("c1");
    let li = document.createElement("li");
    let name = document.createElement("a");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().Name;
    name.setAttribute("herf", doc.data().Location);
    li.appendChild(name);

    list.appendChild(li);
};
//chapter 2 data retrievel english
db.collection("chapters12eng")
    .doc("2")
    .get()
    .then((doc) => {
        var cname = document.getElementById("c2name");
        var ename = document.getElementById("e2name");
        var e1 = document.getElementById("e2");
        let li = document.createElement("li");
        let loc = document.createElement("a");
        loc.setAttribute("href", doc.data().Location);
        cname.innerHTML = doc.data().Name;
        ename.innerHTML = doc.data().Name;
        li.setAttribute("data-id", doc.id);
        loc.textContent = doc.data().Exercises;
        li.appendChild(loc);
        e1.appendChild(li);
    })
    .catch((error) => {
        var cname = document.getElementById("c2name");
        cname.innerHTML = error.message;
    });

db.collection("chapters12eng")
    .doc("2")
    .collection("topics")
    .get()
    .then((snap) => {
        snap.forEach((doc) => {
            disptc2(doc);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
var disptc2 = (doc) => {
    var list = document.getElementById("c2");
    let li = document.createElement("li");
    let name = document.createElement("a");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().Name;
    name.setAttribute("href", doc.data().Location);
    li.appendChild(name);

    list.appendChild(li);
};
// chapter 3 data retrivel
db.collection("chapters12eng")
    .doc("3")
    .get()
    .then((doc) => {
        var cname = document.getElementById("c3name");
        cname.innerHTML = doc.data().Name;
    })
    .catch((error) => {
        var cname = document.getElementById("c3name");
        cname.innerHTML = error.message;
    });

db.collection("chapters12eng")
    .doc("3")
    .collection("topics")
    .get()
    .then((snap) => {
        snap.forEach((doc) => {
            disptc3(doc);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
var disptc3 = (doc) => {
    var list = document.getElementById("c3");
    let li = document.createElement("li");
    let name = document.createElement("a");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().Name;
    name.setAttribute("href", doc.data().Location);
    li.appendChild(name);

    list.appendChild(li);
};
var deleteac = () => {
    var deleteac = document.getElementById("delete");
    deleteac.classList.toggle("active");
    var user = auth.currentUser;
    var message = document.getElementById("delete-message");
    user.delete()
        .then(function () {
            message.innerHTML = "Your Account Delete Sucess Fully";
        })
        .catch(function (error) {
            message.innerHTML = error.message;
        });
};
