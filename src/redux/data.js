const store = {
    _state: {
        infoPage:
            [
                {name: 'Max', age: 33, id: 0},
                {name: 'Roman', age: 29, id: 1},
                {name: 'Helen', age: 25, id: 2}
            ],
        infoText: 'new text',
    },
    getState() {
        return this._state;
    },
    addTextToState(item) {
        let newPost = {
            id: 3,
            name: this._state.infoText,
            age: 0
        };
        this._state.infoPage.push(newPost);
        this._state.infoText = '';
        this.rerenderPage(this._state);
    },
    updateTextValue(text) {
        this._state.infoText = text;
        this.rerenderPage(this._state);
    },
    subscribe(observer) {
        this.rerenderPage = observer;
    }
}

window.store = store;

export default store;