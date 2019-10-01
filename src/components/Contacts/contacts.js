import React from 'react';
import {addInputDataCreator} from "../../redux/data";






const Contacts = (props) => {
  console.log('Contact props - >', props)
  let data = props.props.getState().contactPage;
  let  newContactName   = React.createRef();
  let  newContactValue = React.createRef();


  let testF = () => {
    let newName = newContactName.current.value;
    let newValue = newContactValue.current.value;
    let action = addInputDataCreator(newName, newValue)
    props.dispatch(action)
  }

  return (
      <div className="contacts">
        <p>Show information</p>
        {data.map((item) =>
            <p key={`item.name_${item.name}`}>{item.name} {item.value}</p>)
        }
        <div className="inputs">
          <input type="text" ref={newContactName} />
          <input type="text" ref={newContactValue} />
          <button type="submit" onClick={testF}>ADD</button>
        </div>

      </div>
  )
}


export default Contacts;