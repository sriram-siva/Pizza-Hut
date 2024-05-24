import React, { Component } from 'react';

class Log extends Component {
  state = {
    name: '',
    age: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age } = this.state;
    alert(`Your name is ${name} and you are ${age} years old.`);
  };

  render() {
    const { name, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Log;