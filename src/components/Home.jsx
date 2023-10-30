import React from 'react';
import Portfolioamico from '../assets/Portfolio-amico.png';
const Home = () => {
  return (
    <div 
    name="Home"
    className='h-screen text-white w-full bg-gradient-to-b from-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 max-md:flex-col'>
            <div className=' flex flex-col justify-center h-full flex-1'>
                <h2 className='text-2xl font-medium '>I'm</h2>
                <h3 className='text-3xl sm:text-7xl  font-bold font-FD text-blue-400'>VIJAY A</h3>
                <h2 className='text-1xl sm:text-3xl text-white font-semibold   '>FRONTEND DEVELOPER</h2>   
                            
            </div>
            <div className='flex-1 '> 
              <img src={Portfolioamico} alt="" className='md:w-full rounded-2xl mx-auto' />
            </div>
        </div>
        
    </div>
  );
};

export default Home;