import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./components/contacts";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("saved-contacts")) || contactsData
  );
  const handleDelete = (id) => {
    setContacts((prev) => {
      const updatedContacts = prev.filter((contact) => contact.id !== id);
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(updatedContacts)
      );
      return updatedContacts;
    });
  };
  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filteredContacts = searchContacts;

  const handleAddContacts = ({ name, number }) => {
    const getFormatNumber = (number) =>
      `${String(number).slice(0, 3)}-${String(number).slice(3, 5)}-${String(
        number
      ).slice(-2)}`;
    const formatNumber = getFormatNumber(number);
    setContacts((prev) => [
      ...prev,
      { name, number: formatNumber, id: nanoid() },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1 style={{ marginLeft: "40px", fontSize: "40px", fontWeight: "bold" }}>
        Phonebook
      </h1>
      <ContactForm onAdd={handleAddContacts} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
