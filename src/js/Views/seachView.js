class searchView {
  _perantEl = document.querySelector('.search');
  getQuery() {
    const query = this._perantEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    return (this._perantEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    this._perantEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
