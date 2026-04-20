import React from 'react'

const Footer = () => {
  return (
  <footer name="footer" className='border-t border-white/10 bg-slate-950 text-white'>
    <div className='section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <p className='text-lg font-semibold text-white'>Vijay A</p>
        <p className='mt-2 text-sm text-slate-400'>Full Stack Developer building polished portfolio experiences.</p>
      </div>
      <div className='flex flex-wrap gap-3'>
        <a href='/Vijay_SoftwareDeveloper.pdf' download='Vijay-A-Resume.pdf' className='secondary-button'>Download Resume</a>
        <a href='#Home' className='primary-button'>Back to Top</a>
      </div>
    </div>
    <div className='border-t border-white/5 py-4 text-center text-sm text-slate-500'>
      &copy;{new Date().getFullYear()} All Rights Reserved
    </div>
  </footer>
  )
}

export default Footer