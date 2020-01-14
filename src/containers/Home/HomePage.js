import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../../components/Home';
import { userService } from '../../services/testServices';
import { setUsersToStore } from '../../actions/HomeActions/homeActions';
import { getAllUsers } from '../../reducers/home/homeSelectors';
// import Routes from '../../constants/routes';

class HomePage extends Component {

  state = {
    users: []
  };

  async componentDidMount() {
    // const {setUsersToStore} = this.props;
    // const fetchUsers = await userService.getAllUsers();
    // setUsersToStore(fetchUsers.users);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allUsers !== this.props.allUsers) {
      this.setState({users: this.props.allUsers})
    }
  }

  handleAddNewEmployee = (data) => {
    console.log('New user', data);
  };

  handleEditEmployee = (data) => {
    console.log('Edit user', data);
  };

  handleDeleteEmployee = (id) => {
    console.log('Delete user with id:', id)
  };

  render() {
    const {users} = this.state;
    return (
        <Home
          users={users}
          handleAddNewEmployee={this.handleAddNewEmployee}
          handleEditEmployee={this.handleEditEmployee}
          handleDeleteEmployee={this.handleDeleteEmployee}
        />
    );
  }
}

const mapStateToProps = (state) => ({
  allUsers: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  setUsersToStore: users => dispatch(setUsersToStore(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
