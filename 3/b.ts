const input = await Deno.readTextFile("./input.txt");

const sameChar = (s1: string, s2: string, s3: string) => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i]) && s3.includes(s1[i])) {
      return s1[i];
    }
  }

  return s1[0];
};

const rucksacks = input.split("\n");

let sum = 0;
for (let i = 0; i < rucksacks.length; i = i + 3) {
  const charCode = sameChar(
    rucksacks[i],
    rucksacks[i + 1],
    rucksacks[i + 2]
  ).charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    sum += charCode - 38;
  } else {
    sum += charCode - 96;
  }
}

console.log(sum);
