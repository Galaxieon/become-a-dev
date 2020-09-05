var a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    result = "";
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
a4 = document.getElementById("a4");
a5 = document.getElementById("a5");
a6 = document.getElementById("a6");
a7 = document.getElementById("a7");
var checkAns1 = () => {
    if (
        a1.value == "struct" &&
        a2.value == "int" &&
        a3.value == "char" &&
        a4.value == "[20]" &&
        a5.value == "char" &&
        a6.value == "[20]" &&
        a7.value == "float"
    ) {
        document.getElementById("crt").style.display = "block";
        document.getElementById("wrng").style.display = "none";
        document.getElementById("null").style.display = "none";
    } else if (
        a1.value == "" &&
        a2.value == "" &&
        a3.value == "" &&
        a4.value == "" &&
        a5.value == "" &&
        a6.value == "" &&
        a7.value == ""
    ) {
        document.getElementById("crt").style.display = "none";
        document.getElementById("wrng").style.display = "none";
        document.getElementById("null").style.display = "block";
    } else {
        document.getElementById("wrng").style.display = "block";
        document.getElementById("crt").style.display = "none";
        document.getElementById("null").style.display = "none";
    }
};
var showAns1 = () => {
    a1.value = "struct";
    a2.value = "int";
    a3.value = "char";
    a4.value = "[20]";
    a5.value = "char";
    a6.value = "[20]";
    a7.value = "float";
    document.getElementById("ans").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("reset").style.display = "inline";
    document.getElementById("crt").style.display = "none";
    document.getElementById("wrng").style.display = "none";
    document.getElementById("null").style.display = "none";
};
var reset1 = () => {
    a1.value = "";
    a2.value = "";
    a3.value = "";
    a4.value = "";
    a5.value = "";
    a6.value = "";
    a7.value = "";
    document.getElementById("ans").style.display = "inline";
    document.getElementById("submit").style.display = "inline";
    document.getElementById("reset").style.display = "none";
};
var b1, b2;
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
var checkAns2 = () => {
    if (b1.value == "complex c1;" && b2.value == "c1.real=15;") {
        document.getElementById("crt1").style.display = "block";
        document.getElementById("wrng1").style.display = "none";
        document.getElementById("null1").style.display = "none";
    } else if (b1.value == "" && b2.value == "") {
        document.getElementById("crt1").style.display = "none";
        document.getElementById("wrng1").style.display = "none";
        document.getElementById("null1").style.display = "block";
    } else {
        document.getElementById("wrng1").style.display = "block";
        document.getElementById("crt1").style.display = "none";
        document.getElementById("null1").style.display = "none";
    }
};
var showAns2 = () => {
    b1.value = "complex c1;";
    b2.value = "c1.real=15;";
    document.getElementById("ans1").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("reset1").style.display = "inline";
    document.getElementById("crt1").style.display = "none";
    document.getElementById("wrng1").style.display = "none";
    document.getElementById("null1").style.display = "none";
};
var reset2 = () => {
    b1.value = "";
    b2.value = "";
    document.getElementById("ans1").style.display = "inline";
    document.getElementById("submit1").style.display = "inline";
    document.getElementById("reset1").style.display = "none";
};
var c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c21,
    c22,
    c23,
    c24,
    c25,
    c26;
