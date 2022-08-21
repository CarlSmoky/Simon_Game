let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

const nextSequence = () => {
  return Math.floor(Math.random() * 3) + 1;
} 

const randomChosenColour = () => {
  return buttonColours[nextSequence()];
}

gamePattern = [...gamePattern, randomChosenColour()];
console.log(gamePattern);

