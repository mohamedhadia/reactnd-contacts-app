import React, { Component } from "react";

export default class ListContacts extends Component {
  render() {
    console.log("props", this.props);
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
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
    );
  }
}
