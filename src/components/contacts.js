import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h6>{contact.title}</h6>
            <p> {contact.details} </p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contacts