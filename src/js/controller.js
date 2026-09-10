import * as modle from './modle.js';
import 'core-js';
import 'regenerator-runtime/runtime';
import recipeView from './Views/RecipesViews.js';
import seachView from './Views/seachView.js';
import resultView from './Views/resultView.js';
const recipeContainer = document.querySelector('.recipe');

if (module.hot) {
  module.hot.accept();
}

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
    recipeView.renderError();
  }
};
const controleSearchResults = async function () {
  try {
    resultView.renderSpinner();

    const query = seachView.getQuery();
    if (!query) return;
    await modle.loadSerachResult(query);
    console.log(modle.state.search.results);
    resultView.render(modle.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controleSearchResults();
const init = function () {
  recipeView.addHandelRender(controlRecipe);
  seachView.addHandlerSearch(controleSearchResults);
};
init();
