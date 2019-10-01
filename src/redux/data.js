
const ADD_TEXT = 'ADD-TEXT';
const UPDATE_TEXT_VALUE = 'UPDATE-TEXT-VALUE';
const ADD_INPUT_DATA = 'SHOW-INPUT-DATA';

let store = {
    _state: {
        infoPage:
            [
                {name: 'Max', age: 33, id: 0},
                {name: 'Roman', age: 29, id: 1},
                {name: 'Helen', age: 25, id: 2}
            ],
        infoText: 'new text',
        contactPage: [
            {id: 0, name: 'Phone', value: '0980354882'},
            {id: 1, name: 'Adress', value: 'ул. Анри '},
            {id: 2, name: 'Working time', value: '11:00 to 18:00'},
        ],
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderPage = observer;
    },
    dispatch(action) {
        if ( action.type === ADD_TEXT) {
            let newPost = {
                id: 3,
                name: this._state.infoText,
                age: 0
            };
            this._state.infoPage.push(newPost);
            this._state.infoText = '';
            this.rerenderPage(this._state);
        } else if  (action.type === UPDATE_TEXT_VALUE){
            this._state.infoText = action.text;
            this.rerenderPage(this._state);
        } else if  (action.type === ADD_INPUT_DATA){
            let newInputElement = {
                id: this._state.contactPage.length - 1,
                name: action.text,
                value: action.value,
            }
            this._state.contactPage.push(newInputElement);
            console.log(newInputElement);
            this.rerenderPage(this._state);
        }

    }
}

export const addTextActionCreator = () => ({type: ADD_TEXT})

export const updateTextValueActionCreator = (text) => ({
    type: UPDATE_TEXT_VALUE,
    text: text
})

export const addInputDataCreator = (name, value) => ({
    type: ADD_INPUT_DATA,
    name: name,
    value: value
})

window.store = store;

export default store;