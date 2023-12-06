import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

const Account = () => {
    return (
        <>
            <div>
                <section className='PAGES-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='PAGES-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='PAGES-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='PAGES-SPEAKER'>
                    <Speaker p1="My Account" p2="Explore All Products" />
                </section>

                <section className='PAGES-DETAILS-PART container mx-auto py-[100px]'>
                    <div className='mb-10'>
                        <img className='rounded-full mb-3' src="../src/assets/pages/account/asset 3.png" alt="" />
                        <h1 className='text-[#292930] font-bold text-lg mb-1'>Hello Annie </h1>
                        <p className='text-gray-500 text-sm'>eTrade Member Since Sep 2020</p>
                    </div>

                    <div className='grid grid-cols-4 gap-20'>

                        <div className='LEFT-PART '>
                            <div className=' border rounded-md p-10'>
                                <div className='bg-[#F6F7FB] rounded-md mb-2 cursor-pointer'>
                                    <a className='flex items-center text-2xl text-[#3577F0] h-12 px-6' href=""><i class="ri-microsoft-fill"></i><span className='text-sm font-semibold ml-3'>Dashboard</span></a>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'>
                                    <a className='flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 duration-300' href=""><i class="ri-shopping-basket-2-fill"></i><span className='text-sm font-semibold ml-3'>Orders</span></a>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'>
                                    <a className='flex items-center text-xl hover:text-[#3577F0] h-12 px-7 duration-300' href=""><i class="fa-solid fa-file-arrow-down"></i><span className='text-sm font-semibold ml-4'>Downloads</span></a>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'>
                                    <a className='flex items-center text-xl hover:text-[#3577F0] h-12 px-6 duration-300' href=""><i class="fa-solid fa-house-chimney"></i><span className='text-sm font-semibold ml-3'>Addresses</span></a>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'>
                                    <a className='flex items-center text-xl hover:text-[#3577F0] h-12 px-6 duration-300' href=""><i class="fa-solid fa-user"></i><span className='text-sm font-semibold ml-4'>Account Details</span></a>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] rounded-md cursor-pointer duration-300'>
                                    <a className='flex items-center text-xl hover:text-[#3577F0] h-12 px-6 duration-300' href=""><i class="ri-logout-box-r-line"></i><span className='text-sm font-semibold ml-4'>Logout</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='RIGHT-PART col-span-3 '>
                            <div className='DASHBOARD-DETAILS '>
                                <h1 className='text-lg mb-10'>Hello Annie (not <span className='text-xl font-semibold'>Annie?</span>  <span className='text-[#E76458] hover:text-[#3577F0] cursor-pointer duration-300'>Log Out</span> )</h1>
                                <p className='text-gray-500 tracking-wider'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                            </div>

                            <div className='ORDERS-DETAILS hidden'>
                                <div className="py-5 px-7 flex items-center bg-[#F6F7FB] text-[#292930] rounded-md">
                                    <h1 className="text-xl font-semibold w-60 ">Order</h1>
                                    <h1 className="text-xl font-semibold w-96 ">Date</h1>
                                    <h1 className="text-xl font-semibold w-96 ">Status</h1>
                                    <h1 className="text-xl font-semibold w-96 ">Total</h1>
                                    <h1 className="text-xl font-semibold w-96 text-right ">Actions</h1>
                                </div>
                                <div className="py-6 px-7 flex items-center border-b text-[#292930] rounded mt-2">
                                    <h1 className="text-base text-[#E76458] w-60 ">#6523</h1>
                                    <h1 className="text-base  w-96 ">September 10, 2020</h1>
                                    <h1 className="text-base  w-96 ">Processing</h1>
                                    <h1 className="text-base  w-96 ">$326.63 for 3 items</h1>
                                    <div className='w-96 text-right'>
                                        <button className=" text-base outline outline-1 rounded-md font-bold px-5 py-3 hover:outline-none hover:text-white hover:bg-[#3577F0] duration-500">
                                            View
                                        </button>
                                    </div>
                                </div>
                                <div className="py-6 px-7 flex items-center border-b text-[#292930] rounded ">
                                    <h1 className="text-base text-[#E76458] w-60 ">#6523</h1>
                                    <h1 className="text-base  w-96 ">September 10, 2020</h1>
                                    <h1 className="text-base  w-96 ">Processing</h1>
                                    <h1 className="text-base  w-96 ">$326.63 for 3 items</h1>
                                    <div className='w-96 text-right'>
                                        <button className=" text-base outline outline-1 rounded-md font-bold px-5 py-3 hover:outline-none hover:text-white hover:bg-[#3577F0] duration-500">
                                            View
                                        </button>
                                    </div>
                                </div>
                                <div className="py-6 px-7 flex items-center border-b text-[#292930] rounded ">
                                    <h1 className="text-base text-[#E76458] w-60 ">#6523</h1>
                                    <h1 className="text-base  w-96 ">September 10, 2020</h1>
                                    <h1 className="text-base  w-96 ">On Hold</h1>
                                    <h1 className="text-base  w-96 ">$326.63 for 3 items</h1>
                                    <div className='w-96 text-right'>
                                        <button className=" text-base outline outline-1 rounded-md font-bold px-5 py-3 hover:outline-none hover:text-white hover:bg-[#3577F0] duration-500">
                                            View
                                        </button>
                                    </div>
                                </div>
                                <div className="py-6 px-7 flex items-center border-b text-[#292930] rounded ">
                                    <h1 className="text-base text-[#E76458] w-60 ">#6523</h1>
                                    <h1 className="text-base  w-96 ">September 10, 2020</h1>
                                    <h1 className="text-base  w-96 ">Processing</h1>
                                    <h1 className="text-base  w-96 ">$326.63 for 3 items</h1>
                                    <div className='w-96 text-right'>
                                        <button className=" text-base outline outline-1 rounded-md font-bold px-5 py-3 hover:outline-none hover:text-white hover:bg-[#3577F0] duration-500">
                                            View
                                        </button>
                                    </div>
                                </div>
                                <div className="py-6 px-7 flex items-center border-b text-[#292930] rounded ">
                                    <h1 className="text-base text-[#E76458] w-60 ">#6523</h1>
                                    <h1 className="text-base  w-96 ">September 10, 2020</h1>
                                    <h1 className="text-base  w-96 ">Processing</h1>
                                    <h1 className="text-base  w-96 ">$326.63 for 3 items</h1>
                                    <div className='w-96 text-right'>
                                        <button className=" text-base outline outline-1 rounded-md font-bold px-5 py-3 hover:outline-none hover:text-white hover:bg-[#3577F0] duration-500">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='DOWNLOAD-DETAILS hidden'>
                                <h1 className='text-gray-500 tracking-wide'>You don't have any download</h1>
                            </div>

                            <div className='ADDRESSES-DETAILS hidden'>
                                <h1 className='text-sm text-gray-800 mb-8'>The following addresses will be used on the checkout page by default.</h1>
                                <div className='grid grid-cols-2 gap-20'>
                                    <div>
                                        <div className='flex justify-between items-center border-b border-gray-300 pb-5'>
                                            <h1 className='text-2xl font-semibold text-[#292930]'>Shipping Address</h1>
                                            <span className='text-gray-500'><i class="fa-solid fa-pen-to-square"></i></span>
                                        </div>
                                        <div className='mt-4 text-sm'>
                                            <p className='leading-9 mb-7'>Name: Annie Mario <br />
                                                Email: annie@example.com<br />
                                                Phone: 1234 567890</p>
                                            <p className='leading-7'>7398 Smoke Ranch Road<br />
                                                Las Vegas, Nevada 89128</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center border-b border-gray-300 pb-5'>
                                            <h1 className='text-2xl font-semibold text-[#292930]'>Billing Address</h1>
                                            <span className='text-gray-500'><i class="fa-solid fa-pen-to-square"></i></span>
                                        </div>
                                        <div className='mt-4 text-sm'>
                                            <p className='leading-9 mb-7'>Name: Annie Mario <br />
                                                Email: annie@example.com<br />
                                                Phone: 1234 567890</p>
                                            <p className='leading-7'>7398 Smoke Ranch Road<br />
                                                Las Vegas, Nevada 89128</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='ACCOUNT-DETAILS w-[70%] hidden'>
                                <div className='grid grid-cols-2 gap-8 mb-8'>
                                    <div className='relative text-gray-500  '>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >First Name</label>
                                        <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='Adam' />
                                    </div>
                                    <div className='relative text-gray-500 '>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Last Name</label>
                                        <input type="text" className='w-full border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='John' />
                                    </div>
                                </div>
                                <div className='relative text-gray-500 mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Country/ Region</label>
                                    <div className='border border-gray-200  rounded-md font-normal focus-within:border-[#3577F0] duration-300'>
                                        <select name="" id="" className='w-full  px-10 py-5 outline-none border-r-[40px] border-white rounded-md' >
                                            <option value="">United Kindom (UK)</option>
                                            <option value="">United States (USA)</option>
                                            <option value="">United Arab Emirates (UAE)</option>
                                            <option value="">Australia</option>
                                        </select>
                                    </div>
                                    <h1 className='text-xs mt-3 mb-10'>This will be how your name will be displayed in the account section and in reviews</h1>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-semibold text-[#292930] mb-10'>Password Change</h1>
                                    <div className='relative text-gray-500  mb-8'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Password</label>
                                        <input type="password" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none placeholder:text-gray-700 ' placeholder='****************' />
                                    </div>
                                </div>
                                <div>
                                    <div className='relative text-gray-500  mb-10'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >New Password</label>
                                        <input type="password" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none placeholder:text-gray-700 ' />
                                    </div>
                                </div>
                                <div>
                                    <div className='relative text-gray-500  mb-10'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Confirm New Password</label>
                                        <input type="password" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none placeholder:text-gray-700 ' />
                                    </div>
                                </div>
                                <div>
                                    <button className=" text-sm border-2 border-[#3577F0] rounded-md font-medium px-8 py-5 text-white bg-[#3577F0] hover:bg-white hover:text-[#3577F0]   duration-500 ">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            <div className='LOGOUT-DETAILS'>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='PAGES-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Account
