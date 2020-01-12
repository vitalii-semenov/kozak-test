import React, { Component } from 'react';

class UserService extends Component {
  #apiUrl = '/users.json';
  getAllUsers = async () => {
    const res = await fetch(this.#apiUrl, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    if (!res.ok) throw new Error(`Could not fetch data from ${this.#apiUrl}`);
    return await res.json();
  };
};

export const userService = new UserService();
