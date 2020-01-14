import React, {Component} from 'react';
import Login from '../../components/Login';
import {userService} from '../../services/testServices';
import {setToken} from '../../actions/loginActions';

class LoginPage extends Component {

  handleLogin = async ({email, password}) => {
    let res = await userService.login({email, password});
    if (res) {
      setToken(res.token);
      this.props.history.push('/');
    }
  };

  handleRegistration = (user) => {
    userService.register(user)
    this.props.history.push('/login');
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
