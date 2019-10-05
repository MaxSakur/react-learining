// import {addTextReducer, updateTextReducer, addInputDataReducer } from './reducers';

// const ADD_TEXT = 'ADD-TEXT';
// const UPDATE_TEXT_VALUE = 'UPDATE-TEXT-VALUE';
// const ADD_INPUT_DATA = 'SHOW-INPUT-DATA';

// let store1 = {
//     _state: {
//         infoPage:
//             [
//                 {name: 'Max', age: 33, id: 0},
//                 {name: 'Roman', age: 29, id: 1},
//                 {name: 'Helen', age: 25, id: 2}
//             ],
//         infoText: 'new text',
//         contactPage: {
//             feedback: [
//                 {id: 0, name: 'Lory', value: 'Nice company'},
//                 {id: 1, name: 'Carlos', value: 'Hate this shit'},
//                 {id: 2, name: 'David', value: 'God bless me'},
//             ],
//             contacts: [
//                 {id: 0, name: 'Phone', value: '0980354882'},
//                 {id: 1, name: 'Adress', value: 'ул. Анри '},
//                 {id: 2, name: 'Working time', value: '11:00 to 18:00'},
//             ]
//         }


//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this.rerenderPage = observer;
//     },
//     dispatch(action) {
//         this._state.infoPage = addTextReducer(this._state.infoPage, action);
//         this._state.infoText = updateTextReducer(this._state.infoText, action);
//         this._state.contactPage = addInputDataReducer( this._state.contactPage, action);
//         this.rerenderPage(this._state);
//     }
// }




// export default store1;