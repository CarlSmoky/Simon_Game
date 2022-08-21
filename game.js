
const buttonColours = ["red", "blue", "green", "yellow"];

const playSound = (name) => {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

const animatePress = (currentColor) => {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}
