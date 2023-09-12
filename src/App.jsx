import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import { useState } from "react"
import './App.css'


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
{/* ternary operator: if there's a selected contact, render it, if not, render the whole list */}
    { selectedContactId ? (
      <SelectedContact
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}
      />
        ) :
      (<ContactList 
      setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}