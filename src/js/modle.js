export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  const res = await fetch(` https://forkify-api.jonas.io/api/v2/recipes/${id}`);
  const data = await res.json();
  const { recipe } = data.data;
  if (!res.ok) throw new Error(`$${data.message} ${res.status}`);

  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image,
    serving: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };

  console.log(state.recipe);
};
