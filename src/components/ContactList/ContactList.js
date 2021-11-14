import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from "../../redux/service";

import styles from './ContactList.module.css';
import actions from '../../redux/action-creators';
import Spinner from "../Spinner";
import ContactListItem from "../ContactListItem";

function ContactList() {
    // const contacts = useSelector(({contacts: {items, filter}}) => getFilteredContacts(items, filter));
    // const dispatch = useDispatch();
    const filter = useSelector(({contacts}) => contacts.filter);
    const { data, isSuccess, isLoading } = useGetContactsQuery();
    // const [deleteContact, {isLoading}] = useDeleteContactMutation();

    const filtered = isSuccess && getFilteredContacts(data, filter);

    return (
      <Fragment>
          {isLoading && <Spinner/>}
          {isSuccess &&
          <ul className={styles.list}>
              {filtered.map(({ id, name, phone }) => {
                  return (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        phone={phone}
                    />
                  );
              })}
          </ul>}
      </Fragment>
    );
}

function getFilteredContacts(items, filter) {
    return items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
    })
}

export default ContactList;