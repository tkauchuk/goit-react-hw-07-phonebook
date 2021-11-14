import { Fragment } from "react";
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';

import { useGetContactsQuery } from "../../redux/service";

import Spinner from "../Spinner";
import ContactListItem from "../ContactListItem";

function ContactList() {
    const filter = useSelector(state => state.filter);
    const { data, isSuccess, isLoading } = useGetContactsQuery();
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