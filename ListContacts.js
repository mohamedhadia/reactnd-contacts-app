import React, { Component } from "react";

export default class ListContacts extends Component {
  render() {
    console.log("props", this.props);
    return (
      <ol className="contact-list">
        <li>item</li>
      </ol>
    );
  }
}
