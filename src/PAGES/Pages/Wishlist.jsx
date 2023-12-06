import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Wishlist = () => {
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

                <section className='TABLE-LIST'>
                    <div className='container mx-auto my-[100px]'>
                        <div>
                            <h1 className="text-2xl font-semibold text-[#292930]">
                                My Wish List on eTrade
                            </h1>
                        </div>

                        <div>
                            <div className="py-5 flex justify-around items-center bg-[#F6F7FB] text-[#292930] rounded-md mt-5">
                                <h1 className="text-xl font-semibold ">Product</h1>
                                <h1 className="text-xl font-semibold ml-56">Unit Price</h1>
                                <h1 className="text-xl font-semibold mr-60">Stoke Status</h1>
                            </div>

                            <div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 2.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        Wireless PS Handler
                                    </p>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <p className="mr-16 text-xl text-gray-500 font-semibold">
                                        In Stock
                                    </p>
                                    <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-[#3577F0] duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 3.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        Gradient Light Keyboard
                                    </p>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <p className="mr-16 text-xl text-gray-500 font-semibold">
                                        In Stock
                                    </p>
                                    <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-[#3577F0] duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                                    <img className="h-20 w-20 -mx-32 cursor-pointer" src="./src/assets/pages/wishlist/asset 4.png"></img>
                                    <p className="text-xl w-56 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300">
                                        HD CC Camera
                                    </p>
                                    <p className="mr-16  text-gray-500 font-semibold text-xl">$124.00</p>
                                    <p className="mr-16 text-xl text-gray-500 font-semibold">
                                        In Stock
                                    </p>
                                    <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-[#3577F0] duration-300">
                                        Add to Cart
                                    </button>
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

export default Wishlist
