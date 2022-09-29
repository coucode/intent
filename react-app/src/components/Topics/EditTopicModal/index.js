import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditTopicForm from './EditTopicForm';

function EditTopicFormModal({topic, category}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='edit-topic-button'>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTopicForm setShowModal={setShowModal} category={category} topic={topic} />
        </Modal>
      )}
    </>
  );
}

export default EditTopicFormModal;