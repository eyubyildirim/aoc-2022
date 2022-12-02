export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elvesArray = input.split("\n\n");

const totalCaloriesArray = elvesArray.map((value) => {
  const eachCalorie = value.split("\n");
  let totalCalorie = 0;
  eachCalorie.forEach((calorie) => {
    totalCalorie += parseInt(calorie);
  });

  return totalCalorie;
});

totalCaloriesArray.sort((a, b) => b - a);
console.log(
  totalCaloriesArray[0] + totalCaloriesArray[1] + totalCaloriesArray[2]
);
