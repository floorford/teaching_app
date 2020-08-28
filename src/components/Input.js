import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { input: "", date: new Date() };

    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.currentTarget.value });
  }

  handleDate(date) {
    this.setState({ date: date });
  }

  render() {
    const { date } = this.state;
    return (
      <form className='form mb-4'>
        <input
          onChange={(e) => this.handleChange(e)}
          className='form-control'
          value={this.state.input}
        />
        <p>password length: {this.state.input.length}</p>
        <Button variant='secondary'>Secondary</Button>
        <DatePicker selected={date} onChange={this.handleDate} />
      </form>
    );
  }
}

export default Input;
