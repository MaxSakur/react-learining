import React from "react";
import { addInputDataCreator } from "../../redux/reducers";
import "./module.contacs.css";

import user from "./../../assets/user.png";

const Contacts = props => {
  console.log('Contacts props --->', props);

  let feedbackData = props.props.addInputDataReducer[0];
  let contactsData = props.props.addInputDataReducer[1];

  // let feedbackData = [];
  // let contactsData = [];

  console.log('feedbackData-->',feedbackData);
  console.log('contactsData-->',contactsData);

  let newContactName = React.createRef();
  let newContactValue = React.createRef();

  let testF = () => {
    let newName = newContactName.current.value;
    let newValue = newContactValue.current.value;
    if (!newName && !newValue) {
      return null;
    } else {
 
      let action = addInputDataCreator(newName, newValue);
      props.dispatch(action);
    }
    
    newContactName = "";
    newContactValue = "";
  };

  return (
    <div className="contacts">
      <h2>Contact information</h2>

      <div className="contacts--wrapper">
        <div className="contacts--feedback">
          <h3>Client feedback</h3>
          {feedbackData.map(item => (
            <div className="feedback" key={`item.name_${item.name}`}>
              <div className="feedback--header">
                <img
                  src={user}
                  className="feedback--icon"
                  aria-hidden
                  alt={`${user.name} image`}
                />
                <p>{item.name}</p>
              </div>
              <div className="feedback--body">
                <p>{item.value}</p>
              </div>
            </div>
          ))}
          <div className="newFeedback">
            <label htmlFor="newFeedbackName" className="newFeedbackLabel">
              Your name
            </label>
            <input
              name="newFeedbackName"
              className="newFeedbackName"
              type="text"
              ref={newContactName}
            />
            <textarea
              placeholder="Your message"
              className="newFeedbackValue"
              type="text"
              ref={newContactValue}
            />
            <button className="newFeedbackButton" type="submit" onClick={testF}>
              ADD
            </button>
          </div>
        </div>

        <div className="contacts--feedback">
          <h3>Client feedback</h3>
          {contactsData.map(item => (
            <div className="feedback" key={`item.name_${item.name}`}>
              <div className="feedback--header">
                <b>
                  {" "}
                  <p>{item.name}</p>
                </b>
              </div>
              <div className="feedback--body">
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
