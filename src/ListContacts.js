import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ListContacts(props) {
  const [queryN, setqueryN] = useState("");
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
        {JSON.stringify(queryN)}
      </div>
      <ol className="contact-list">
        {props.contacts.map((contact) => (
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
              classNam="contact-remove"
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
