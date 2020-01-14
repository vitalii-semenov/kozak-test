import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../../components/Home';
import { userService } from '../../services/testServices';
import { setUsersToStore } from '../../actions/HomeActions/homeActions';
import { getAllUsers } from '../../reducers/home/homeSelectors';
import Login from '../../components/Login';
// import Routes from '../../constants/routes';

class HomePage extends Component {

  state = {
    staff: []
  };

  async componentDidMount() {
    let res = await userService.getAllEmployee()
    if (res) this.props.setUsersToStore({staff: res})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allUsers !== this.props.allUsers) {
      this.setState({staff: this.props.allUsers})
    }
  }

  handleAddNewEmployee = async (data) => {
    let res = await userService.addEmployee(data);
    if (res) this.props.setUsersToStore({staff: res})
  };

  handleEditEmployee = async (data) => {
    let res = await userService.editEmployee(data);
    if (res) this.props.setUsersToStore({staff: res})  };

  handleDeleteEmployee = async (data) => {
    let res = await userService.deleteEmployee(data);
    if (res) this.props.setUsersToStore({staff: res})
  };

  render() {
    const {staff} = this.state;
    return (
        <Home
          usersAll={staff}
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
