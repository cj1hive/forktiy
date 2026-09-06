import * as modle from './modle.js';
import 'core-js';
import 'regenerator-runtime/runtime';
import recipeView from './Views/RecipesViews.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(err);
  }
};
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('laod', controlRecipe);
['hashchange', 'laod'].forEach(ev =>
  window.addEventListener(ev, controlRecipe),
);
