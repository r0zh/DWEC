"use strict"

function startTransition() {
    if (!transitionInProgess) {
        console.log(mode)
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