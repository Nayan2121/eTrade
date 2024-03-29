import React from 'react'
import '../Footer/HomeFootstyle.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div className='container mx-auto'>
                {/* footer start */}
                <div className='grid grid-cols-4 gap-x-16  border-b-2 border-gray-100 mb-12 pb-7 mt-[7%]'>

                    {/* footer-top-part  */}
                    <div className='delivery flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 47.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Fast & Secure Delivery</h1>
                            <h1 className='text-gray-500'>Tell about your service.</h1>
                        </div>
                    </div>

                    <div className='guarantee flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 48.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Money Back Guarantee</h1>
                            <h1 className='text-gray-500'>Within 10 days.</h1>
                        </div>
                    </div>

                    <div className='policy flex items-center '>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 49.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>24 Hour Return Policy</h1>
                            <h1 className='text-gray-500'>No question ask.</h1>
                        </div>
                    </div>

                    <div className='support flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 50.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Pro Quality Support</h1>
                            <h1 className='text-gray-500'>24/7 Live support.</h1>
                        </div>
                    </div>

                </div>

                {/* footer-center-part  */}
                <div className='grid grid-cols-4 gap-x-16 border-b-2 border-gray-100 pb-7 '>

                    <div className='Support-part text-gray-500'>
                        <b className='text-gray-800'>Support</b>
                        <p className='mt-6 leading-7'>685 Market Street,<br />Las Vegas, LA 95820,<br /> United States.</p>
                        <div className='mt-8 hover:text-gray-800 duration-500'>
                            <a href=""> <i className="ri-mail-open-line pr-2 text-xl"></i> example@domain.com</a>
                        </div>
                        <div className='mt-3 hover:text-gray-800 duration-500'>
                            <a href=""> <i className="ri-phone-line pr-2 text-xl "></i> (+01) 850-315-5862</a>
                        </div>
                    </div>

                    <div className='Account-part'>
                        <b className='text-gray-800'>Account</b>
                        <ul className='list-item text-gray-500 font-medium mt-6'>
                            <li className='mt-4'><Link to="/Account" className='link hover:text-gray-800 duration-500 ' href="#">My Account</Link></li>
                            <li className='mt-4'><Link to="/SignUp" className='link hover:text-gray-800 duration-500 ' href="#">Login / Register</Link></li>
                            <li className='mt-4'><Link to="/Cart" className='link hover:text-gray-800 duration-500 ' href="#">Cart</Link></li>
                            <li className='mt-4'><Link to="/Wishlist" className='link hover:text-gray-800 duration-500 ' href="#">Wishlist</Link></li>
                            <li className='mt-4'><Link to="/ShopNoSidebar" className='link hover:text-gray-800 duration-500 ' href="#">Shop</Link></li>
                        </ul>
                    </div>

                    <div className='QuickLink-part'>
                        <b className='text-gray-800'>Quick Link</b>
                        <ul className='list-item text-gray-500 font-medium mt-6'>
                            <li className='mt-4'><Link to="/PrivacyPolicy" className='link hover:text-gray-800 duration-500 ' href="#">Privacy Policy</Link></li>
                            <li className='mt-4'><Link to="/Termsofuse" className='link hover:text-gray-800 duration-500 ' href="#">Terms Of Use</Link></li>
                            <li className='mt-4'><Link to="/Termsofuse  " className='link hover:text-gray-800 duration-500 ' href="#">FAQ</Link></li>
                            <li className='mt-4'><Link to="/Contact" className='link hover:text-gray-800 duration-500 ' href="#">Contact</Link></li>
                            <li className='mt-4'><Link to="/Contact" className='link hover:text-gray-800 duration-500 ' href="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div className=' text-gray-500'>
                        <b className='text-gray-800 '>Download App</b>
                        <h1 className='mt-6'>Save $3 With App & New User only</h1>

                        <div className='flex items-center mt-5'>
                            <a href='#top-scroll'>
                                <img src="./src/assets/home/asset 51.png" alt="" />
                            </a>
                            <div className='ml-5'>
                                <a href="#top-scroll">
                                    <img className='mb-4' src="./src/assets/home/asset 52.png" alt="" />
                                    <img src="./src/assets/home/asset 53.png" alt="" /></a>
                            </div>
                        </div>
                    </div>

                </div>


                {/* footer-bottom-icon  */}
                <div className='flex justify-between items-center mt-10 pb-5'>
                    <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon flex justify-center items-center rounded-full'><a href="#top-scroll"><i class="ri-facebook-fill text-lg"></i></a></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon flex justify-center items-center rounded-full'><a href="#top-scroll"><i class="ri-instagram-line text-lg"></i></a></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon flex justify-center items-center rounded-full'><a href="#top-scroll"><i class="ri-twitter-fill text-lg"></i></a></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon flex justify-center items-center rounded-full '><a href="#top-scroll"><i class="ri-linkedin-fill text-lg"></i></a></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon flex justify-center items-center rounded-full'><a href="#top-scroll"><i class="ri-discord-line text-lg"></i></a></li>
                        </ul>
                    </div>

                    <div className='flex text-gray-600'>
                        <span className='mr-2'>© 2023. All rights reserved by</span>
                        <div className='relative group'>
                            <ul>
                                <li className='before:absolute
                            hover:text-gray-900 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:-bottom-0  
                            before:opacity-0
                            before:group-hover:w-[80px]
                            before:right-[5px]
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            '>
                                    <a href='#'>Axilthemes.</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center w-[230px] text-gray-500'>
                        <h1>Accept For</h1>
                        <img src="./src/assets/home/asset 54.png" alt="" />
                        <img src="./src/assets/home/asset 55.png" alt="" />
                        <img src="./src/assets/home/asset 56.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
