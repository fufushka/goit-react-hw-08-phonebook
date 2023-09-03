import React from 'react';
import css from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'Store/auth/operations';
const Menu = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={css.liquid}
      onClick={() => {
        dispatch(logOut());
      }}
    >
      Logout
    </button>
  );
};

export default Menu;
