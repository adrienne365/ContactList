import ContactList from './components/ContactList'
// import SelectedContact from './components/SelectedContact'
import { useState } from "react"
import './App.css'


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    { selectedContactId ? 
      (<div>Single Contact View</div>) :
      (<ContactList 
      setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}