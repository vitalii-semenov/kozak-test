import React, {Component} from 'react';
import Login from '../../components/Login';
import {userService} from '../../services/testServices';
import {setToken} from '../../actions/loginActions';

class LoginPage extends Component {

  handleLogin = async ({email, password}) => {
    let {token} = await userService.login({email, password});
    setToken(token);
    this.props.history.push('/');

  };

  handleRegistration = (user) => {
    userService.register(user)
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
