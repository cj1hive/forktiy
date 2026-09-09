import * as modle from './modle.js';
import 'core-js';
import 'regenerator-runtime/runtime';
import recipeView from './Views/RecipesViews.js';
const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
console.log('test');

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    // rendering Spinnger
    recipeView.renderSpinner();
    // importing the load Recipe
    await modle.loadRecipe(id);
    //rendering recipe
    recipeView.render(modle.state.recipe);
  } catch (err) {
    recipeView.renderErro();
  }
};

const init = function () {
  recipeView.addHandelRender(controlRecipe);
};
init();
