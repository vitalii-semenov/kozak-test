import React, {Component} from 'react';
import Login from '../../components/Login';

class LoginPage extends Component {

  handleLogin = ({login, password}) => {
    console.log('login', {login, password});
  };

  handleRegistration = (user) => {
    console.log('user to registration', user);
  };

  render() {
    return (
        <Login
            handleLogin={this.handleLogin}
            handleRegistration={this.handleRegistration}
        />
    );
  }
}

export default LoginPage;
