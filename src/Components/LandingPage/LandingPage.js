import React from 'react';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='h-[90vh] '>
            <div className="h-[73vh]  bg-cover text-2xl back">
                <div className='bg-black/50'>
                    <div className='h-[73vh] w-[130vh] flex items-center justify-center'>
                        <div className=''>
                            <div className='tracking-wide text-white fira-sans-condensed-bold text-[48px] '>
                                Top Business Consultant &
                                <div className='mt-[20px]'>
                                    Document Clearing Services
                                </div>
                            </div>
                            <div className='mt-[30px]'>
                                <a class="btn font-bold" href="#">Explore Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#011428] ml-auto mr-[150px] mt-[-90px] w-[700px] h-[180px]'>
                ads
            </div>
        </div>
    )
}

export default LandingPage;