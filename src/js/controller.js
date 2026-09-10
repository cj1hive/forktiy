import * as modle from './modle.js';
import 'core-js';
import 'regenerator-runtime/runtime';
import recipeView from './Views/RecipesViews.js';
import seachView from './Views/seachView.js';
import searchResultsView from './Views/SearchResultsView.js';
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
    recipeView.renderMessage(err.message);
  }
};
const controleSearchResults = async function () {
  const query = seachView.getQuery();
  if (!query) return;
  try {
    await modle.loadSerachResult(query);
    searchResultsView.render(modle.state.search.results);
  } catch (err) {
    recipeView.renderMessage(err.message);
  }
};
const init = function () {
  recipeView.addHandelRender(controlRecipe);
  seachView.addHandlerSearch(controleSearchResults);
};
init();
