const input = await Deno.readTextFile("./input.txt");

const rucksacks = input.split("\n");

const sameChar = (s1: string, s2: string) => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      return s1[i];
    }
  }

  return s1[0];
};

console.log("z".charCodeAt(0) - 96);

let sum = 0;
rucksacks.forEach((rucksack) => {
  const s1 = rucksack.substring(0, rucksack.length / 2);
  const s2 = rucksack.substring(rucksack.length / 2);

  const charCode = sameChar(s1, s2)?.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    sum += charCode - 38;
  } else {
    sum += charCode - 96;
  }
});

console.log(sum);