c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
c4 = document.getElementById("c4");
c5 = document.getElementById("c5");
c6 = document.getElementById("c6");
c11 = document.getElementById("c11");
c12 = document.getElementById("c12");
c13 = document.getElementById("c13");
c14 = document.getElementById("c14");
c15 = document.getElementById("c15");
c16 = document.getElementById("c16");
c21 = document.getElementById("c21");
c22 = document.getElementById("c22");
c23 = document.getElementById("c23");
c24 = document.getElementById("c24");
c25 = document.getElementById("c25");
c26 = document.getElementById("c26");
var checkAns3 = () => {
    var array = [
        "It is a derived data type",
        "A collection of the same type of data",
        "Elements of an array are referenced using the corresponding subscripts",
        "When an element of an array becomes another array, a multidimensional array is formed",
        "Arrays of structure are possible",
    ];
    var structure = [
        "It is a user defined data type",
        "A collection of different types of data",
        "Elements of a structure are referenced using dot operator(.)",
        "When an element of a structure becomes another structure,a nested structure is formed",
        "Structure can contain arrays as elements",
    ];
    // Array
    if (
        c1.value == array[0] ||
        c1.value == array[1] ||
        c1.value == array[2] ||
        c1.value == array[3] ||
        c1.value == array[4]
    ) {
        // console.log(true);
        c11.style.display = "inline";
        c21.style.display = "none";
    } else {
        c21.style.display = "inline";
        c11.style.display = "none";
    }
    if (
        c2.value == array[0] ||
        c2.value == array[1] ||
        c2.value == array[2] ||
        c2.value == array[3] ||
        c2.value == array[4]
    ) {
        // console.log(true);
        c12.style.display = "inline";
        c22.style.display = "none";
    } else {
        c22.style.display = "inline";
        c12.style.display = "none";
    }
    if (
        c3.value == array[0] ||
        c3.value == array[1] ||
        c3.value == array[2] ||
        c3.value == array[3] ||
        c3.value == array[4]
    ) {
        // console.log(true);
        c13.style.display = "inline";
        c23.style.display = "none";
    } else {
        c23.style.display = "inline";
        c13.style.display = "none";
    }
    // Structure
    if (
        c4.value == structure[0] ||
        c4.value == structure[1] ||
        c4.value == structure[2] ||
        c4.value == structure[3] ||
        c4.value == structure[4]
    ) {
        // console.log(true);
        c14.style.display = "inline";
        c24.style.display = "none";
    } else {
        c24.style.display = "inline";
        c14.style.display = "none";
    }
    if (
        c5.value == structure[0] ||
        c5.value == structure[1] ||
        c5.value == structure[2] ||
        c5.value == structure[3] ||
        c5.value == structure[4]
    ) {
        // console.log(true);
        c15.style.display = "inline";
        c25.style.display = "none";
    } else {
        c25.style.display = "inline";
        c15.style.display = "none";
    }
    if (
        c6.value == structure[0] ||
        c6.value == structure[1] ||
        c6.value == structure[2] ||
        c6.value == structure[3] ||
        c6.value == structure[4]
    ) {
        // console.log(true);
        c16.style.display = "inline";
        c26.style.display = "none";
    } else {
        c26.style.display = "inline";
        c16.style.display = "none";
    }
    if (
        c11.style.display == "inline" &&
        c12.style.display == "inline" &&
        c13.style.display == "inline" &&
        c14.style.display == "inline" &&
        c15.style.display == "inline" &&
        c16.style.display == "inline"
    ) {
        document.getElementById("crt2").style.display = "block";
        document.getElementById("wrng2").style.display = "none";
        document.getElementById("null2").style.display = "none";
    } else {
        document.getElementById("wrng2").style.display = "block";
        document.getElementById("crt2").style.display = "none";
        document.getElementById("null2").style.display = "none";
    }
    if (
        c1.value == "" &&
        c2.value == "" &&
        c3.value == "" &&
        c4.value == "" &&
        c5.value == "" &&
        c6.value == ""
    ) {
        document.getElementById("crt2").style.display = "none";
        document.getElementById("wrng2").style.display = "block";
        document.getElementById("wrng2").style.display = "none";
        document.getElementById("null2").style.display = "block";
        c11.style.display = "none";
        c12.style.display = "none";
        c13.style.display = "none";
        c14.style.display = "none";
        c15.style.display = "none";
        c16.style.display = "none";
        c21.style.display = "none";
        c22.style.display = "none";
        c23.style.display = "none";
        c24.style.display = "none";
        c25.style.display = "none";
        c26.style.display = "none";
    }
};
var showAns3 = () => {
    var array = [
        "It is a derived data type",
        "A collection of the same type of data",
        "Elements of an array are referenced using the corresponding subscripts",
        "When an element of an array becomes another array, a multidimensional array is formed",
        "Arrays of structure are possible",
    ];
    var structure = [
        "It is a user defined data type",
        "A collection of different types of data",
        "Elements of a structure are referenced using dot operator(.)",
        "When an element of a structure becomes another structure,a nested structure is formed",
        "Structure can contain arrays as elements",
    ];
    c1.value = array[0];
    c2.value = array[1];
    c3.value = array[2];
    c4.value = structure[0];
    c5.value = structure[1];
    c6.value = structure[2];
    c11.style.display = "none";
    c12.style.display = "none";
    c13.style.display = "none";
    c14.style.display = "none";
    c15.style.display = "none";
    c16.style.display = "none";
    c21.style.display = "none";
    c22.style.display = "none";
    c23.style.display = "none";
    c24.style.display = "none";
    c25.style.display = "none";
    c26.style.display = "none";
    document.getElementById("ans2").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("reset2").style.display = "inline";
    document.getElementById("crt2").style.display = "none";
    document.getElementById("wrng2").style.display = "none";
    document.getElementById("null2").style.display = "none";
};
var reset3 = () => {
    c1.value = "";
    c2.value = "";
    c3.value = "";
    c4.value = "";
    c5.value = "";
    c6.value = "";
    document.getElementById("ans2").style.display = "inline";
    document.getElementById("submit2").style.display = "inline";
    document.getElementById("reset2").style.display = "none";
};
var d1;
d1 = document.getElementById("d1");
var checkAns4 = () => {
    if (d1.value == "cin>>st.adm_no;") {
        document.getElementById("crt3").style.display = "block";
        document.getElementById("wrng3").style.display = "none";
        document.getElementById("null3").style.display = "none";
    } else if (d1.value == "") {
        document.getElementById("crt3").style.display = "none";
        document.getElementById("wrng3").style.display = "none";
        document.getElementById("null3").style.display = "block";
    } else {
        document.getElementById("crt3").style.display = "none";
        document.getElementById("wrng3").style.display = "block";
        document.getElementById("null3").style.display = "none";
    }
};
var showAns4 = () => {
    d1.value = "cin>>st.adm_no;";
    document.getElementById("ans3").style.display = "none";
    document.getElementById("submit3").style.display = "none";
    document.getElementById("reset3").style.display = "inline";
    document.getElementById("crt3").style.display = "none";
    document.getElementById("wrng3").style.display = "none";
    document.getElementById("null3").style.display = "none";
};
var reset4 = () => {
    d1.value = "";
    document.getElementById("ans3").style.display = "inline";
    document.getElementById("submit3").style.display = "inline";
    document.getElementById("reset3").style.display = "none";
};
var e1, e2;
e1 = document.getElementById("e1");
e2 = document.getElementById("e2");
var checkAns5 = () => {
    if (e1.value == "1004" && e2.value == "1014") {
        document.getElementById("crt4").style.display = "block";
        document.getElementById("wrng4").style.display = "none";
        document.getElementById("null4").style.display = "none";
    } else if (e1.value == "" && e2.value == "") {
        document.getElementById("crt4").style.display = "none";
        document.getElementById("wrng4").style.display = "none";
        document.getElementById("null4").style.display = "block";
    } else {
        document.getElementById("crt4").style.display = "none";
        document.getElementById("wrng4").style.display = "block";
        document.getElementById("null4").style.display = "none";
    }
};
var showAns5 = () => {
    e1.value = "1004";
    e2.value = "1014";
    document.getElementById("ans4").style.display = "none";
    document.getElementById("submit4").style.display = "none";
    document.getElementById("reset4").style.display = "inline";
    document.getElementById("crt4").style.display = "none";
    document.getElementById("wrng4").style.display = "none";
    document.getElementById("null4").style.display = "none";
};
var reset5 = () => {
    e1.value = "";
    e2.value = "";
    document.getElementById("ans4").style.display = "inline";
    document.getElementById("submit4").style.display = "inline";
    document.getElementById("reset4").style.display = "none";
};
var f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
    f21,
    f22,
    f23,
    f24,
    f25,
    f26;
