import React from 'react';
import css from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';
const AuthNav = () => {
  return (
    <>
      <li className={css.header_item}>
        <NavLink className={css.liquid} to="/login">
          Login
        </NavLink>
      </li>
      <li className={css.header_item}>
        <NavLink className={css.liquid} to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
};

export default AuthNav;
