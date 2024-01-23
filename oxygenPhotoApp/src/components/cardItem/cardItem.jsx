import './cardItem.css'

export const CardItem = ({imgUrl, description, author}) => {
    return(
        <div className='picContainer'>
        <div>
            <img className='picImg' src={imgUrl} />
        </div>
        <div className='itemBar'>
            <div className='picText'>
                <h3>{description.slice(0,28)+'...'}</h3>
                <p>Picture By: {author}</p>
            </div>
            <div className='btnContainer'>
                <button style={{padding: '0.2em'}} className='picBtn'><img src='src/assets/favOff.png'/></button> 
                <button className='picBtn'><img style={{width: '2em', height: '2em'}} src='src/assets/descargar.png'/></button>
            </div>
        </div>
    </div>
    )
    
}