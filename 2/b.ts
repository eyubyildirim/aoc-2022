export const x = "";

enum Opponent {
  A = "Rock",
  B = "Paper",
  C = "Scissors",
}

enum Result {
  X = "Lose",
  Y = "Draw",
  Z = "Win",
}

const getYourMove = (opponentMoveName: string, roundResult: string) => {
  if (roundResult === "Win") {
    if (opponentMoveName === "Rock") {
      return "Paper";
    } else if (opponentMoveName === "Paper") {
      return "Scissors";
    } else {
      return "Rock";
    }
  } else if (roundResult === "Draw") {
    if (opponentMoveName === "Rock") {
      return "Rock";
    } else if (opponentMoveName === "Paper") {
      return "Paper";
    } else {
      return "Scissors";
    }
  } else {
    if (opponentMoveName === "Rock") {
      return "Scissors";
    } else if (opponentMoveName === "Paper") {
      return "Rock";
    } else {
      return "Paper";
    }
  }
};

const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n");

const opponentMoves = rounds.map((x) => x.split(" ")[0]);
const roundResult = rounds.map((x) => x.split(" ")[1]);

let totalScore = 0;
opponentMoves.forEach((opponentMove, index) => {
  const opponentMoveName = Opponent[opponentMove as keyof typeof Opponent];
  const roundResultName = Result[roundResult[index] as keyof typeof Result];

  let roundScore = 0;

  const yourMoveName = getYourMove(opponentMoveName, roundResultName);

  switch (roundResultName) {
    case "Win":
      roundScore += 6;
      break;
    case "Draw":
      roundScore += 3;
      break;
    case "Lose":
      roundScore += 0;
      break;
    default:
      break;
  }

  switch (yourMoveName) {
    case "Rock":
      roundScore += 1;
      break;
    case "Paper":
      roundScore += 2;
      break;
    case "Scissors":
      roundScore += 3;
      break;
    default:
      break;
  }

  totalScore += roundScore;
});

console.log(totalScore);
