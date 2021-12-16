import React, { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";
function App() {
  const [contacts, setcontacts] = useState([]);

  const removeContact = (contact) => {
    setcontacts((prev) => prev.filter((c) => c.id !== contact.id));

    // this.setState((currentState) => ({
    //   contacts: currentState.contacts.filter((c) => {
    //     return c.id !== contact.id;
    //   }),
    // }));
  };

  useEffect(() => {
    ContactsApi.getAll().then((data) => {
      setcontacts(data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <ListContacts onDeleteContact={removeContact} contacts={contacts} />
    </div>
  );
}

export default App;
