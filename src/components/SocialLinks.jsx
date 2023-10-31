import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/vijay-a-ba3886259/',
            style: 'rounded-tr-md'
        },

        {
            id:2,
            child:(
                <>
                Github<FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Vijay-Hozo',
        },

        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href: 'vijay2304a@gmail.com',
           
        },
        {
            id:4,
            child:(
                <>
                Instagram<FaInstagram size={30}/>
                </>
            ),
            href: 'https://www.instagram.com/mr_vijay_._/',
            style: 'rounded-br-md'
        },
    ];

  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id,child,href,style})=>(
                <li 
                key={id} 
                className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300'+ "" + style}>
                <a 
                href={href} 
                target='_blank'
                className='flex justify-between items-center w-full text-white'>
                   {child}     
                </a>
            </li>
            ))} 
        </ul>
    </div>
  );
};

export default SocialLinks;