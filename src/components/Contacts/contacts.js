import React from 'react';
import {addInputDataCreator} from "../../redux/data";
import './module.contacs.css'

import user from './../../assets/user.png'



const Contacts = (props) => {
  console.log('Contact props - >', props)
  let feedbackData = props.props.getState().contactPage.feedback;
  let contactsData = props.props.getState().contactPage.contacts;

  let  newContactName   = React.createRef();
  let  newContactValue = React.createRef();

  let testF = () => {
    let newName = newContactName.current.value;
    let newValue = newContactValue.current.value;
    if (!newName && !newValue) {
      return null;
    } else {
      let action = addInputDataCreator(newName, newValue)
      props.dispatch(action);

    }
    newContactName = "";
    newContactValue = "";
  }

  return (
      <div className="contacts">
        <h2>Contact information</h2>

        <div className="contacts--wrapper">

          <div className="contacts--feedback">
            {feedbackData.map((item) =>
                <div className="feedback" key={`item.name_${item.name}`}>
                  <div className="feedback--header">
                    <img src={user} className="feedback--icon" aria-hidden alt={`${user.name} image`}/>
                    <p>{item.name}</p>
                  </div>
                  <div className="feedback--body">
                    <p>{item.value}</p>
                  </div>
                </div>
               )
            }
            <div className="newFeedback">
              <label htmlFor="newFeedbackName" className="newFeedbackLabel">Your name</label>
              <input name="newFeedbackName" className="newFeedbackName" type="text" ref={newContactName} />
              <textarea placeholder="Your message" className="newFeedbackValue" type="text" ref={newContactValue} />
              <button className="newFeedbackButton" type="submit" onClick={testF}>ADD</button>
            </div>

          </div>

          <div className="contacts--information">
            {contactsData.map((item) =>
                <div className="contacts" key={`item.name_${item.name}+${item.value}`}>
                  <p>{item.name}</p>
                  <p>{item.value}</p>
                </div>
            )
            }
          </div>

        </div>


      </div>
  )
}


export default Contacts;