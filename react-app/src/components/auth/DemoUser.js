import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';

const DemoUser = () => {
  const dispatch = useDispatch()
  let email = 'demo@user.io'
  let password = 'pass'

  const demoLogin = async (e) => {
    dispatch(login(email, password))
  }

  return (
    <button onClick={demoLogin} className='demo-user-button'>Log in as Demo User</button>
  )
};

export default DemoUser;
