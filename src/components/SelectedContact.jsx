import { useState, useEffect } from 'react'

export default function SelectedContact({selectedContactId}) {
const [contact, setContact] = useState(null);
console.log(contact)

useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const contact = await response.json();
        setContact(contact);
        console.log(selectedContactId)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchContact()
  },[]);

  return (
    <div>
      {contact && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
          <div>
            <b>Address:</b>
            <p>
              <b>Street:</b>
              {contact.address.street}
              <br />
              <b>City/Zip:</b>
              {contact.address.city}
              {contact.address.zipcode}
            </p>
          </div>
          <p>
            <b>Company:</b> {contact.company.name}
          </p>
        </div>
      )}
    </div>
  );
}