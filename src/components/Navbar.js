import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTimes, FaTypo3, FaBars } from 'react-icons/fa';
import Button from './Button';
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    // when user clicks menu icon faBars
    const handleClick = () => {
        return setClick(!click)
    }
    //to close the menu after user clicks on a menu item
    const closeMobileMenu = () => {
       return setClick(false)
    }
    // to display button according to screen size
    const displayButton = () => {
        if (window.innerWidth <= 900){
            return setButton(false)
        }else{
            return setButton(true)
        }
    };
    window.addEventListener('resize', displayButton)


    return (
       <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className='navbar-logo'>
                    TRVL <FaTypo3 className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes className='fas fa-times'/> : <FaBars className='fas fa-times'/> }
                    </div>
                    <ul className={click ? 'nav-menu active' :'nav-menu'}>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/services'} className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/products'} className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/signup'} className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn-outline'} buttonSize={'btn-primary'} >SIGN UP</Button>}
                </div>

            </nav>
        </>
    )
} 

export default Navbar;