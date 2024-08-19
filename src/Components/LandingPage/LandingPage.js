import React from 'react';
import './LandingPage.css';
import home from '../../Assets/Home.png';
import thums from '../../Assets/Thumbs up.png';
import peep from '../../Assets/People.png';

const LandingPage = () => {
    return (
        <div className='h-[90vh] '>
            <div className="h-[78vh] bg-cover text-2xl back">
                <div className='bg-black/50'>
                    <div className='h-[78vh] w-[95vh] flex justify-center'>
                        <div className=' mt-[170px]'>
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
            <div className='flex'>
                <div className='bg-[#0000009f] ml-[580px] mt-[-300px] w-[370px] h-[180px] flex items-center px-10'>
                    <div className='w-[100%] h-[100%] flex items-center  text-[#cecece] mr-8'>
                        <img src={home} className='h-[50px] opacity-90 mb-4' />
                        <div className='ml-8'>
                            <div className='text-[20px] tracking-[0.7px] font-extrabold mb-[6px]'>
                                24/7 Services
                            </div>
                            <div className='mb-2 '>
                                We try our best to bring the customer the greatest service, so, you can place your trust
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-auto mt-[-90px] mr-[105px]'>
                    <div className='bg-[#0000009f] ml-auto mt-[-430px] w-[370px] h-[180px] flex items-center px-10'>
                        <div className='w-[100%] h-[100%] flex items-center  text-[#cecece] mr-8'>
                            <img src={peep} className='h-[50px] opacity-90 mb-4' />
                            <div className='ml-8'>
                                <div className='text-[20px] tracking-[0.7px] font-extrabold mb-[6px]'>
                                    Great Support
                                </div>
                                <div className='mb-2 '>
                                    Our support to bring the customer the greatest service, so, you can place your trust
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#0000009f] ml-auto mt-[40px] w-[370px] h-[180px] flex items-center px-10'>
                        <div className='w-[100%] h-[100%] flex items-center  text-[#cecece]'>
                            <img src={thums} className='h-[50px] opacity-90 mb-4' />
                            <div className='ml-8'>
                                <div className='text-[20px] tracking-[0.7px] font-extrabold mb-[6px]'>
                                    High Quality
                                </div>
                                <div className='mb-2 '>
                                    Melsha provides the high quality service, you don't need to worry about the result
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;