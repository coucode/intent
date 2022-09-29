import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateTopicForm from './CreateTopicForm';
import '../TopicStyles/TopicList.css'

function TopicPlus({category}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='create-topic-plus-button'><i className="fa-solid fa-plus"></i> Create New Topic</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTopicForm setShowModal={setShowModal} category={category} />
        </Modal>
      )}
    </>
  );
}

export default TopicPlus;