const ADD_TEXT = 'ADD-TEXT';
const UPDATE_TEXT_VALUE = 'UPDATE-TEXT-VALUE';
const ADD_INPUT_DATA = 'SHOW-INPUT-DATA';

export const addTextReducer = (state, action) => {
    if ( action.type === ADD_TEXT) {
        let newPost = {
            id: 3,
            name: state.infoText,
            age: 0
        };
        state.infoPage.push(newPost);
        state.infoText = '';
    }
    
    return state;
}

export const updateTextReducer = ( state , action) => {
    if  (action.type === UPDATE_TEXT_VALUE){
        state.infoText = action.text;
    }
    return state;
}


export const addInputDataReducer = ( state , action) => {
    if  (action.type === ADD_INPUT_DATA){
        let newInputElement = {
            id: state.feedback.length,
            name: action.name,
            value: action.value,
        }
        state.feedback.push(newInputElement);
    }

    return state;
} 

