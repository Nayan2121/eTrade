import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Cart = () => {
    return (
        <>
            <div>
                <section className='PAGES-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='PAGES-NAVBAR sticky top-0 z-20'>
                    <AllNavBar />
                </section>

                <section className='PAGES-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='TABLE-LIST'>
                    <div className='container mx-auto my-[100px] '>
                        <div className='flex justify-between'>
                            <h1 className="text-2xl font-semibold text-[#292930]">
                                Your Cart
                            </h1>
                            <h1 className="text-sm  text-[#3577F0]">
                                Clear Shoping Cart
                            </h1>
                        </div>

                        <div>
                            <div className="py-5 flex justify-around items-center bg-[#F6F7FB] text-[#292930] rounded-md mt-5">
                                <h1 className="text-xl font-semibold ">Product</h1>
                                <h1 className="text-xl font-semibold ml-56">Price</h1>
                                <h1 className="text-xl font-semibold mr-50">Quantity</h1>
                                <h1 className="text-xl font-semibold -mr-12">Subtotal</h1>
                            </div>

                            <div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 2.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        Wireless PS Handler
                                    </p>
                                    <p className="mr-2 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>-</span>
                                        <h1 className='font-semibold text-lg mx-5'>1</h1>
                                        <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>+</span>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 3.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        Gradient Light Keyboard
                                    </p>
                                    <p className="mr-2 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>-</span>
                                        <h1 className='font-semibold text-lg mx-5'>1</h1>
                                        <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>+</span>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 4.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        HD CC Camera
                                    </p>
                                    <p className="mr-2  text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>-</span>
                                        <h1 className='font-semibold text-lg mx-5'>1</h1>
                                        <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer'>+</span>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 pt-10 gap-10'>
                            <div className='flex items-end '>
                                <div className='border-b-2 border-gray-100 pb-5 w-[100%]'>
                                    <input className='w-[100%] placeholder:text-sm placeholder:text-gray-500' type="text" placeholder='Enter coupon code' />
                                </div>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  ml-5 hover:text-white hover:bg-[#3577F0] duration-300">
                                    Apply
                                </button>
                            </div>
                            <div className='text-end '>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  hover:text-white hover:bg-[#3577F0] duration-300">
                                    Upadate Cart
                                </button>
                            </div>
                        </div>

                        <div className='FROM mt-[80px] text-[#292930] flex justify-end '>
                            <div className='bg-[#F9F3F0] rounded-md p-8 w-[35%]'>
                                <h1 className='text-xl font-semibold mb-8'>Order Summary</h1>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4 '>
                                    <h1 className='w-56'>Subtotal</h1>
                                    <h1>$117.00</h1>
                                </div>
                                <div className='flex text-base mb-5 border-b-2 pb-4'>
                                    <h1 className='font-semibold w-56'>Shipping</h1>
                                    <div>
                                        <ul className='leading-7'>
                                            <li><input type="radio" checked />
                                                <label className='ml-2'>Free Shippping</label>
                                            </li>
                                            <li><input type="radio" />
                                                <label className='ml-2'>Local: $35.00</label>
                                            </li>
                                            <li><input type="radio" />
                                                <label className='ml-2'>Flat rate: $12.00</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4'>
                                    <h1 className='w-56'>State Tax</h1>
                                    <h1>$8.00</h1>
                                </div>
                                <div className='flex mb-8 border-b-2 pb-4'>
                                    <h1 className='text-base font-semibold w-56'>Total</h1>
                                    <h1 className='text-xl font-bold text-[#3577F0]'>$125.00</h1>
                                </div>
                                <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10'>
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
                </section>

                <section className='PAGES-FOOTER'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Cart
