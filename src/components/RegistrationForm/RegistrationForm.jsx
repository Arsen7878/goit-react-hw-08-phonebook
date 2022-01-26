import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import c from './RegistrationForm.module.css';
import { authOperations } from 'redux/auth';

const RegistrationForm = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');

    setEmail('');

    setPassword('');
  };

  return (
    <form className={c.form} onSubmit={handleSubmit}>
      <label className={c.label}>
        Name:
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInput}
          className={c.input}
          required
        />
      </label>
      <label className={c.label}>
        Email:
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleInput}
          className={c.input}
          required
        />
      </label>
      <label className={c.label}>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleInput}
          className={c.input}
          autoComplete="true"
          required
        />
      </label>
      <Button type="submit" title="Register" />
    </form>
  );
};

export default RegistrationForm;
