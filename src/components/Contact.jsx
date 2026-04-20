import React from 'react'

const Contact = () => {
  return (
    <section name='Contact' className='bg-gradient-to-b from-slate-900 to-black text-white'>
        <div className='section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='space-y-6 reveal-up'>
                <div>
                    <p className='section-heading'>CONTACT</p>
                    <p className='section-kicker'>
                      Submit the form below to get in touch or talk about an idea, project, or collaboration.
                    </p>
                </div>

                <div className='section-card animated-border'>
                    <p className='text-sm uppercase tracking-[0.24em] text-cyan-200/80'>Fast response</p>
                    <p className='mt-2 text-xl font-semibold text-white'>Direct, clear communication</p>
                    <p className='mt-3 text-slate-300 leading-7'>
                      I like building things that feel polished from the first click. If you have a project
                      in mind, send the details and I’ll respond with a practical next step.
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center reveal-up reveal-delay-2'>
                <form action="https://getform.io/f/330f259a-2e16-45b2-8249-bb1170af2e4e" method='POST'
                className='section-card glow-card flex w-full flex-col gap-4'>
                    <input type="text" name='name' placeholder='Enter your name' className='rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter your email' className='rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none' />
                    <textarea name='message' placeholder='Enter your message' rows='8' className='rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none'></textarea>
                    <button className='primary-button mt-2 self-start'>Let's Talk</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact