import React from "react";
import { addInputDataCreator } from "../redux/reducers";


const ContactsContainer = props => {
  
let feedbackData = props.props.addInputDataReducer[0];
let contactsData = props.props.addInputDataReducer[1];


return (
    <Contacts feedbackData={feedbackData} contactsData={contactsData}/>);
};

export default ContactsContainer
