import React, {Component} from 'react';

class UserService extends Component {
  #apiUrl = 'http://localhost:4000/api/v1';

  postData = async (url, data) => {
    try {
      const res = await fetch(`${this.#apiUrl}/${url}`,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
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
    return await res.json();
  }
};

export const userService = new UserService();
