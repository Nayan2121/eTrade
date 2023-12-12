import React from 'react'
import '../AllNavbar/AllNavstyle.css'
import { Link, NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export const AllNavBar = () => {

    const active = 'text-[#ff497c]'
    const normal = 'text-black'

    return (

        <>
            <div className='bg-white shadow-md'>
                <div className='flex justify-between items-center container mx-auto'>

                    {/* logo  */}
                    <NavLink to="/">
                        <img src="./src/assets/home/asset 0.png" alt="" />
                    </NavLink>

                    {/* navbar list  */}
                    <div className='grid grid-cols-6 gap-x-10'>
                        <div className='home-dropdown'>
                            <button className='font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                            <div className='home-content shadow-lg rounded-md'>
                                <ul className='list bg-white rounded-md'>
                                    <li><NavLink to="/"><a className='text-[#ff497c]' href=''>Home-Electronics</a></NavLink></li>
                                    <li><a className='hover:text-[#ff497c]' href="" >Home-NFT</a></li>
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
                            <div className='home-content shadow-lg rounded-md '>
                                <ul className='list bg-white rounded-md'>
                                    <li><NavLink to="/ShopWithSidebar" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Shop With Sidebar</a> </NavLink></li>
                                    <li><NavLink to="/ShopNoSidebar" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Shop No Sidebar</a></NavLink></li>
                                    <li><NavLink to="/ProductV1" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 1</a> </NavLink></li>
                                    <li><NavLink to="/ProductV2" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 2</a> </NavLink></li>
                                    <li><NavLink to="/ProductV3" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 3</a> </NavLink></li>
                                    <li><NavLink to="/ProductV4" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 4</a> </NavLink></li>
                                    <li><NavLink to="/ProductV5" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 5</a> </NavLink></li>
                                    <li><NavLink to="/ProductV6" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 6</a> </NavLink></li>
                                    <li><NavLink to="/ProductV7" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 7</a> </NavLink></li>
                                    <li><NavLink to="/ProductV8" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Product Variation 8</a> </NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Pages</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content shadow-lg rounded-md'>
                                <ul className='list bg-white rounded-md'>
                                    <li><NavLink to="/Wishlist" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Wishlist </a></NavLink></li>
                                    <li><NavLink to="/Cart" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Cart </a></NavLink></li>
                                    <li><NavLink to="/Checkout" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Checkout </a></NavLink></li>
                                    <li><NavLink to="/Account" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Account </a></NavLink></li>
                                    <li><NavLink to="/SignUp" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Sign Up </a></NavLink></li>
                                    <li><NavLink to="/SignIn" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Sign In </a></NavLink></li>
                                    <li><NavLink to="/ForgotPassword" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Forgot Password </a></NavLink></li>
                                    <li><NavLink to="/ResetPassword" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Reset Password </a></NavLink></li>
                                    <li><NavLink to="/PrivacyPolicy" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Privacy Policy </a></NavLink></li>
                                    <li><NavLink to="/ComingSoon" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Coming Soon </a></NavLink></li>
                                    <li><NavLink to="/Error404" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">404 Erro </a></NavLink></li>
                                    <li><NavLink to="/Typography" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ypography </a></NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'><Link to="/About">About</Link></button>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Blog</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content shadow-lg rounded-md'>
                                <ul className='list bg-white rounded-md'>
                                    <li><NavLink to="/BlogList" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Blog List </a></NavLink></li>
                                    <li><NavLink to="/BlogGrid" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Blog Grid </a></NavLink></li>
                                    <li><NavLink to="/StandardPost" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Standard Post </a></NavLink></li>
                                    <li><NavLink to="/GalleryPost" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Gallery Post </a></NavLink></li>
                                    <li><NavLink to="/VideoPost" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Video Post </a></NavLink></li>
                                    <li><NavLink to="/AudioPost" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Audio Post </a></NavLink></li>
                                    <li><NavLink to="/QuotePost" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Quote Post </a></NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'><Link to="/Contact" href="">Contact</Link></button>
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
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><Link to="/Wishlist"><i class="ri-heart-line "></i></Link></li>
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
            </div >
        </>
    )
}