f1 = document.getElementById("f1");
f2 = document.getElementById("f2");
f3 = document.getElementById("f3");
f4 = document.getElementById("f4");
f5 = document.getElementById("f5");
f6 = document.getElementById("f6");
f11 = document.getElementById("f11");
f12 = document.getElementById("f12");
f13 = document.getElementById("f13");
f14 = document.getElementById("f14");
f15 = document.getElementById("f15");
f16 = document.getElementById("f16");
f21 = document.getElementById("f21");
f22 = document.getElementById("f22");
f23 = document.getElementById("f23");
f24 = document.getElementById("f24");
f25 = document.getElementById("f25");
f26 = document.getElementById("f26");
var checkAns6 = () => {
    if (f1.value == "1000") {
        f11.style.display = "inline";
        f21.style.display = "none";
    } else {
        f21.style.display = "inline";
        f11.style.display = "none";
    }
    if (f2.value == "34") {
        f12.style.display = "inline";
        f22.style.display = "none";
    } else {
        f22.style.display = "inline";
        f12.style.display = "none";
    }
    if (f3.value == "1004") {
        f13.style.display = "inline";
        f23.style.display = "none";
    } else {
        f23.style.display = "inline";
        f13.style.display = "none";
    }
    if (f4.value == "12") {
        f14.style.display = "inline";
        f24.style.display = "none";
    } else {
        f24.style.display = "inline";
        f14.style.display = "none";
    }
    if (f5.value == "1036") {
        f15.style.display = "inline";
        f25.style.display = "none";
    } else {
        f25.style.display = "inline";
        f15.style.display = "none";
    }
    if (f6.value == "19") {
        f16.style.display = "inline";
        f26.style.display = "none";
    } else {
        f26.style.display = "inline";
        f16.style.display = "none";
    }
    if (
        f11.style.display == "inline" &&
        f12.style.display == "inline" &&
        f13.style.display == "inline" &&
        f14.style.display == "inline" &&
        f15.style.display == "inline" &&
        f16.style.display == "inline"
    ) {
        document.getElementById("crt5").style.display = "block";
        document.getElementById("wrng5").style.display = "none";
        document.getElementById("null5").style.display = "none";
    } else {
        document.getElementById("wrng5").style.display = "block";
        document.getElementById("crt5").style.display = "none";
        document.getElementById("null5").style.display = "none";
    }
    if (
        f1.value == "" &&
        f2.value == "" &&
        f3.value == "" &&
        f4.value == "" &&
        f5.value == "" &&
        f6.value == ""
    ) {
        document.getElementById("crt5").style.display = "none";
        document.getElementById("wrng5").style.display = "none";
        document.getElementById("null5").style.display = "block";
        f11.style.display = "none";
        f12.style.display = "none";
        f13.style.display = "none";
        f14.style.display = "none";
        f15.style.display = "none";
        f16.style.display = "none";
        f21.style.display = "none";
        f22.style.display = "none";
        f23.style.display = "none";
        f24.style.display = "none";
        f25.style.display = "none";
        f26.style.display = "none";
    }
};
var showAns6 = () => {
    f1.value = "1000";
    f2.value = "34";
    f3.value = "1004";
    f4.value = "12";
    f5.value = "1036";
    f6.value = "19";
    f11.style.display = "none";
    f12.style.display = "none";
    f13.style.display = "none";
    f14.style.display = "none";
    f15.style.display = "none";
    f16.style.display = "none";
    f21.style.display = "none";
    f22.style.display = "none";
    f23.style.display = "none";
    f24.style.display = "none";
    f25.style.display = "none";
    f26.style.display = "none";
    document.getElementById("ans5").style.display = "none";
    document.getElementById("submit5").style.display = "none";
    document.getElementById("reset5").style.display = "inline";
    document.getElementById("crt5").style.display = "none";
    document.getElementById("wrng5").style.display = "none";
    document.getElementById("null5").style.display = "none";
};
var reset6 = () => {
    f1.value = "";
    f2.value = "";
    f3.value = "";
    f4.value = "";
    f5.value = "";
    f6.value = "";
    document.getElementById("ans5").style.display = "inline";
    document.getElementById("submit5").style.display = "inline";
    document.getElementById("reset5").style.display = "none";
};
var g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g21,
    g22,
    g23,
    g24,
    g25,
    g26;
