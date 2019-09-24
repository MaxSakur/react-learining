import React from 'react';
import './modules.info.css'

const Info = (props) => {

    let textFromInput = React.createRef();

    let addRow = () => {
        let text = textFromInput.current.value;
        props.props.addTextToState(text);
        textFromInput.current.value = '';
    }

    let onTextChange = () => {
        let text = textFromInput.current.value;
        props.props.updateTextValue(text);
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