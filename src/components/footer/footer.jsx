import './footer.css';
import { Link } from 'react-router-dom';
import gitImg from '../../assets/github.png';
import linkedinImg from '../../assets/linkedin.png';

export const Footer = () => {

    return (
        <>
            <footer className='gradB'>
                <div className='footer_container1'>
                    <span>CoolPic React App By Javier.C</span>
                    <span>©2024 OXYGEN, All Rights Reserved</span>
                </div>
                <div className='footer_container2'>

                    <Link to={"https://github.com/vichule"} target="_blank">
                        <img className='icon' src={gitImg} />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/javier-caba%C3%B1as-d%C3%ADaz-rega%C3%B1%C3%B3n-634989204/"} target="_blank">
                        <img className='icon' src={linkedinImg} />
                    </Link>

                </div>
            </footer>
        </>
    )
}