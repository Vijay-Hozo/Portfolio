import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white max-sm:relative  max-sm:pt-20' >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-FD'>CONTACT</p>
                <p className='py-6'>Submit The form below to get in touch</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/330f259a-2e16-45b2-8249-bb1170af2e4e" method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name='message' placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-3 oy-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
                
            </div>
        </div>

    </div>
  )
}

export default Contact