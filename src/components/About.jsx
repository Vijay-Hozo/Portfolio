import React from 'react'

const About = () => {
  return (
    <div name="About" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  '>
        
        <div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            
            <div 
            className='pb-8'>
              <p 
              className='text-4xl font-bold inline border-b-4 border-gray-500 font-FD'>ABOUT</p>
            </div>

        <p className='text-xl mt-10 font-semibold text-white'>
        Hello, I'm delighted to share a bit about who I am. I'm a dynamic individual with a diverse range of interests and experiences that have shaped my identity.
        I.m currently pursuing B.TECH IT in Coimbatore.
        In my professional life, I've had the privilege of Frontend Developer, which I continue to develop and apply in various aspects of my life.
        </p>
        <br />
        <p className='text-xl font-semibold  text-white'>
        I'm a problem-solver at heart, adept at troubleshooting and debugging to deliver optimal solutions under tight deadlines. I stay up-to-date with the latest industry trends and emerging technologies, ensuring that the projects I work on are at the forefront of innovation.I'm excited about the ever-evolving landscape of frontend development, and I'm committed to creating exceptional user experiences through clean, maintainable, and performant code. Let's work together to transform web ideas into reality.
        </p>
    </div>
    </div>
  );
};

export default About;