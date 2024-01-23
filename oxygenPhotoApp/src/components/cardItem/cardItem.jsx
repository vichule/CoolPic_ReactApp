import './cardItem.css'

export const CardItem = ({imgUrl, description, author}) => {
    return(
        <div>
        <div>
            <img src={imgUrl} />
        </div>
        <div>
            <h3>{description}</h3>
            <p>Picture By: {author}</p>
        </div>
        <div>
            <button><img src='src/assets/favOff.png'/></button> 
            <button><img src='src/assets/descargar.png'/></button>
        </div>
    </div>
    )
    
}