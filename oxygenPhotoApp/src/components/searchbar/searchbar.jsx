import './searchbar.css';

export const SearchBar = () => {

    return(
        <>
            <form action="submit">
                <button><img className='icon' src='src/assets/buscar.png'/></button>
                <div style={{marginLeft: '1em'}}>
                    <input className='searchbar' type="text" placeholder='Search for your perfect pic...'/><button className='btnErase'>X</button>
                </div>
            </form>
        </>
    )
}