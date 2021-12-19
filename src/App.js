import React, { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const [contacts, setcontacts] = useState([]);

  const removeContact = (contact) => {
    setcontacts((prev) => prev.filter((c) => c.id !== contact.id));
    ContactsApi.remove(contact);
  };
  const addContact = (contact) => {
    ContactsApi.create(contact).then((contact) =>
      setcontacts((prev) => [...prev, contact])
    );
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
          element={
            <CreateContact
              onCreate={(contact) => {
                addContact(contact);
                navigate(`/`);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
