import View from './view.js';
import icons from 'url:../../img/icons.svg';

class resultView extends View {
  _perantElement = document.querySelector('.results');
  _ErrMessage = 'no recipes found';

  _generateMarkup() {
    return this._data.map(this._generateMarkUpPreview).join('');
  }

  _generateMarkUpPreview(result) {
    return `<li class="preview">
            <a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>                  
              </div>
            </a>
          </li>
`;
  }
}
export default new resultView();
