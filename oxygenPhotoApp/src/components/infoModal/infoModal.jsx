import './infoModal.css'

export const InfoModal = (item, isOpen, close) =>{
    const handleModal = isOpen ? 'opened' : 'closed'

    

    return (
        <>
        <div className={handleModal}>
            <div className='infoContainer'>
              <button onClick={close} className='closeBtn'>X</button>
              <b>Description:</b><p>{item.description}</p>
              <b>Width:</b><p>{item.width}</p>
              <b>Height:</b><p>{item.height}</p>
              <b>Likes:</b><p>{item.likes}</p>
              
              
              
              
              <button  className='editBtn'>Edit Description</button>
            </div>
        </div>
        
        </>
    )
}