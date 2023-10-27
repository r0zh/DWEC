let normal_btn = document.getElementById("normal_btn");
let scientific_btn = document.getElementById("scientific_btn");
let graphing_btn = document.getElementById("graphing_btn");

let scientific_btns = document.getElementsByClassName("scientific_btn");


normal_btn.addEventListener("click", function () {
    ("normal_btn");
    for (let i = 0; i < scientific_btns.length; i++) {
        scientific_btns[i].style.visibility = "hidden";
    }
})


scientific_btn.addEventListener("click", function () {
    ("scientific_btn");
    for (let i = 0; i < scientific_btns.length; i++) {
        scientific_btns[i].style.visibility = "visible";
    }
})