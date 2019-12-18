import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="navbar-light ">
  <div className="container">
    <nav className="navbar navbar-expand-lg ">
      <a className="logo navbar-brand mb-0 h1 " href="/">Rancho</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-2 ">
          <li className="nav-item">
            <a className="nav-link" href="/" >Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" >About </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Portfolio </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Expertise </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

    );
  }
}

export default Header;
