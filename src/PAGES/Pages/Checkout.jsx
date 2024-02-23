import React, { useState } from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Checkout = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(false);
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    const [selectCateg, setselectCateg] = useState("Free Shippping");
    const [selecttransfer, setselectTransfer] = useState("Direct bank transfer");

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

                <section className='BILLING-FORM container mx-auto my-[80px]'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='LEFT-PART'>
                            <div className='dropdown-1'>
                                <div className='flex  items-center py-4 px-7 bg-[#F6F7FB] rounded-md mb-5'>
                                    <span className='text-[#777777] text-lg'><i class="ri-user-3-fill "></i></span>
                                    <h1 className='text-gray-500 ml-2'>Returning customer?</h1>
                                    <div onClick={toggleAccordion1} className='font-medium text-gray-700 hover:text-[#3577F0] duration-300 ml-1 ' href="">Click here to login <span className='text-[#777777] text-xl'><i class="ri-arrow-down-s-line "></i></span></div>
                                </div>

                                {
                                    isOpen1 && <div className='border rounded-xl p-7 mb-5'>
                                        <h1 className='text-gray-500 mb-8'>If you didn't Logged in, Please Log in first.</h1>
                                        <div className='relative text-gray-500 mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Email</label>
                                            <input type="text" className='w-full  border border-gray-300  px-7 py-4 rounded-md font-normal outline-none ' />
                                        </div>
                                        <div className='relative text-gray-500 mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Password</label>
                                            <input type="text" className='w-full  border border-gray-300  px-7 py-4 rounded-md font-normal outline-none ' />
                                        </div>
                                        <div className='BUTTON'>
                                            <a href="" className='relative px-10 py-4 bg-[#3577F0] text-white font-bold rounded-md 
                                            before:absolute
                                            before:content-[""]
                                            before:bg-[#3577F0]
                                            before:top-0
                                            before:bottom-0
                                            before:left-0
                                            before:right-0
                                            before:hover:scale-110
                                            before:duration-300
                                            before:rounded-md
                                            before:-z-10
                                            '>Sign In</a>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className='dropdown-2'>
                                <div className='flex  items-center py-4 px-7 bg-[#F6F7FB] rounded-md mb-8'>
                                    <span className='text-[#777777] text-lg'><i class="ri-pencil-fill "></i></span>
                                    <h1 className='text-gray-500 ml-2'>Have a coupon?</h1>
                                    <div onClick={toggleAccordion2} className='font-medium text-gray-700 hover:text-[#3577F0] duration-300 ml-1' href="">Click here to enter your code <span className='text-[#777777] text-xl'><i class="ri-arrow-down-s-line "></i></span></div>
                                </div>

                                {
                                    isOpen2 && <div className='border rounded-xl p-7 mb-5 '>
                                        <h1 className='text-gray-500 mb-8'>If you have a coupon code, please apply it below.</h1>
                                        <div className='flex items-center text-gray-500 mb-4'>
                                            <input type="text" className=' border border-gray-300  px-7 py-4 rounded-md font-normal outline-none mr-4' placeholder='Enter coupon code' />
                                            <div className='BUTTON'>
                                                <a href="" className='relative px-10 py-4 bg-[#3577F0] text-white font-bold rounded-md 
                                            before:absolute code
                                            before:content-[""]
                                            before:bg-[#3577F0]
                                            before:top-0
                                            before:bottom-0
                                            before:left-0
                                            before:right-0
                                            before:hover:scale-110
                                            before:duration-300
                                            before:rounded-md
                                            before:-z-10
                                            '>Sign In</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className='BILLING-DETAILS'>
                                <h1 className='font-medium text-2xl text-[#292930] mb-10'>Billing details</h1>

                                <div className='grid grid-cols-2 gap-8 mb-8'>
                                    <div className='relative text-gray-500  '>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >First Name<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='Adam' />
                                    </div>
                                    <div className='relative text-gray-500 '>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Last Name<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className='w-full border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='John' />
                                    </div>
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Company Name</label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Country/ Region <span className='text-[#E76458] ml-1'>*</span></label>
                                    <div className='border border-gray-300  rounded-md font-normal '>
                                        <select name="" id="" className='w-full  px-10 py-5 outline-none border-r-[40px] border-white rounded-md' >
                                            <option value="">Australia</option>
                                            <option value="">England</option>
                                            <option value="">New Zealand</option>
                                            <option value="">Switzerland</option>
                                            <option value="">United Kindom (UK)</option>
                                            <option value="">United States (USA)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Street Address <span className='text-[#E76458] ml-1'>*</span></label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='House number and street name' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' ></label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='Apartment, suite, unit, etc. (optonal)' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Town/ City <span className='text-[#E76458] ml-1'>*</span></label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Country</label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Phone <span className='text-[#E76458] ml-1'>*</span></label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                </div>

                                <div className='relative text-gray-500  mb-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Email Address <span className='text-[#E76458] ml-1'>*</span></label>
                                    <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                </div>

                                <div className='flex items-center  mb-8'>
                                    <input className='w-4 h-4 cursor-pointer' type="checkbox" />
                                    <span className='ml-3 text-base cursor-pointer'>Create an account</span>
                                </div>

                                <div className='dropdown-3'>
                                    <div onClick={toggleAccordion3} className='flex justify-between items-center mb-8'>
                                        <h1 className='font-medium text-2xl text-[#292930] cursor-pointer'>Ship to a different address?</h1>
                                        <input className='w-4 h-4 cursor-pointer' type="checkbox" />
                                    </div>

                                    {isOpen3 && <div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Country/ Region <span className='text-[#E76458] ml-1'>*</span></label>
                                            <div className='border border-gray-300  rounded-md font-normal '>
                                                <select name="" id="" className='w-full  px-10 py-5 outline-none border-r-[40px] border-white rounded-md' >
                                                    <option value="">Australia</option>
                                                    <option value="">England</option>
                                                    <option value="">New Zealand</option>
                                                    <option value="">Switzerland</option>
                                                    <option value="">United Kindom (UK)</option>
                                                    <option value="">United States (USA)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Street Address <span className='text-[#E76458] ml-1'>*</span></label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='House number and street name' />
                                        </div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' ></label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' placeholder='Apartment, suite, unit, etc. (optonal)' />
                                        </div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Town/ City <span className='text-[#E76458] ml-1'>*</span></label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                        </div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Country</label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                        </div>
                                        <div className='relative text-gray-500  mb-8'>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Phone <span className='text-[#E76458] ml-1'>*</span></label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                        </div>
                                    </div>}

                                    <div className='relative text-gray-500 '>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Other Notes (optional)</label>
                                        <textarea className='resize-none border w-full border-gray-300 rounded-md font-normal outline-none
                                    px-9 py-5' cols="" rows="5" placeholder='Notes about your order, e.g. speacial notes for delivery.'></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='RIGHT-PART'>
                            <div className='bg-[#F9F3F0] text-[#292930] rounded-md p-10'>
                                <div>
                                    <h1 className='font-semibold text-xl mb-6'>Your Order</h1>
                                    <div className='bg-white rounded-md p-7'>
                                        <div className='flex justify-between font-semibold text-xl border-b py-5'>
                                            <h1>Product</h1>
                                            <h1>Subtotal</h1>
                                        </div>
                                        <div className='flex justify-between font-medium text-base border-b py-5'>
                                            <h1>Commodo Blown Lamp x1</h1>
                                            <h1>$117.00</h1>
                                        </div>
                                        <div className='flex justify-between font-medium text-base border-b py-5'>
                                            <h1>Commodo Blown Lamp x1</h1>
                                            <h1>$198.00</h1>
                                        </div>
                                        <div className='flex justify-between font-medium text-base border-b py-5'>
                                            <h1>Subtotal</h1>
                                            <h1>$117.00</h1>
                                        </div>
                                        <div className='border-b py-5'>
                                            <div className='flex justify-between font-medium text-base mb-3'>
                                                <h1>Shipping Method</h1>
                                                <h1>$35.00</h1>
                                            </div>
                                            <div className='text-gray-500'>
                                            {/* <div>
                                                <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Sun Care"} onChange={() => setselectCateg("Sun Care")} />
                                                <label className='ml-3' for="checkbox">Sun Care</label>
                                            </div> */}
                                                <ul className='leading-7'>
                                                    <li><input className='cursor-pointer' type="radio" checked={selectCateg === 'Free Shippping'} onChange={() => setselectCateg("Free Shippping")}/>
                                                        <label className='ml-2 cursor-pointer'>Free Shippping</label>
                                                    </li>
                                                    <li><input className='cursor-pointer' type="radio" checked={selectCateg === 'Local'} onChange={() => setselectCateg("Local")}/>
                                                        <label className='ml-2 cursor-pointer'>Local</label>
                                                    </li>
                                                    <li><input className='cursor-pointer' type="radio" checked={selectCateg === 'Flat rate'} onChange={() => setselectCateg("Flat rate")}/>
                                                        <label className='ml-2 cursor-pointer'>Flat rate</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-between font-semibold text-2xl  py-5'>
                                            <h1>Total</h1>
                                            <h1>$323.00</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <div className='border-b-2 py-4'>
                                        <input className='h-4 w-4' type="radio" checked={selecttransfer === 'Direct bank transfer'} onChange={() => setselectTransfer("Direct bank transfer")} />
                                        <label className='ml-3 text-xl font-semibold'>Direct bank transfer</label>
                                        <p className='text-gray-500 ml-7 leading-8 tracking-wide mt-5'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                    </div>
                                    <div className='border-b-2 py-4'>
                                        <input className='h-4 w-4' type="radio" checked={selecttransfer === 'Cash on delivery'} onChange={() => setselectTransfer("Cash on delivery")}/>
                                        <label className='ml-3 text-xl font-semibold'>Cash on delivery</label>
                                        <p className='text-gray-500 ml-7 leading-8 tracking-wide mt-5'>Pay with cash upon delivery.</p>
                                    </div>
                                    <div className='border-b-2 py-4 '>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <input className='h-4 w-4' type="radio" checked={selecttransfer === 'Paypal'} onChange={() => setselectTransfer("Paypal")}/>
                                                <label className='ml-3 text-xl font-semibold'>Paypal</label>
                                            </div>
                                            <img src="../src/assets/pages/checkout/asset 2.png" alt="" />
                                        </div>
                                        <p className='text-gray-500 ml-7 leading-8 tracking-wide mt-5'>Pay via PayPal; you can pay with your credit card if you don’t have a <br />PayPal account.</p>
                                    </div>
                                    <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10 mt-8'>
                                        <a href="" className='
                                        before:absolute
                                        before:content-[""]
                                        before:bg-[#3577F0]
                                        before:top-0
                                        before:bottom-0
                                        before:left-0
                                        before:right-0
                                        before:hover:scale-105
                                        before:duration-300
                                        before:rounded-md
                                        before:-z-10
                                        '>Process to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='PAGES-FOOTER'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Checkout
