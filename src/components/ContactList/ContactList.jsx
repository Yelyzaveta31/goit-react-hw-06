import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className={s.contact_list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
