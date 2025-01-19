import React, { useRef } from 'react'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => { }
    return (
        <section className="min-h-screen px-6 py-12 sm:px-14 md:px-24 w-full bg-accent">
            <div>
                <h2 className='text-accent2 font-fraunces font-bold text-[35px]'>
                    Looking Forward to working with you
                </h2 >
                <div className=' flex justify-between gap-4 mt-10 mb-10'>
                    <div className=' w-[50%]'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex w-full justify-between gap-4 flex-col'>
                                <input type="text" placeholder="Your Name" name="user_name" required
                                    className='bg-accent2 text-accent font-avenir rounded-[4px] p-[10px]' />
                                <input type='email' placeholder='Email' name="user_email" required
                                    className='bg-accent2 text-accent font-avenir rounded-[4px] p-[10px] mt-[10px] ss:mt-0' />
                            </div>
                            <br /><textarea type='text' name='message' placeholder='Message' required
                                className='bg-accent2 text-accent font-avenir rounded-[4px] p-[10px] w-full h-[150px] ' ></textarea>

                        </form>
                    </div>
                    <div className='bg-green-400 w-[50%]'>
                        Hello
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact