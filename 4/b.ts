const input = await Deno.readTextFile("./input.txt");

const pairs = input.split("\n");

const doesOverlap = (first: string, second: string) => {
  const firstStart = parseInt(first.split("-")[0]);
  const firstFinish = parseInt(first.split("-")[1]);
  const secondStart = parseInt(second.split("-")[0]);
  const secondFinish = parseInt(second.split("-")[1]);

  if (firstStart > secondFinish) {
    return false;
  }
  if (secondStart > firstFinish) {
    return false;
  }

  return true;
};

let total = 0;
pairs.forEach((pair: string) => {
  const overlap = doesOverlap(pair.split(",")[0], pair.split(",")[1]);
  if (overlap) {
    total += 1;
  }
});

console.log(total);
