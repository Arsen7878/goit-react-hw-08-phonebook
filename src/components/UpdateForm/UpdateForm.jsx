import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { contactsOperations } from 'redux/contatcs';
import PropTypes from 'prop-types';
import c from './UpdateForm.module.css';
import Button from 'components/Button';
import { useLocation } from 'react-router-dom';

const UpdateForm = ({ onCloseModal }) => {
  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  const { state } = useLocation();
  const id = state.id;

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');

    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      contactsOperations.updateContact({
        data: { name, number },
        id,
        token,
      }),
    );

    onCloseModal();

    reset();
  };

  return (
    <form className={c.form} onSubmit={handleSubmit}>
      <label className={c.label}>
        New name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          className={c.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={c.label}>
        New number:
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleInput}
          className={c.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div>
        <ul className={c.list}>
          <li className={c.item}>
            <Button type="submit" title="Save" />
          </li>

          <li className={c.item}>
            <Button type="button" title="Cancel" onClick={onCloseModal} />
          </li>
        </ul>
      </div>
    </form>
  );
};

UpdateForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default UpdateForm;
