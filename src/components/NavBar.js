/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <h2>Math Magicians</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div className="line" />
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <div className="line" />
      <li>
        <Link to="/FetchData">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
