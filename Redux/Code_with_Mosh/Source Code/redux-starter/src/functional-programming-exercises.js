import produce from "immer";

// Exercise 1
const getTag = (obj) => obj.tag;
const toLowerCase = (str) => str.toLowerCase();
const wrapInParentheses = (str) => `(${str})`;

const input = { tag: "JAVASCRIPT" };
// plain JS
const output = wrapInParentheses(toLowerCase(getValue(input)));
// using lodash
const transform = pipe(getTag, toLowerCase, wrapInParentheses)
const output2 = transform(input)

// Exercise 2

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

// plain JS
// Add ingredient
const added = { ...recipe, ingredients: [...recipe.ingredients, "cream"] };
// replace ingredient
const replaced = { ...recipe, ingredients: [...recipe.ingredients] };
replaced.ingredients.map((element) =>
  element === "egg" ? "egg white" : element
);
// remove ingredient
const newIngredients = recipe.ingredients.filter(
  (element) => element !== "egg"
);
const removed = { ...recipe, ingredients: [...newIngredients] };

// using Immer
// add ingredient
function add(recipe, ingredient) {
  return produce(recipe, (newRecipe) => newRecipe.ingredients.add(ingredient));
}
const added2 = add(recipe, "cream");

// replace ingredient
function replace(recipe, originalIngredient, newIngredient) {
  return produce(recipe, (newRecipe) =>
    newRecipe.ingredients.map((ingredient) =>
      ingredient == originalIngredient ? newIngredient : ingredient
    )
  );
}
const replaced2 = add(recipe, "egg", "egg white");

// remove ingredient
function remove(recipe, ingredientToBeRemoved) {
  return produce(recipe, (newRecipe) =>
    newRecipe.ingredients.filter(
      (ingredient) => ingredient !== ingredientToBeRemoved
    )
  );
}

