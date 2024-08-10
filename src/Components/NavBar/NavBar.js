import React from 'react';
import logo from '../../Assets/Logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='h-[10vh] w-[100vw] flex items-center '>
            <div>
                <img src={logo} className='h-[62px] mb-2 ml-4' />
            </div>
            <div className='flex ml-auto font-semibold mt-2 mr-10'>
                <div className=''>
                    <button class="cta">
                        <span class="hover-underline-animation">Home</span>
                    </button>
                </div>
                <div className='ml-10'>
                    <div className=''>
                        <button class="cta">
                            <span class="hover-underline-animation">About</span>
                        </button>
                    </div>
                </div>
                <div className='ml-10'>
                    <div className=''>
                        <button class="cta">
                            <span class="hover-underline-animation">Services</span>
                        </button>
                    </div>
                </div>
                <div className='ml-10'>
                    <div className=''>
                        <button class="cta">
                            <span class="hover-underline-animation">Blogs</span>
                        </button>
                    </div>
                </div>
                <div className='ml-10 mr-4'>
                    <div className=''>
                        <button class="cta">
                            <span class="hover-underline-animation">Contacts</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar