"use strict"

let transitionInProgess = false;

/**
 * Starts the transition
 */
function startTransition() {
    if (!transitionInProgess) {
        switch (mode) {
            case "noTransition":
                noTransition();
                break;
            case "rightToLeft":
                rightToLeft();
                break;
            case "leftToRight":
                leftToRight();
                break;
            case "topToBottom":
                topToBottom();
                break;
            case "bottomToTop":
                bottomToTop();
                break;
            case "fade":
                fade();
                break;
            case "smallToBig":
                smallToBig();
                break;
            case "bigToSmall":
                bigToSmall();
                break;
            default:
                break;
        }
    }
}