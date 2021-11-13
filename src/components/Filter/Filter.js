import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import actions from '../../redux/action-creators';

function Filter() {
    const contacts = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <label className={styles.label}>
            Find contacts by name
            <input
                className={styles.input}
                type="text"
                name="filter"
                value={filterValue}
                autoComplete="off"
                disabled={!contacts.length > 0}
                onChange={e => dispatch(actions.changeContactsFilter(e.target.value))}
            />
        </label>
    );
}

export default Filter;