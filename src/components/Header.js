import React from "react";
import "./Header.css";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Header()
{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-brand">
                <img src={logo} alt="contact handler logo" id="logo"></img>
                <h1>Contact Manager</h1></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="ContactHandler/" activeClassName="active">Create Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="ContactHandler/allContacts" activeClassName="active">All Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header;