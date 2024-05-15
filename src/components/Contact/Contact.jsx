import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
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
        <button
          className={s.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
