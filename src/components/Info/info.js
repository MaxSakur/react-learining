import React from 'react';
import './modules.info.css'

import {methods} from "../../redux/data";


const Info = (props) => {

    let textFromInput = React.createRef();

    console.log('props from Info -->', props);

    let addRow = () => {
        let text = textFromInput.current.value;

        methods.addTextToState(text);
        textFromInput.current.value = '';
    }

    let onTextChange = () => {
        let text = textFromInput.current.value;
        console.log('text', text)
    }



    return (
        <div className="info">
            <p>INFO SECTION</p>
            {props.props.infoPage.map((item) => <p key={`item.name_${item.name}`}>{item.name} is {item.age} age old</p>)}
            <input type="text" onChange={onTextChange} ref={textFromInput}/>
            <button onClick={addRow}>ADD TEXT</button>
        </div>
    )
}


export default Info;