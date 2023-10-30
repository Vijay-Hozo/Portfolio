import React from 'react'

const Footer = () => {
  return (
    <div name="footer" className='bg-gray-800 text-white flex justify-center font-1xl'>
        <div>
            <p>&copy;{new Date().getFullYear} All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer