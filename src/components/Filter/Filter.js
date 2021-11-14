import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import actions from '../../redux/action-creators';

import {useGetContactsQuery} from "../../redux/service";

function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const { data, isSuccess } = useGetContactsQuery();
    const enabled = isSuccess && data.length > 0;

    return (
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          autoComplete="off"
          disabled={!enabled}
          onChange={e => dispatch(actions.changeContactsFilter(e.target.value))}
        />
      </label>
);
}

export default Filter;