import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import Footer from '../../Components/Footer/Footer'


const Contact = () => {
    return (
        <>
            <div>
                <section className='CONTACT-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='CONTACT-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='CONTACT-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='CONTACT-SPEAKER'>
                    <Speaker p1="Contact" p2="Contact With Us" />
                </section>

                <section className='FORM-MAP container mx-auto'>
                    <div className='grid grid-cols-4 my-[100px]'>

                        <div className='col-span-3'>
                            <h1 className='text-3xl font-semibold text-[#292930]'>We would love to hear from you.</h1>
                            <p className='text-gray-500 mt-4'>If you’ve got great products your making or looking to work with us then drop us a line.</p>

                            <div>
                                <div className='grid grid-cols-3 mt-10'>
                                    <div className='relative text-gray-500 mr-7'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Name<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className=' w-full border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                    <div className='relative text-gray-500 mr-7'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Phone<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="number" className='w-full border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                    <div className='relative text-gray-500'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>E-mail<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="email" className='w-full border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                </div>

                                <div className='relative text-gray-500 mt-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Your Message</label>
                                    <textarea className='resize-none w-full border border-gray-300 rounded-md font-normal focus:outline-blue-400 
                                    px-9 py-5' cols="" rows="5"></textarea>
                                </div>

                                <div className='mt-10'>
                                    <a href="#" className=" relative px-12 py-5  rounded-md font-semibold  text-white bg-[#3577F0] 
                                 before:absolute 
                                 before:content-[''] 
                                 before:w-[200px] 
                                 before:rounded-md 
                                 before:left-0 
                                 before:right-0 
                                 before:top-0 
                                 before:bottom-0 
                                 before:bg-[#3577F0]  
                                 before:-z-10 
                                 before:hover:scale-110  
                                 before:duration-300
                                ">Send Message</a>
                                </div>
                            </div>
                        </div>

                        <div className='ml-14 text-gray-500'>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Our Store</h1>
                                <p className='mb-5 leading-8'>8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
                                <p>Phone: +123 456 7890</p>
                                <p className='mb-10 leading-8'>Email: Hello@etrade.com</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Careers</h1>
                                <p className='mb-10'>Instead of buying six things, one that you really like.</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Opening Hours:</h1>
                                <p>Monday to Saturday: 9am - 10pm</p>
                                <p className='leading-8'>Sundays: 10am - 6pm</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <iframe class="w-full h-[500px] rounded-lg" src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </section>

                <section className='CONTACT-FOOTER'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Contact
