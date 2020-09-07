import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css';

function Login({ onLogin }) {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidInputs, setInvalidInputs] = useState(false)

  /**
   * Handles login event, redirect to /interests
   * @param {*} event 
   */
  function handleLogin(event) {
    event.preventDefault();

    if (!username || !password) {
      return setInvalidInputs(true)
    }

    onLogin(username)
    history.push('/interests');
  }

    /**
   * Handles with input value's changes
   * and set state according to input's id
   * @param {EventHTML{}} event from input
   */
  function handleValueChange (event) {
    setInvalidInputs(false)

    const data = event && event.id;

    if (data === 'username') setUsername(event.value)
    if (data === 'password') setPassword(event.value)
  }

  return (
    <div id="login-page" className="container">
      <Header />
      <main>
        <h1>user area</h1>

        <form onSubmit={ handleLogin }>
          <fieldset>
            <Input
              name="username"
              label="username"
              type="text"
              value={username}
              onChange={ handleValueChange }
            />
            <Input
              name="password"
              label="password"
              type="password"
              value={password}
              onChange={ handleValueChange }
            />
          </fieldset>

          <footer>
            {invalidInputs ?
              <p>Fill in all the data</p>
              : null
            }
            <Button label="login" type="submit" />
          </footer>
        </form>
      </main>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
