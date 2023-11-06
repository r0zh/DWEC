"use stricts"

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.addEventListener("click", () => {
    reverse = false;
    startTransition();
});

previous.addEventListener("click", () => {
    reverse = true;
    startTransition();
});
