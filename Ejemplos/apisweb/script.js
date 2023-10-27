"use script"


document.getElementById("boton").addEventListener("click", (event) => {

    console.log("AAAAAAAaaaaa")
});

Array.from(document.getElementsByClassName("buttons")).forEach((button) => {
    console.log("AAAAAAAaaaaa")
    button.addEventListener("click", (event) => {
        decidir(button.value)
    });
})