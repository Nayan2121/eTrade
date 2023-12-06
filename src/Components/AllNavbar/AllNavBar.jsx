import React from 'react'
import '../AllNavbar/AllNavstyle.css'


export const AllNavBar = () => {
    return (

        <>
            <div className='bg-white shadow-md'>
                <div className='flex justify-between items-center container mx-auto'>
                
                    {/* logo  */}
                    <div>
                        <img src="./src/assets/home/asset 0.png" alt="" />
                    </div>

                    {/* navbar list  */}
                    <div className='grid grid-cols-6 gap-x-10'>
                        <div className='home-dropdown'>
                            <button className='font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><a className='text-[#ff497c]' href="">Home-Electronics</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Home-NFT</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Home-Fashion</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Home-Jewellery</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Home-Furniture</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Home-Multipurpose</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">RTL Version</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800 '>
                            <button className='navbar-button font-semibold h-24'>Shop</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><a className='hover:text-[#ff497c]' href="">Shop With Sidebar</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Shop No Sidebar</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 1</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 2</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 3</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 4</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 5</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 6</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 7</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 8</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Pages</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><a className='hover:text-[#ff497c]' href="">Wishlist</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Cart</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Checkout</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Account</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Sign Up</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Sign In</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Forgot Password</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Reser Password</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Privacy Policy</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Coming Soon</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">404 Error</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Typography</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>About</button>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Blog</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><a className='hover:text-[#ff497c]' href="">Blog List</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Blog Grid</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Standard Post</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Gallery Post</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Video Post</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Audio Post</a></li>
                                    <li><a className='hover:text-[#ff497c]' href="">Quote Post</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Contact</button>
                        </div>

                    </div>


                    {/* serach bar  */}
                    <div class="border text-gray-500 rounded-md ">
                        <i class="ri-search-line mx-2 text-lg"></i>
                        <input className='w-56 py-2 placeholder:pl-2 outline-none caret-transparent focus:caret-black' type="search" placeholder='What are you looking for?' />
                    </div>


                    {/* nav icon  */}
                    <div className='text-2xl text-gray-600 flex justify-between w-[120px] h-10'>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-heart-line "></i></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line "></i></li>
                        </ul>
                        <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-user-3-line "></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


// get offer 
export const NavBottom = () => {
    return (
        <>
            <div className='OFFER relative flex justify-center items-center'>
                <img className='w-full h-16 object-cover' src="./src/assets/shop/shopwithsidebar/asset 29.png" alt="" />
                <div className='absolute text-white '>
                    <i class="ri-arrow-left-line mr-10"></i>
                    <a className=' font-bold '>STUDENT NOW GET 10% OFF : <span className='underline hover:text-[#FF497C] duration-700'>GET OFFER</span></a>
                    <i class="ri-arrow-right-line ml-10"></i>
                </div>
            </div>
        </>
    )
}








