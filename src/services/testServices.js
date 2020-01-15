import React, {Component} from 'react';
import {getToken} from '../actions/loginActions';

class UserService extends Component {
  #apiUrl = 'http://localhost:4000/api/v1';

  postData = async (url, data) => {
    try {
      const token = getToken();
      const res = await fetch(`${this.#apiUrl}/${url}`,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
          });
      if (!res.ok) throw new Error(`Could not fetch data from ${this.#apiUrl}/${url}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  getData = async (url) => {
    try {
      const token = getToken();
      const res = await fetch(`${this.#apiUrl}/${url}`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': `Bearer ${token}`,
            },
          });
      if (!res.ok) throw new Error(`Could not fetch data from ${this.#apiUrl}/${url}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  register = async (data) => await this.postData('register', data);

  login = async (data) => {
    let res = await this.postData('login', data);
    if (res) return await res.json();
  };

  getAllEmployee = async () => {
    let res = await this.getData('all');
    if (res) return await res.json();
  };

  addEmployee = async (data) => {
    let res = await this.postData('add', data);
    if (res) {
      let staff = await this.getAllEmployee();
      return staff;
    }
  };

  deleteEmployee = async (data) => {
    let res = await this.postData('delete', data);
    if (res) {
      let staff = await this.getAllEmployee();
      return staff;
    }
  };

  editEmployee = async (data) => {
    let res = await this.postData('edit', data);
    if (res) {
      let staff = await this.getAllEmployee();
      return staff;
    }
  };

};

export const userService = new UserService();
