const signupbtn = document.getElementById("signup-btn");
const loginbtn = document.getElementById("signin-btn");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");

var sup = () => {
    c1.style.display = "block";
    c2.style.display = "none";
    signupbtn.style.display = "none";
    loginbtn.style.display = "none"
};

var sin = () => {
    c2.style.display = "block";
    c1.style.display = "none";
    signupbtn.style.display = "none";
    loginbtn.style.display = "none";
};