let user = prompt("Stone Paper Scissor");
let computer = Math.floor(Math.random() * 3);
const arr = ["Stone", "Paper", "Scissor"];
user = arr[computer];

const match = (user, computer) => {
  if (user === computer) {
    return "tie";
  }

  else if (
    (user === "Stone" && computer === "Paper") ||
    (user === "Stone" && computer === "Scissor") ||
    (user === "Scissor" && computer === "Paper")
  ) {
    return "You Win"
  }

  else {
    return "You Loose"
  }
};
let result = match(user, computer);
// document.write('User : ${user}\nComputer : ${computer}\nThe result is: ${result}');

document.write(`User: ${user} <br> Computer: ${computer} <br> The result is: ${result}`);

