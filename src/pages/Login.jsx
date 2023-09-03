import React from 'react';
import css from '../components/RegistrationForm/RegistrationForm.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'Store/auth/operations';
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form_div}>
      <div className={css.main}>
        <div className={`${css.container} ${css.a_container}`} id="a_container">
          <form className={css.form} id="a_form" onSubmit={handleSubmit}>
            <h2 className={`${css.form_title} ${css.title}`}>
              Login to Account
            </h2>

            <input
              className={css.form__input}
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className={css.form__input}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className={`${css.form__button} ${css.button} ${css.submit}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className={css.switch} id="switch_cnt">
          <div className={css.switch__circle}></div>
          <div
            className={`${css.switch__circle} ${css.switch__circle__t}`}
          ></div>
          <div className={css.switch__container} id="switch_c1">
            <h2 className={`${css.switch_title} ${css.title}`}>
              Welcome Back !
            </h2>
            <p className={`${css.switch__description} ${css.description}`}>
              Enter your personal details and start journey with us
            </p>

            <Link to="/register">
              <button
                className={`${css.switch__button} 
            ${css.button} 
            ${css.switch_btn}`}
              >
                Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
