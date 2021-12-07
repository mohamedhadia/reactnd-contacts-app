import React from 'react'

export default function ListContacts(props) {
  return (
    <div>
       <ol className="contact-list">
        {props.contacts.map((contact) => (
          <li className="contact-list-item" key={contact.id}>
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
