import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, handleDelete }) => {
  return (
    <>
      <li className={s.contact_item}>
        <div className={s.contact_container}>
          <p className={s.contact_text}>
            <FaUser />
            <span className={s.contact_span}>{name}</span>
          </p>
          <p className={s.contact_text}>
            <FaPhoneAlt />
            <span className={s.contact_span}>{number}</span>
          </p>
        </div>
        <button className={s.button} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