g1 = document.getElementById("g1");
g2 = document.getElementById("g2");
g3 = document.getElementById("g3");
g4 = document.getElementById("g4");
g5 = document.getElementById("g5");
g6 = document.getElementById("g6");
g7 = document.getElementById("g7");
g11 = document.getElementById("g11");
g12 = document.getElementById("g12");
g13 = document.getElementById("g13");
g14 = document.getElementById("g14");
g15 = document.getElementById("g15");
g16 = document.getElementById("g16");
g17 = document.getElementById("g17");
g21 = document.getElementById("g21");
g22 = document.getElementById("g22");
g23 = document.getElementById("g23");
g24 = document.getElementById("g24");
g25 = document.getElementById("g25");
g26 = document.getElementById("g26");
g27 = document.getElementById("g27");
var checkAns7 = () => {
    if (g1.value == "Program") {
        g11.style.display = "inline";
        g21.style.display = "none";
    } else {
        g21.style.display = "inline";
        g11.style.display = "none";
    }
    if (g2.value == "Program") {
        g12.style.display = "inline";
        g22.style.display = "none";
    } else {
        g22.style.display = "inline";
        g12.style.display = "none";
    }
    if (g3.value == "Program") {
        g13.style.display = "inline";
        g23.style.display = "none";
    } else {
        g23.style.display = "inline";
        g13.style.display = "none";
    }
    if (g4.value == "rogram") {
        g14.style.display = "inline";
        g24.style.display = "none";
    } else {
        g24.style.display = "inline";
        g14.style.display = "none";
    }
    if (g5.value == "rogram") {
        g15.style.display = "inline";
        g25.style.display = "none";
    } else {
        g25.style.display = "inline";
        g15.style.display = "none";
    }
    if (g6.value == "P") {
        g16.style.display = "inline";
        g26.style.display = "none";
    } else {
        g26.style.display = "inline";
        g16.style.display = "none";
    }
    if (g7.value == "P") {
        g17.style.display = "inline";
        g27.style.display = "none";
    } else {
        g27.style.display = "inline";
        g17.style.display = "none";
    }
    if (
        g11.style.display == "inline" &&
        g12.style.display == "inline" &&
        g13.style.display == "inline" &&
        g14.style.display == "inline" &&
        g15.style.display == "inline" &&
        g16.style.display == "inline"
    ) {
        document.getElementById("crt6").style.display = "block";
        document.getElementById("wrng6").style.display = "none";
        document.getElementById("null6").style.display = "none";
    } else {
        document.getElementById("wrng6").style.display = "block";
        document.getElementById("crt6").style.display = "none";
        document.getElementById("null6").style.display = "none";
    }
    if (
        g1.value == "" &&
        g2.value == "" &&
        g3.value == "" &&
        g4.value == "" &&
        g5.value == "" &&
        g6.value == "" &&
        g7.value == ""
    ) {
        document.getElementById("crt6").style.display = "none";
        document.getElementById("wrng6").style.display = "none";
        document.getElementById("null6").style.display = "block";
        g11.style.display = "none";
        g12.style.display = "none";
        g13.style.display = "none";
        g14.style.display = "none";
        g15.style.display = "none";
        g16.style.display = "none";
        g21.style.display = "none";
        g22.style.display = "none";
        g23.style.display = "none";
        g24.style.display = "none";
        g25.style.display = "none";
        g26.style.display = "none";
        g27.style.display = "none";
    }
};
var showAns7 = () => {
    g1.value = "Program";
    g2.value = "Program";
    g3.value = "Program";
    g4.value = "rogram";
    g5.value = "rogram";
    g6.value = "P";
    g7.value = "P"
    g11.style.display = "none";
    g12.style.display = "none";
    g13.style.display = "none";
    g14.style.display = "none";
    g15.style.display = "none";
    g16.style.display = "none";
    g17.style.display = "none";
    g21.style.display = "none";
    g22.style.display = "none";
    g23.style.display = "none";
    g24.style.display = "none";
    g25.style.display = "none";
    g26.style.display = "none";
    g27.style.display = "none";
    document.getElementById("ans6").style.display = "none";
    document.getElementById("submit6").style.display = "none";
    document.getElementById("reset6").style.display = "inline";
    document.getElementById("crt6").style.display = "none";
    document.getElementById("wrng6").style.display = "none";
    document.getElementById("null6").style.display = "none";
};
var reset7 = () => {
    g1.value = "";
    g2.value = "";
    g3.value = "";
    g4.value = "";
    g5.value = "";
    g6.value = "";
    g7.value = "";
    document.getElementById("ans6").style.display = "inline";
    document.getElementById("submit6").style.display = "inline";
    document.getElementById("reset6").style.display = "none";
};