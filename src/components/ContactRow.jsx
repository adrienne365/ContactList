import React from "react"

export default function ContactRow({ setSelectedContactId, contact }) {
    return (
    <tr
        onClick={() => {
            // sets the selected Id to the Id of the contact clicked
            setSelectedContactId(contact.id);
        }}>
            {/* this is the table that is rendered as the full list */}
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
    );
}