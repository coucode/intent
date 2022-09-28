import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateCategoryForm from './CreateCategoryForm';

function CategoryFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Project</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCategoryForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CategoryFormModal;