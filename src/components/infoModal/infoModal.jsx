import React, { useState, useEffect, useRef } from 'react';
import './infoModal.css';
import Modal from '../BaseModal/baseModal';
import NestedModal from '../nestedModal/nestedModal';



const InfoModal = ({description,width, height,likes, isOpen, onClose, picture }) => {
  const focusInputRef = useRef(null);
  const [openNested, setOpenNested] = useState(false)
  const [currentDescription, setCurrentDescription] = useState(description)

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleEdit = () =>{
    setOpenNested(true)
  }

  const handleCloseEdit = () =>{
    setOpenNested(false)
  }

  const handleFormSubmit = (newDescription) => {
      setCurrentDescription(newDescription)
      handleCloseEdit();
  }

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <div>
        <div className='infoContainer'>
              <b>Description:</b><p>{currentDescription === undefined || currentDescription.length === 0 ? 'No description' : currentDescription.length <= 28 ? currentDescription : currentDescription.slice(0,120)+'...'}</p>
              <b>Width:</b><p>{width}</p>
              <b>Height:</b><p>{height}</p>
              <b>Likes:</b><p>{likes}</p>
              
              
              
              
              <button onClick={handleEdit}  className='editBtn'>Edit Description</button>
        </div>
        {openNested ? <NestedModal description={currentDescription}
                               onClose={handleCloseEdit}
                               isOpen={openNested}
                               onSubmit={handleFormSubmit}
                               picture={picture}
                            /> 
            : ''}
      </div>
    </Modal>
  );
};

export default InfoModal;

