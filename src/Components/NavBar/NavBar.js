import React from 'react';
import logo from '../../Assets/Logo.png';

const NavBar = () => {
    return (
        <div className='h-[10vh] w-full'>
            <div>
                <img src={logo} className='h-[80px]' />
            </div>
        </div>
    )
}

export default NavBar