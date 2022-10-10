import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import DemoUser from '../auth/DemoUser';
import './SignUpForm.css'

const SignUpForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [buttonChange, setButtonChange] = useState('signup-submit-button-disabled')

  const user = useSelector(state => state.session.user);

  useEffect(() => {
    if (email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0) {
      setButtonChange('signup-submit-button')
    }
    if (email.length === 0 || password.length === 0 || firstName.length === 0 || lastName.length === 0 || repeatPassword.length === 0) {
      setButtonChange('signup-submit-button-disabled')
    }
  }, [email, password, firstName, lastName, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)

    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email.toLowerCase(), password, image));
      if (data) {
        let parseData = Object.values(data)
        let flat = parseData.flat(2)
        setErrors(flat)
      }
    }
  };


  if (user) {
    setShowModal(false)
    return <Redirect to='/' />
  }

  function passwordCheck() {
    if (password !== repeatPassword) {
      return (
        <div className='error-text'>
          Passwords must match
        </div>
      )
    }
  }

  function charRemaining(max, input) {
    return Number(max) - Number(input.length)
  }

  return (
    <div className='signup-form-container'>
      <div className='cancel-button-container'>
        <i
          className="fa-solid fa-xmark fa-lg"
          onClick={() => setShowModal(false)}
        ></i>
      </div>
      <div className='signup-form-header-container'>
        <h2 className='signup-form-header'>Get Started</h2>
      </div>
      <form onSubmit={onSignUp} className='signup-form-inner-container'>
        {hasSubmitted && errors.length > 0 && (<div className='error-container'>
          {errors.map((error, ind) => (
            <div key={ind} className='error-text'>{error}</div>
          ))}
        </div>)}
        {passwordCheck()}
        <div className='signup-form-sections'>
          <label className='signup-form-labels'>First Name <p className='category-form-required-text'>*</p></label>
          <input
            type='text'
            name='firstName'
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}
            className='signup-form-inputs'
            placeholder='Your First Name'
            maxLength={100}
          ></input>
          <p className='signup-form-char-remaining-text'>{charRemaining(100, firstName)} characters remaining</p>
        </div>
        <div className='signup-form-sections'>
          <label className='signup-form-labels'>Last Name <p className='category-form-required-text'>*</p></label>
          <input
            type='text'
            name='lastName'
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}
            className='signup-form-inputs'
            placeholder='Your Last Name'
            maxLength={100}
          ></input>
          <p className='signup-form-char-remaining-text'>{charRemaining(100, lastName)} characters remaining</p>
        </div>
        <div className='signup-form-sections'>
          <label className='signup-form-labels'>Email <p className='category-form-required-text'>*</p></label>
          <input
            type='text'
            name='email'
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            className='signup-form-inputs'
            placeholder='Your Email Address'
            maxLength={100}

          ></input>
          <p className='signup-form-char-remaining-text'>{charRemaining(100, email)} characters remaining</p>
        </div>
        <div className='signup-form-sections'>
          <label className='signup-form-profile-label'>Profile Picture</label>
          <p className='signup-form-image-subtitle'>Only jpg, jpeg, png image links are accepted</p>
          <input
            type='url'
            name='image'
            onChange={(e) => { setImage(e.target.value) }}
            value={image}
            className='signup-form-inputs'
            id='profile-picture-input-text'
            placeholder='Provide a link for your profile (Optional)'
          ></input>
        </div>
        <div className='signup-form-sections'>
          <label className='signup-form-labels'>Password <p className='category-form-required-text'>*</p></label>
          <input
            type='password'
            name='password'
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
            className='signup-form-inputs'
            placeholder='Password'

          ></input>
        </div>
        <div className='signup-form-sections'>
          <label className='signup-form-labels'>Repeat Password <p className='category-form-required-text'>*</p></label>
          <input
            type='password'
            name='repeat_password'
            onChange={(e) => { setRepeatPassword(e.target.value) }}
            value={repeatPassword}
            required={true}
            className='signup-form-inputs'
            placeholder='Repeat your password'
          ></input>
        </div>
        <button type='submit' className={`${buttonChange}`} >Sign Up</button>
      </form>
      <DemoUser />
    </div>
  );
};

export default SignUpForm;
