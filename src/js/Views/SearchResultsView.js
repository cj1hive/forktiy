class searchResultsView {
  #parentElement = document.querySelector('.results');

  render(data) {
    this.#parentElement.innerHTML = data
      .map(result => this.#generateMarkup(result))
      .join('');
  }

  #generateMarkup(result) {
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
    </li>`;
  }
}

export default new searchResultsView();
