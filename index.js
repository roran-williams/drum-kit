
  // Drum button event listeners
  $(".drum").on("click", function () {
    handleDrumEvent($(this).attr("class").split(" ")[0]);
  });

  // Keypress event listener
  $(document).on("keypress", function (event) {
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

    if ($.inArray(currentKey, keys) !== -1) {
      var activeButton = $("." + currentKey);
      activeButton.addClass("pressed");

      setTimeout(function () {
        activeButton.removeClass("pressed");
      }, 100);
    } else {
      console.log("Invalid key pressed");
    }
  }

