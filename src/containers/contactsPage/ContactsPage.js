import React, { useState } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setDuplicate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    addContact({name: elements['name'].value, email: elements['email'].value, phone: elements['phone'].value});
    setName('');
    setPhone('');
    setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const checkDuplicate = (name) => {
      return contacts.filter((contacts) => contacts.name === name).length;
  }

  const handleChange = (e, callback) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    callback(e.target.value);
    
    if (contacts.length) {
      setDuplicate(checkDuplicate(e.target.value));
    }
  };
  
  if (isDuplicate) {
    alert('Contact name alredy isset!');
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleChange={handleChange}
          isDuplicate={isDuplicate}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
