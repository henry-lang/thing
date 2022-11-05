const fs = require("fs");
const ingredients = JSON.parse(fs.readFileSync("thingy.json")).map(
  (ingredient) => ingredient.term
);
fs.writeFileSync("ingredients.json", JSON.stringify(ingredients));
