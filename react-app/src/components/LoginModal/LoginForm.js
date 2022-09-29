import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from '../auth/DemoUser';
import './LoginForm.css'

const LoginForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [buttonChange, setButtonChange] = useState('login-submit-button-disabled')

  const user = useSelector(state => state.session.user);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setButtonChange('login-submit-button')
    }
    if (email.length === 0 || password.length === 0) {
      setButtonChange('login-submit-button-disabled')
    }
  }, [email, password])

  const onLogin = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)

    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    setShowModal(false)
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-container'>
      <div className='cancel-button-container'>
        <i
          className="fa-solid fa-xmark fa-lg"
          onClick={() => setShowModal(false)}
        ></i>
      </div>
      <div className='login-form-header-container'>
        <h2 className='login-form-header'>Log In</h2>
      </div>
      <form onSubmit={onLogin} className='login-form-inner-container'>
        {hasSubmitted && errors.length > 0 && (<div className='error-container'>
          {errors.map((error, ind) => (
            <div key={ind} className='error-text'>{error.split(":")[1]}</div>
          ))}
        </div>)}
        <div className='login-form-sections'>
          <label htmlFor='email' className='login-form-labels'>Email <p className='login-form-required-text'>* required</p></label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className='login-form-inputs'
          />
        </div>
        <div className='login-form-sections'>
          <label htmlFor='password' className='login-form-labels'>Password <p className='login-form-required-text'>* required</p></label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className='login-form-inputs'
          />
          <div className='login-form-button-container'>
            <button type='submit' className={`${buttonChange}`}>Login</button>
          </div>
        </div>
      </form>
      <DemoUser />
    </div>
  );
};

export default LoginForm;
