import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

function CreateContact(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = serializeForm(e.target, { hash: true });
    props.onCreate(value);
  };
  return (
    <div>
      <Link className="close-create-contact" to="/">
        close
      </Link>
      <form className="create-contact-form" onSubmit={handleSubmit}>
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add contact</button>
        </div>
      </form>
    </div>
  );
}

export default CreateContact;
