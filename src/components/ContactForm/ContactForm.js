import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactForm.module.css';
import actions from '../../redux/action-creators'


function ContactForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const existingContacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const onInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const onInputReset = () => {
        setName('');
        setNumber('');
    }

    const onFormSubmit = contact => dispatch(actions.addUsersContact(contact));

    const HandleFormSubmit = event => {
        event.preventDefault();
        
        const existingContact = existingContacts.find(existingContact => {
            return existingContact.name === name;
        });
        if (existingContact) {
            alert('Contact already exists. Try another name');
            setName('');
            return;
        }
        onFormSubmit({name, number});
        onInputReset();
    }

        return (
            <form className={styles.form} onSubmit={HandleFormSubmit}>
                <label className={styles.label}>
                    Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        autoComplete="off"
                        onChange={onInputChange}
                    />
                </label>
                <label className={styles.label}>
                    Number
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        autoComplete="off"
                        onChange={onInputChange}
                    />
                </label>
                <button className={styles.button} type="submit">Add a contact</button>
            </form>
        );
}

export default ContactForm;