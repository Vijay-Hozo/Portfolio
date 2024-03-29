import React from 'react'

const Projectcard = (props) => {
      const {id,src,href,code,heading,description} = props ;

  return (
    <div key={id} className='flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg w-[380px] h-[310px] overflow-hidden '>
        <img src={src} alt=""  className='flex-1 rounded-md duration-200 hover:scale-105 '/>
        <p className='flex justify-center pt-3 font-semibold'>{heading}</p>
        <p className='flex justify-center pt-2 font-semibold'>{description}</p>
            <div className='flex-2 flex items-center justify-center'>
              
                <a href={href} target='_blank' className='py-5  flex-1 text-center duration-200 hover:scale-105 '>Demo</a>
                <a href={code} target='_blank' className='py-5 flex-1 text-center duration-200 hover:scale-105'>Code</a>
                
            </div>
    </div>
  )
}

export default Projectcard