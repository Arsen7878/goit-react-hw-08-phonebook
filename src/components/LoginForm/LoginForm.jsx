import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';
import Button from '../Button';

import c from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
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

    dispatch(logIn({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');

    setPassword('');
  };

  return (
    <form className={c.form} onSubmit={handleSubmit}>
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
      <Button type="submit" title="Login" />
    </form>
  );
};

export default LoginForm;
