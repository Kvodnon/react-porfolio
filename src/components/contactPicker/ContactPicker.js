import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="" selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
