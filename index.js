// Drum button event listeners
var drumButtons = document.querySelectorAll("button.drum");

drumButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        handleDrumEvent(button.classList[0]);
    });
});

// Keypress event listener
document.addEventListener("keypress", function (event) {
    handleDrumEvent(event.key);
});

// Function to handle both button click and keypress events
function handleDrumEvent(key) {
    soundMaker(key);
    animator(key);
}

// Function to play sound based on the key
function soundMaker(key) {
    var audioFile = "./sounds/" + key + ".mp3";
    var audio = new Audio(audioFile);
    audio.play();
}

// Function to animate the pressed button
function animator(currentKey) {
    var keys = ["w", "a", "s", "d", "j", "k", "l"];

    if (keys.includes(currentKey)) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    } else {
        console.log("Invalid key pressed");
    }
}
