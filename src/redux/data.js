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
    subscribe(observer) {
        this.rerenderPage = observer;
    },
    dispatch(action) {
        if ( action.type === 'ADD-TEXT') {
            let newPost = {
                id: 3,
                name: this._state.infoText,
                age: 0
            };
            this._state.infoPage.push(newPost);
            this._state.infoText = '';
            this.rerenderPage(this._state);
        } else if  (action.type === 'UPDATE-TEXT-VALUE'){
            this._state.infoText = action.text;
            this.rerenderPage(this._state);
        }
    }
}

export const addTextActionCreator = () => {
    return {
        type: 'ADD-TEXT'
    }
}

export const updateTextValueActionCreator = (text) => {
    return {
        type: 'UPDATE-TEXT-VALUE',
        text: text
    }
}

window.store = store;

export default store;