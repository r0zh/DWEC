// Select the node that will be observed for mutations
const displayContainer = document.getElementById('display-container');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            expression = display.textContent;
            if (display.textContent == "") {
                displayContainer.style.height = "0px";
                display.style.opacity = 0;
            } else {
                displayContainer.style.height = "36px";
                display.style.opacity = 100;
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(display, config);