import React, { Component } from "react";

export default class ListContacts extends Component {
  render() {
    console.log("props", this.props);
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ol>
    );
  }
}
