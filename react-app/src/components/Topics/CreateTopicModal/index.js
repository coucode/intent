import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateTopicForm from './CreateTopicForm';

function TopicFormModal({category}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Topic</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTopicForm setShowModal={setShowModal} category={category} />
        </Modal>
      )}
    </>
  );
}

export default TopicFormModal;