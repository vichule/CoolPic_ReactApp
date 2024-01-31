import React, { useState, useEffect, useRef } from 'react';
import './nestedModal.css';
import Modal from '../BaseModal/baseModal';
import { useDispatch } from 'react-redux';
import { editDescription } from '../../features/favorites/favoritesSlice';



const NestedModal = ({description, isOpen, onClose, onSubmit, picture }) => {
  const [formState, setFormState] = useState(description);
  const focusInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editDescription({ id: picture.id, newDescription: formState }))
    onSubmit();
  };

  const handleInputChange = (event) => {
    setFormState(event.target.value)
    
  };
  

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
      <div className='infoContainer'>
          <label><b>Add your new description:</b></label>
          <input
            ref={focusInputRef}
            type="text"
            name="newDescription"
            onChange={handleInputChange}
            className='inputEdit'
            
          />

          <button  className='editBtn'>Confirm</button>
      </div>
      </form>
    </Modal>
  );
};

export default NestedModal;

