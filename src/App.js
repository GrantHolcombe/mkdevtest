import React, { Component } from 'react';
import axios from 'axios';
import { Form } from './Form.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      msg: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.id === 'name'){
      this.setState({name: event.target.value});
    }
    if(event.target.id === 'email'){
      this.setState({email: event.target.value});
    }
    if(event.target.id === 'msg'){
      this.setState({msg: event.target.value});
    }
  }

  handleSubmit(event) {

    axios.post('https://3grs0rs7pj.execute-api.us-west-2.amazonaws.com/production/contact', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      name: '',
      email: '',
      msg: ''
    })

    window.alert('Thank you!')

    event.preventDefault();
  }

  render() {
    return (
      <Form
        nameVal={this.state.name}
        emailVal={this.state.email}
        msgVal={this.state.msg}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
