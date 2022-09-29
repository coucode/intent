import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditCategoryForm from './EditCategoryForm';

function EditCategoryFormModal({category}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Category</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCategoryForm category={category} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditCategoryFormModal;