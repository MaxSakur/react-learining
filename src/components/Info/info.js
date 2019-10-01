import React from 'react';
import './modules.info.css'
import {addTextActionCreator, updateTextValueActionCreator} from "../../redux/data";






const Info = (props) => {

    let textFromInput = React.createRef();

    let addRow = () => {
        let action = addTextActionCreator()
        props.dispatch(action)
    }

    let onTextChange = () => {
        let text = textFromInput.current.value;
        let action = updateTextValueActionCreator(text)
        props.dispatch(action)
    }


    return (
        <div className="info">
            <p>INFO SECTION</p>
            {props.props.getState().infoPage.map((item) => <p key={`item.name_${item.name}`}>{item.name} is {item.age} age old</p>)}
            <input type="text" onChange={onTextChange} ref={textFromInput}/>
            <button onClick={addRow}>ADD TEXT</button>
        </div>

    )
}


export default Info;