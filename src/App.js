import React, { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route, Routes } from "react-router-dom";

function App() {
  const [contacts, setcontacts] = useState([]);

  const removeContact = (contact) => {
    setcontacts((prev) => prev.filter((c) => c.id !== contact.id));
    ContactsApi.remove(contact);
  };
  const addContact = (contact) => {
    setcontacts((prev) => [...prev, contact]);
    ContactsApi.create(contact);
  };

  useEffect(() => {
    ContactsApi.getAll().then((data) => {
      setcontacts(data);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ListContacts
              onDeleteContact={removeContact}
              contacts={contacts}
              // onNavigate={() => setstatus("create")}
            />
          }
        />

        <Route
          path="/create"
          element={<CreateContact onCreate={addContact} />}
        />
      </Routes>
    </div>
  );
}

export default App;
