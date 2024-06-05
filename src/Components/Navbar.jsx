import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css';
import './ScrollToTop';

function Navbar() {
    const [click, setClick] = useState(false); /*creates opposite state to open and close menu on click*/

    const handleClick = () => setClick(!click); /*reverses false click state set*/
    const closeMobileMenu = () => setClick(false);


    

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                MB.Portfolio
                <i className="fa-solid fa-code-commit" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*? is equal to true. : creates toggle from one item to another.  */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>    
                
                    <li className='nav-item'>
                        <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <a href='/devportfolio/Markel_Bradford_Developer_Resume.pdf' className='nav-links-mobile' onClick={closeMobileMenu} target="_blank" rel='noreferrer'> 
                        Resume
                        </a>
                    </li>

                    <li>
                        <a href='/devportfolio/Markel_Bradford_Developer_Resume.pdf' className='resume-button' target='_blank'>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
