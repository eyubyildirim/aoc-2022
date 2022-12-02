export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elvesArray = input.split("\n\n");

console.log(elvesArray.length);

let maxCalories = 0;
let maxCaloriesElf = 0;
let currentElf = 0;
let currentCalories = 0;

elvesArray.forEach((elf) => {
  const caloriesArray = elf.split("\n");
  currentCalories = 0;
  caloriesArray.forEach((calories) => {
    currentCalories += parseInt(calories);
  });

  if (currentCalories > maxCalories) {
    maxCalories = currentCalories;
    maxCaloriesElf = currentElf;
  }

  currentElf++;
});

console.log(maxCalories);
console.log(maxCaloriesElf);
