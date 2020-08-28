import React, { Component } from "react";
import Timer from "../tricksy/Timer";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0, timer: true };

    this.handleClick = this.handleClick.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleClick() {
    let counter = this.state.counter + 1;
    this.setState({ counter: counter });
  }

  handleHide() {
    this.setState({ timer: false });
  }

  render() {
    const { title } = this.props;
    const { counter, timer } = this.state;

    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    };
    return (
      <header
        onClick={() => this.handleClick("hi")}
        className='alert alert-primary'
      >
        <h1>{title}</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.handleHide}>Hide Timer</button>
        {timer ? <Timer start={10} /> : null}
        <div style={style}>
          <Link to='/'>Home</Link>
          <Link to='/content'>Content</Link>
          <Link to='/stuff'>Stuff</Link>
          <Link to='/about'>About</Link>
          <Link to='/articles'>Articles</Link>
        </div>
      </header>
    );
  }
}

export default Header;
