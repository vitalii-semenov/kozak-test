import React, {useState} from 'react';
import {Button} from 'primereact/button';
import styles from './Login.module.scss'
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';

const Login = ({handleLogin, handleRegistration}) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [user, setUser] = useState({
    login: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser(prevState => ({...prevState, [name]: value}))
  };

  const clearValues = () => {
    [...document.querySelectorAll('[data-input]')].forEach(el => el.value = '');
    setUser({
      login: '',
      password: '',
      email: '',
    });
  };

  return (
      <div className={styles.container}>
        {!isRegistration ?
            <div className={styles.signForm}>
              <h1>Login page</h1>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Email</span>
                <InputText data-input value={user['email']} placeholder="email" name={'email'} keyfilter="alphanum" onChange={(e) => handleChange(e)}/>
              </div>

              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Password</span>
                <Password data-input placeholder="password" name={'password'} onChange={(e) => handleChange(e)}/>
              </div>
              <Button label="Sign In" onClick={() => handleLogin(user)}/>
              <div className={styles.formBottom}>If isn't registered:</div>
              <Button label="To registration" className="p-button-secondary" onClick={() => {
                clearValues();
                setIsRegistration(true);
              }}/>
            </div> :
            <div className={styles.signForm}>
              <h1>Registration page</h1>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Name</span>
                <InputText data-input id={'registrationLogin'} value={user['login']} placeholder="login" name={'login'} keyfilter="alphanum" onChange={(e) => handleChange(e)}/>
              </div>

              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Password</span>
                <Password data-input placeholder="password" name={'password'} onChange={(e) => handleChange(e)}/>
              </div>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Email</span>
                <InputText data-input placeholder="email" name={'email'} keyfilter="email" onChange={(e) => handleChange(e)}/>
              </div>
              <Button label="Sign Up" onClick={() => handleRegistration(user)} />
              <div className={styles.formBottom}>Back to login:</div>
              <Button label="To Login" className="p-button-secondary" onClick={() => {
                clearValues();
                setIsRegistration(false);
              }}/>
            </div>}


      </div>
  );
};

export default Login;
