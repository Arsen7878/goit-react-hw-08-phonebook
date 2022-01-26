import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contatcs';
import c from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  return (
    <div className={c.filter}>
      <label className={c.label}>
        Enter name for filter:
        <input
          type="text"
          value={value}
          onChange={e => dispatch(contactsOperations.filter(e.target.value))}
          className={c.input}
        />
      </label>
    </div>
  );
};

export default Filter;
