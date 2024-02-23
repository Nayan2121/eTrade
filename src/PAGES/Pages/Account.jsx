import React, { useState } from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Account = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

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
                                <div onClick={() => handleTabClick(1)} className={`${activeTab === 1 ? 'bg-[#F6F7FB] rounded-md mb-2 cursor-pointer flex items-center text-2xl text-[#3577F0] h-12 px-6'
                                    : 'flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'}`}>
                                    <i class="ri-microsoft-fill"></i>
                                    <span className='text-sm font-semibold ml-3'>Dashboard</span>
                                </div>
                                <div onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? 'bg-[#F6F7FB] rounded-md mb-2 cursor-pointer flex items-center text-2xl text-[#3577F0] h-12 px-6'
                                    : 'flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'}`}>
                                    <i class="ri-shopping-basket-2-fill text"></i>
                                    <span className='text-sm font-semibold ml-3'>Orders</span>
                                </div>
                                <div onClick={() => handleTabClick(3)} className={`${activeTab === 3 ? 'bg-[#F6F7FB] rounded-md mb-2 cursor-pointer flex items-center text-2xl text-[#3577F0] h-12 px-6'
                                    : 'flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'}`}>
                                    <i class="fa-solid fa-file-arrow-down text-xl"></i>
                                    <span className='text-sm font-semibold ml-5'>Downloads</span>
                                </div>
                                <div onClick={() => handleTabClick(4)} className={`${activeTab === 4 ? 'bg-[#F6F7FB] rounded-md mb-2 cursor-pointer flex items-center text-2xl text-[#3577F0] h-12 px-6'
                                    : 'flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'}`}>
                                    <i class="fa-solid fa-house-chimney text-lg"></i>
                                    <span className='text-sm font-semibold ml-4'>Addresses</span>
                                </div>
                                <div onClick={() => handleTabClick(5)} className={`${activeTab === 5 ? 'bg-[#F6F7FB] rounded-md mb-2 cursor-pointer flex items-center text-2xl text-[#3577F0] h-12 px-6'
                                    : 'flex items-center text-2xl hover:text-[#3577F0] h-12 px-6 text-gray-500 hover:bg-[#F6F7FB] mb-2 rounded-md cursor-pointer duration-300'}`}>
                                    <i class="fa-solid fa-user text-xl"></i>
                                    <span className='text-sm font-semibold ml-5'>Account Details</span>
                                </div>
                                <div className='text-gray-500 hover:bg-[#F6F7FB] rounded-md cursor-pointer duration-300'>
                                    <Link to="/SignIn" className='flex items-center text-xl hover:text-[#3577F0] h-12 px-6 duration-300' href=""><i class="ri-logout-box-r-line"></i><span className='text-sm font-semibold ml-4'>Logout</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className='RIGHT-PART col-span-3 '>

                            {
                                activeTab === 1 && <div className='DASHBOARD-DETAILS animate-blink'>
                                    <h1 className='text-lg mb-10'>Hello Annie (not <span className='text-xl font-semibold'>Annie?</span>  <Link to="/SignIn" className='text-[#E76458] hover:text-[#3577F0] cursor-pointer duration-300'>Log Out</Link> )</h1>
                                    <p className='text-gray-500 tracking-wider'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                </div>
                            }

                            {
                                activeTab === 2 && <div className='ORDERS-DETAILS animate-blink'>
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
                            }

                            {
                                activeTab === 3 && <div className='DOWNLOAD-DETAILS animate-blink'>
                                    <h1 className='text-gray-500 tracking-wide'>You don't have any download</h1>
                                </div>
                            }

                            {
                                activeTab === 4 && <div className='ADDRESSES-DETAILS animate-blink'>
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
                            }

                            {
                                activeTab === 5 && <div className='ACCOUNT-DETAILS w-[70%] animate-blink'>
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
                            }
   
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
