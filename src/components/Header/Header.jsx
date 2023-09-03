import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Store/auth/slice';
import AuthNav from 'components/AuthNav/AuthNav';
import Menu from 'components/Menu/Menu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <ul className={css.header_list}>
        <li className={css.header_item}>
          <NavLink className={css.liquid} to="/">
            Home
          </NavLink>
        </li>

        <ul className={css.register_list}>
          {isLoggedIn ? <Menu /> : <AuthNav />}
        </ul>
      </ul>
    </header>
  );
};

export default Header;
