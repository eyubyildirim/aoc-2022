export const x = "";

enum Opponent {
  A = "Rock",
  B = "Paper",
  C = "Scissors",
}

enum Answer {
  X = "Rock",
  Y = "Paper",
  Z = "Scissors",
}

const checkWinSituation = (yourMoveName: string, opponentMoveName: string) => {
  if (yourMoveName === "Rock") {
    if (opponentMoveName === "Rock") {
      return 3;
    } else if (opponentMoveName === "Paper") {
      return 0;
    } else {
      return 6;
    }
  } else if (yourMoveName === "Paper") {
    if (opponentMoveName === "Rock") {
      return 6;
    } else if (opponentMoveName === "Paper") {
      return 3;
    } else {
      return 0;
    }
  } else {
    if (opponentMoveName === "Rock") {
      return 0;
    } else if (opponentMoveName === "Paper") {
      return 6;
    } else {
      return 3;
    }
  }
};

const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n");

const opponentMoves = rounds.map((x) => x.split(" ")[0]);
const yourMoves = rounds.map((x) => x.split(" ")[1]);

let totalScore = 0;
opponentMoves.forEach((opponentMove, index) => {
  const yourMove = yourMoves[index];

  const yourMoveName = Answer[yourMove as keyof typeof Answer];
  const opponentMoveName = Opponent[opponentMove as keyof typeof Opponent];
  let roundScore = 0;

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

  roundScore += checkWinSituation(yourMoveName, opponentMoveName);
  totalScore += roundScore;
});

console.log(totalScore);
