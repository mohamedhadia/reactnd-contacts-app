import React, { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";
import CreateContact from "./utils/CreateContact";

function App() {
  const [contacts, setcontacts] = useState([]);
  const [status, setstatus] = useState("contacts");

  const removeContact = (contact) => {
    setcontacts((prev) => prev.filter((c) => c.id !== contact.id));
    ContactsApi.remove(contact);
  };

  useEffect(() => {
    ContactsApi.getAll().then((data) => {
      setcontacts(data);
    });
  }, []);

  return (
    <div>
      {status === "contacts" && (
        <ListContacts onDeleteContact={removeContact} contacts={contacts} />
      )}
      {status === "create" && <CreateContact />}
    </div>
  );
}

export default App;
