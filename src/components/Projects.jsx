import React from 'react'
import knowmynation from "../assets/knowmynation.png" ;
import hozotech from "../assets/hozo.png";
import Projectcard from './Projectcard';
import portfolio from '../assets/portfolio.png'
import assestsmanager from '../assets/assestsmanager.png'
import taskmanager from '../assets/taskmanager.png'
import expensetracker from '../assets/expensetracker.png'
const Projects = () => {
    const projects =[
        {
            id:1,
            src:knowmynation,
            heading:'Know My Nation',
            description:'Website to explore about INDIA',
            href:'https://knowmynation.netlify.app/',
            code:'https://github.com/Vijay-Hozo/know-my-nation'        
        },
        {
            id:2,
            src:hozotech,
            heading:'Hozo Tech',
            description:'Demo Landing page',
            href:'https://hozotech.netlify.app/',
            code:'https://github.com/Vijay-Hozo/OCTANET_SEPTEMBER'
        },
        {
            id:3,
            src:portfolio,
            description:'Portfolio of myself',
            heading:'Portfolio',
            href:'https://avijay.tech/',
            code:'https://github.com/Vijay-Hozo/Portfolio'
        },
        {
            id:4,
            src:assestsmanager ,
            heading:'Decentralized-finance',
            description:'Website to know about DeFi',
            href:'https://knowmynation.netlify.app/',
            code:'https://github.com/Vijay-Hozo/Decentralized_Finance_App'
        },
        {
            id:5,
            src:taskmanager,
            heading:'Task-Manager',
            description:'Manage Your tasks here!',
            href:'https://knowmynation.netlify.app/',
            code:'https://github.com/Vijay-Hozo/Task-Manager'
        },
        {
            id:6,
            src:expensetracker,
            heading:'Expense Tracker',
            description:'Track your expenses here!',
            href:'https://knowmynation.netlify.app/',
            code:'https://github.com/Vijay-Hozo/Expense_Tracker_API'
        }
    ]
  return (
    
    <div name="Projects" className='px-[17%] bg-gradient-to-b from-black to-gray-800 w-full text-white max-sm:relative max-sm:pt-20 max-sm:px-4'>
        <div classname=" max-w-screen p-4 flex flex-col justify-center w-screen h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-FD'>PROJECT</p>
                <p className='py-6'>Check out some of my work right here!</p>
            </div>

            <div className='flex flex-wrap gap-8 px-12 sm:px-0'>

            {
                projects.map((data)=>(
                    <Projectcard {...data} />          
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Projects