import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactList.module.css';
import actions from '../../redux/action-creators';


function ContactList() {
    const contacts = useSelector(({contacts: {items, filter}}) => getFilteredContacts(items, filter));
    const dispatch = useDispatch();

    return (
        <ul className={styles.list}>
            {contacts.map(({uid, name, number}) => {
                return (
                    <li className={styles.item} key={uid}>
                        <div className={styles.wrapper}>
                            <p className={styles.name}>{name}</p>
                            <span className={styles.number}>{number}</span>
                            <button className={styles.button}
                                    onClick={() => dispatch(actions.deleteUsersContact(uid))}>Delete
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

function getFilteredContacts(items, filter) {
    return items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase())
    })
}

export default ContactList;