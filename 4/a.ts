const input = await Deno.readTextFile("./input.txt");

const pairs = input.split("\n");

const doesFullyOverlap = (first: string, second: string) => {
  const firstStart = parseInt(first.split("-")[0]);
  const firstFinish = parseInt(first.split("-")[1]);
  const secondStart = parseInt(second.split("-")[0]);
  const secondFinish = parseInt(second.split("-")[1]);

  if (firstStart >= secondStart && firstFinish <= secondFinish) {
    return true;
  }

  if (secondStart >= firstStart && secondFinish <= firstFinish) {
    return true;
  }

  return false;
};

let total = 0;
pairs.forEach((pair: string) => {
  const doesOverlap = doesFullyOverlap(pair.split(",")[0], pair.split(",")[1]);
  if (doesOverlap) {
    total += 1;
  }
});

console.log(total);
