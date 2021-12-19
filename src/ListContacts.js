import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ListContacts(props) {
  const [queryN, setqueryN] = useState("");

  const showingContacts =
    queryN === ""
      ? props.contacts
      : props.contacts.filter((c) =>
          c.name.toLowerCase().includes(queryN.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          type="text"
          className="search-contacts"
          placeholder="search contacts"
          value={queryN}
          onChange={(e) => {
            setqueryN(e.target.value);
          }}
        />
        <a href="#create" className="add-contact" onClick={props.onNavigate}>
          Add contact
        </a>
      </div>

      {showingContacts !== props.contacts && (
        <div className="showing-contacts">
          Now showing {showingContacts.length} of {props.contacts.length}
          <button
            onClick={() => {
              setqueryN("");
            }}
          >
            show all
          </button>
        </div>
      )}
      <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li className="contact-list-item" key={contact.id}>
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              onClick={() => props.onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
