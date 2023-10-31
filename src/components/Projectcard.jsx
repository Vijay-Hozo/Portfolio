import React from 'react'

const Projectcard = (props) => {
      const {id,src,href,code,heading} = props ;

  return (
    <div key={id} className='flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg w-[380px] h-[310px] overflow-hidden '>
        <img src={src} alt=""  className='flex-1 rounded-md duration-200 hover:scale-105 '/>
        <p className='flex justify-center pt-3 font-semibold'>{heading}</p>
            <div className='flex-2 flex items-center justify-center'>
                
                <a href={href} className='py-5  flex-1 text-center duration-200 hover:scale-105 '>Demo</a>
                <a href={code} className='py-5 flex-1 text-center duration-200 hover:scale-105'>Code</a>
            </div>
    </div>
  )
}

export default Projectcard