import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  isDuplicate,
  handleSubmit,
  handleChange
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={(e) => handleChange(e, setName)} value={name} placeholder="type name"/>
      <input name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="type phone" />
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type email" type="email"/>
      <input type="submit" value="Add contact" disabled={isDuplicate} />
    </form>
  );
};