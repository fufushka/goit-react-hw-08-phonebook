import React from 'react';
import css from './RegistrationForm.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'Store/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name: name.toString(),
        email: email.toString(),
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
            <h2 className={`${css.form_title} ${css.title}`}>Create Account</h2>

            <input
              className={css.form__input}
              type="text"
              placeholder="Name"
              name="name"
            />
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
              SIGN UP
            </button>
          </form>
        </div>
        <div className={`${css.container} ${css.b_container}`} id="b_container">
          <form className={css.form} id="b_form">
            <h2 className={`${css.form_title} ${css.title}`}>
              Sign in to Website
            </h2>

            <input
              className={css.form__input}
              type="text"
              placeholder="Email"
            />
            <input
              className={css.form__input}
              type="password"
              placeholder="Password"
            />

            <button
              className={`${css.form__button} ${css.button} ${css.submit}`}
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className={css.switch} id="switch_cnt">
          <div className={css.switch__circle}></div>
          <div
            className={`${css.switch__circle} ${css.switch__circle__t}`}
          ></div>
          <div className={css.switch__container} id="switch_c1">
            <h2 className={`${css.switch_title} ${css.title}`}>Hello!</h2>
            <p className={`${css.switch__description} ${css.description}`}>
              To keep connected with us please login with your personal info
            </p>
            <Link to="/login">
              <button
                className={`${css.switch__button} 
            ${css.button} 
            ${css.switch_btn}`}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
