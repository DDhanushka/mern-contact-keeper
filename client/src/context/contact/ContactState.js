import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "ado gunaya",
        email: "ddd@gg.com",
        phone: "343533",
        type: "professional",
      },
      {
        id: 2,
        name: "ammo nethee",
        email: "ddd@gg.com",
        phone: "34533",
        type: "personal",
      },
      {
        id: 3,
        name: "sanaakra dsldkfj",
        email: "ddd@gg.com",
        phone: "37633",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   ADD_CONTACT
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //   DELETE_CONTACT
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //   SET_CURRENT

  //   CLEAR_CURRENT

  //   UPDATE_CONTACT

  //   FILTER_CONTACTS

  //   CLEAR_FILTER

  //   SET_ALERT

  //   REMOVE_ALERT

  return (
    <contactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
