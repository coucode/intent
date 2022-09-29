import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateCategoryForm from './CreateCategoryForm';
import '../CategoryStyles/CategoryForms.css'

function CategoryFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='category-form-create-new-container'>
        
        <button onClick={() => setShowModal(true)} className='create-category-button'> <i className="fa-solid fa-plus"></i> Create Category</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCategoryForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CategoryFormModal;