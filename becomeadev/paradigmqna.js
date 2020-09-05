var A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A11,
    A12,
    A13,
    A14,
    A15,
    A16,
    A17,
    A18,
    A21,
    A22,
    A23,
    A24,
    A25,
    A26,
    A27,
    A28;
A1 = document.getElementById("A1");
A2 = document.getElementById("A2");
A3 = document.getElementById("A3");
A4 = document.getElementById("A4");
A5 = document.getElementById("A5");
A6 = document.getElementById("A6");
A7 = document.getElementById("A7");
A8 = document.getElementById("A8");
A11 = document.getElementById("A11");
A12 = document.getElementById("A12");
A13 = document.getElementById("A13");
A14 = document.getElementById("A14");
A15 = document.getElementById("A15");
A16 = document.getElementById("A16");
A17 = document.getElementById("A17");
A18 = document.getElementById("A18");
A21 = document.getElementById("A21");
A22 = document.getElementById("A22");
A23 = document.getElementById("A23");
A24 = document.getElementById("A24");
A25 = document.getElementById("A25");
A26 = document.getElementById("A26");
A27 = document.getElementById("A27");
A28 = document.getElementById("A28");
var pop = [
    "Data is undervalued",
    "Procedure is given importance",
    "Creating new data types is difficult",
    "Poor real world modeling",
];
var opp = [
    "Data is given importance",
    "Procedure is driven by data",
    "New data types and associated operations can easily be defined",
    "Easy to define real world scenarios",
];
var checkAns1 = () => {
    if (
        A1.value == pop[0] ||
        A1.value == pop[1] ||
        A1.value == pop[2] ||
        A1.value == pop[3]
    ) {
        A11.style.display = "inline";
        A21.style.display = "none";
    } else {
        A21.style.display = "inline";
        A11.style.display = "none";
    }
    if (
        A2.value == pop[0] ||
        A2.value == pop[1] ||
        A2.value == pop[2] ||
        A2.value == pop[3]
    ) {
        A12.style.display = "inline";
        A22.style.display = "none";
    } else {
        A22.style.display = "inline";
        A12.style.display = "none";
    }
    if (
        A3.value == pop[0] ||
        A3.value == pop[1] ||
        A3.value == pop[2] ||
        A3.value == pop[3]
    ) {
        A13.style.display = "inline";
        A23.style.display = "none";
    } else {
        A23.style.display = "inline";
        A13.style.display = "none";
    }
    if (
        A4.value == pop[0] ||
        A4.value == pop[1] ||
        A4.value == pop[2] ||
        A4.value == pop[3]
    ) {
        A14.style.display = "inline";
        A24.style.display = "none";
    } else {
        A24.style.display = "inline";
        A14.style.display = "none";
    }
    if (
        A5.value == opp[0] ||
        A5.value == opp[1] ||
        A5.value == opp[2] ||
        A5.value == opp[3]
    ) {
        A15.style.display = "inline";
        A25.style.display = "none";
    } else {
        A25.style.display = "inline";
        A15.style.display = "none";
    }
    if (
        A6.value == opp[0] ||
        A6.value == opp[1] ||
        A6.value == opp[2] ||
        A6.value == opp[3]
    ) {
        A16.style.display = "inline";
        A26.style.display = "none";
    } else {
        A26.style.display = "inline";
        A16.style.display = "none";
    }
    if (
        A7.value == opp[0] ||
        A7.value == opp[1] ||
        A7.value == opp[2] ||
        A7.value == opp[3]
    ) {
        A17.style.display = "inline";
        A27.style.display = "none";
    } else {
        A27.style.display = "inline";
        A17.style.display = "none";
    }
    if (
        A8.value == opp[0] ||
        A8.value == opp[1] ||
        A8.value == opp[2] ||
        A8.value == opp[3]
    ) {
        A18.style.display = "inline";
        A28.style.display = "none";
    } else {
        A28.style.display = "inline";
        A18.style.display = "none";
    }
    if (
        A11.style.display == "inline" &&
        A12.style.display == "inline" &&
        A13.style.display == "inline" &&
        A14.style.display == "inline" &&
        A15.style.display == "inline" &&
        A16.style.display == "inline" &&
        A17.style.display == "inline" &&
        A18.style.display == "inline"
    ) {
        document.getElementById("crt1").style.display = "block";
        document.getElementById("wrng1").style.display = "none";
        document.getElementById("null1").style.display = "none";
    } else {
        document.getElementById("wrng1").style.display = "block";
        document.getElementById("crt1").style.display = "none";
        document.getElementById("null1").style.display = "none";
    }
    if (
        A1.value == "" &&
        A2.value == "" &&
        A3.value == "" &&
        A4.value == "" &&
        A5.value == "" &&
        A6.value == "" &&
        A7.value == "" &&
        A8.value == ""
    ) {
        document.getElementById("crt1").style.display = "none";
        document.getElementById("wrng1").style.display = "none";
        document.getElementById("null1").style.display = "block";
        A11.style.display = "none";
        A12.style.display = "none";
        A13.style.display = "none";
        A14.style.display = "none";
        A15.style.display = "none";
        A16.style.display = "none";
        A17.style.display = "none";
        A18.style.display = "none";
        A21.style.display = "none";
        A22.style.display = "none";
        A23.style.display = "none";
        A24.style.display = "none";
        A25.style.display = "none";
        A26.style.display = "none";
        A27.style.display = "none";
        A28.style.display = "none";
    }
};
var showAns1 = () => {
    A1.value = pop[0];
    A2.value = pop[1];
    A3.value = pop[2];
    A4.value = pop[3];
    A5.value = opp[0];
    A6.value = opp[1];
    A7.value = opp[2];
    A8.value = opp[3];
    document.getElementById("ans1").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("reset1").style.display = "inline";
    document.getElementById("crt1").style.display = "none";
    document.getElementById("wrng1").style.display = "none";
    document.getElementById("null1").style.display = "none";
};
var reset1 = () => {
    A1.value = "";
    A2.value = "";
    A3.value = "";
    A4.value = "";
    A5.value = "";
    A6.value = "";
    A7.value = "";
    A8.value = "";
    document.getElementById("ans1").style.display = "inline";
    document.getElementById("submit1").style.display = "inline";
    document.getElementById("reset1").style.display = "none";
};
var B1, B2;
B1 = document.getElementById("B1");
B2 = document.getElementById("B2");
var ans = [
    "OOP provides a clear modular structure for programs",
    "It is good for defining abstract data types",
    "Implementation details are hidden from other modules and have a clearly defined interface",
    "It is easy to maintain and modify the existing code as new objects can be created without disturbing the existing ones",
    "It can be used to implement real life scenarios",
    "It can define new data types as well as new operations for operators",
];
var checkAns2 = () => {
    if (
        (B1.value == ans[0] ||
            B1.value == ans[1] ||
            B1.value == ans[2] ||
            B1.value == ans[3] ||
            B1.value == ans[4] ||
            B1.value == ans[5]) &&
        (B2.value == ans[0] ||
            B2.value == ans[1] ||
            B2.value == ans[2] ||
            B2.value == ans[3] ||
            B2.value == ans[4] ||
            B2.value == ans[5])
    ) {
        document.getElementById("crt2").style.display = "block";
        document.getElementById("wrng2").style.display = "none";
        document.getElementById("null2").style.display = "none";
    } else {
        document.getElementById("wrng2").style.display = "block";
        document.getElementById("crt2").style.display = "none";
        document.getElementById("null2").style.display = "none";
    }
    if (B1.value == "" && B2.value == "") {
        document.getElementById("crt2").style.display = "none";
        document.getElementById("wrng2").style.display = "none";
        document.getElementById("null2").style.display = "block";
    }
};
var showAns2 = () => {
    B1.value = ans[0];
    B2.value = ans[1];
    document.getElementById("ans2").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("reset2").style.display = "inline";
    document.getElementById("crt2").style.display = "none";
    document.getElementById("wrng2").style.display = "none";
    document.getElementById("null2").style.display = "none";
};
var reset2 = () => {
    B1.value = "";
    B2.value = "";
    document.getElementById("ans2").style.display = "inline";
    document.getElementById("submit2").style.display = "inline";
    document.getElementById("reset2").style.display = "none";
};
var c1,
    c2,
    c3,
    c4,
    c5,
    c11,
    c12,
    c13,
    c14,
    c15,
    c21,
    c22,
    c23,
    c24,
    c25,
    c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
c4 = document.getElementById("c4");
c5 = document.getElementById("c5");
c11 = document.getElementById("c11");
c12 = document.getElementById("c12");
c13 = document.getElementById("c13");
c14 = document.getElementById("c14");
c15 = document.getElementById("c15");
c21 = document.getElementById("c21");
c22 = document.getElementById("c22");
c23 = document.getElementById("c23");
c24 = document.getElementById("c24");
c25 = document.getElementById("c25");
var da, de, pl, inh, mo;
da =
    "It refers to showing only the essential features of the application and hiding the details from the outside world";
de = "It binds the data and functions together and keeps them safe";
pl =
    "The ability to process objects differently depending on their data type or class";
inh =
    "It is the process by which objects of one class acquire the properties and behaviour of another class";
mo =
    "A concept through which a program is partitioned into small segments called modules";
var checkAns3 = () => {
    if (c1.value == da) {
        c11.style.display = "inline";
        c21.style.display = "none";
    } else {
        c21.style.display = "inline";
        c11.style.display = "none";
    }
    if (c2.value == de) {
        c12.style.display = "inline";
        c22.style.display = "none";
    } else {
        c22.style.display = "inline";
        c12.style.display = "none";
    }
    if (c3.value == pl) {
        c13.style.display = "inline";
        c23.style.display = "none";
    } else {
        c23.style.display = "inline";
        c13.style.display = "none";
    }
    if (c4.value == inh) {
        c14.style.display = "inline";
        c24.style.display = "none";
    } else {
        c24.style.display = "inline";
        c14.style.display = "none";
    }
    if (c5.value == mo) {
        c15.style.display = "inline";
        c25.style.display = "none";
    } else {
        c25.style.display = "inline";
        c15.style.display = "none";
    }
    if (
        c11.style.display == "inline" &&
        c12.style.display == "inline" &&
        c13.style.display == "inline" &&
        c14.style.display == "inline" &&
        c15.style.display == "inline"
    ) {
        document.getElementById("crt3").style.display = "block";
        document.getElementById("wrng3").style.display = "none";
        document.getElementById("null3").style.display = "none";
    } else {
        document.getElementById("wrng3").style.display = "block";
        document.getElementById("crt3").style.display = "none";
        document.getElementById("null3").style.display = "none";
    }
    if (
        c1.value == "" &&
        c2.value == "" &&
        c3.value == "" &&
        c4.value == "" &&
        c5.value == ""
    ) {
        document.getElementById("crt3").style.display = "none";
        document.getElementById("wrng3").style.display = "none";
        document.getElementById("null3").style.display = "block";
        c11.style.display = "none";
        c12.style.display = "none";
        c13.style.display = "none";
        c14.style.display = "none";
        c15.style.display = "none";
        c21.style.display = "none";
        c22.style.display = "none";
        c23.style.display = "none";
        c24.style.display = "none";
        c25.style.display = "none";
    }
};
var showAns3 = () => {
    c1.value = da;
    c2.value = de;
    c3.value = pl;
    c4.value = inh;
    c5.value = mo;
    document.getElementById("ans3").style.display = "none";
    document.getElementById("submit3").style.display = "none";
    document.getElementById("reset3").style.display = "inline";
    document.getElementById("crt3").style.display = "none";
    document.getElementById("wrng3").style.display = "none";
    document.getElementById("null3").style.display = "none";
};
var reset3 = () => {
    c1.value = "";
    c2.value = "";
    c3.value = "";
    c4.value = "";
    c5.value = "";
    document.getElementById("ans3").style.display = "inline";
    document.getElementById("submit3").style.display = "inline";
    document.getElementById("reset3").style.display = "none";
};
