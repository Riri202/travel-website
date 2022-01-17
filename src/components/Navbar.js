import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTimes, FaTypo3, FaBars } from 'react-icons/fa';


const Navbar = () => {
    const [click, setClick] = useState(false);
    // when user clicks menu icon faBars
    const handleClick = () => {
        return setClick(!click)
    }


    return (
       <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className='navbar-logo'>
                    TRVL <FaTypo3/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/> }

                    </div>
                </div>

            </nav>
        </>
    )
} 

export default Navbar;