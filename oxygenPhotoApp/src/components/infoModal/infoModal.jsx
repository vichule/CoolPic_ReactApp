import React, { useState, useEffect, useRef } from 'react';
import './infoModal.css';
import Modal from '../BaseModal/baseModal';
import NestedModal from '../nestedModal/nestedModal';



const InfoModal = ({id,description,width, height,likes, isOpen, onClose, picture }) => {
  const focusInputRef = useRef(null);
  const [openNested, setOpenNested] = useState(false)
  //const [newDescription, setNewDescription] = useState(description)

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

  const handleFormSubmit = () => {
    //setNewDescription(data);
    handleCloseEdit();
  };

  

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <div>
        <div className='infoContainer'>
              <b>Description:</b><p>{description}</p>
              <b>Width:</b><p>{width}</p>
              <b>Height:</b><p>{height}</p>
              <b>Likes:</b><p>{likes}</p>
              
              
              
              
              <button onClick={handleEdit}  className='editBtn'>Edit Description</button>
        </div>
        {openNested ? <NestedModal description={description}
                               onClose={handleCloseEdit}
                               isOpen={openNested}
                               onSubmit={handleFormSubmit}
                               id={id}
                               picture={picture}
                            /> 
            : ''}
      </div>
    </Modal>
  );
};

export default InfoModal;

