import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { SwitchModalContext } from "../../context/SwitchModalContext"
import SignUpForm from './SignUpForm';

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(SwitchModalContext)
  const { liContext, setLiContext, setSuContext } = context;

  useEffect(() => {
    if (showModal === true) {
      setSuContext(true)
      setLiContext(false)
    } else {
      setSuContext(null)
      setLiContext(null)
    }
  }, [showModal, setLiContext, setSuContext])

  useEffect(() => {
    if (liContext === true){
      setShowModal(false)
    }
  }, [liContext])

  return (
    <>
      <button onClick={() => setShowModal(true)} className='splash-buttons' id='splash-orange'>Get Started</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;