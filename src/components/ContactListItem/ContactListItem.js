import { useDeleteContactMutation } from "../../redux/service";
import { toast } from "react-toastify";
import styles from "./ContactListItem.module.css";


function ContactListItem({id, name, phone}) {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  const handleDeleteContact = id => {
    deleteContact(id);
    toast.warn(`${name}'s contact is deleted from directory.`);
  }

  return (
    <li className={styles.item} key={id}>
      <div className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <span className={styles.number}>{phone}</span>
        <button className={styles.button} disabled={isLoading}
                onClick={() => handleDeleteContact(id)}>{isLoading ? "Deleting" : "Delete"}
        </button>
      </div>
    </li>
  );
}

export default ContactListItem;