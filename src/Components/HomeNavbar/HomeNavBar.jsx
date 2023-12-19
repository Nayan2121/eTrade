import React from 'react'
import '../HomeNavbar/HomeNavstyle.css'
import { Link } from 'react-router-dom'
import Profile from '../Profile'


const HomeNavBar = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex justify-around items-center bg-white rounded-md shadow-md '>
                {/* logo  */}
                <div>
                    <img src="./src/assets/home/asset 0.png" alt="" />
                </div>

                {/* navbar list  */}
                <div className='grid grid-cols-6 gap-x-10 '>
                    <div className='home-dropdown'>
                        <button className='font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="/" className='text-[#ff497c]' href="">Home-Electronics</Link></li>
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
                                <li><Link to="/ShopWithSidebar" className='hover:text-[#ff497c]' href="">Shop With Sidebar</Link></li>
                                <li><Link to="/ShopNoSidebar" className='hover:text-[#ff497c]' href="">Shop No Sidebar</Link></li>
                                <li><Link to="/ProductV1" className='hover:text-[#ff497c]' href="">Product Variation 1</Link></li>
                                <li><Link to="/ProductV2" className='hover:text-[#ff497c]' href="">Product Variation 2</Link></li>
                                <li><Link to="/ProductV3" className='hover:text-[#ff497c]' href="">Product Variation 3</Link></li>
                                <li><Link to="/ProductV4" className='hover:text-[#ff497c]' href="">Product Variation 4</Link></li>
                                <li><Link to="/ProductV5" className='hover:text-[#ff497c]' href="">Product Variation 5</Link></li>
                                <li><Link to="/ProductV6" className='hover:text-[#ff497c]' href="">Product Variation 6</Link></li>
                                <li><Link to="/ProductV7" className='hover:text-[#ff497c]' href="">Product Variation 7</Link></li>
                                <li><Link to="/ProductV8" className='hover:text-[#ff497c]' href="">Product Variation 8</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'>Pages</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="Wishlist" className='hover:text-[#ff497c]' href="">Wishlist</Link></li>
                                <li><Link to="Cart" className='hover:text-[#ff497c]' href="">Cart</Link></li>
                                <li><Link to="Checkout" className='hover:text-[#ff497c]' href="">Checkout</Link></li>
                                <li><Link to="Account" className='hover:text-[#ff497c]' href="">Account</Link></li>
                                <li><Link to="SignUp" className='hover:text-[#ff497c]' href="">Sign Up</Link></li>
                                <li><Link to="SignIn" className='hover:text-[#ff497c]' href="">Sign In</Link></li>
                                <li><Link to="ForgotPassword" className='hover:text-[#ff497c]' href="">Forgot Password</Link></li>
                                <li><Link to="ResetPassword" className='hover:text-[#ff497c]' href="">Reser Password</Link></li>
                                <li><Link to="PrivacyPolicy" className='hover:text-[#ff497c]' href="">Privacy Policy</Link></li>
                                <li><Link to="ComingSoon" className='hover:text-[#ff497c]' href="">Coming Soon</Link></li>
                                <li><Link to="Error404" className='hover:text-[#ff497c]' href="">404 Error</Link></li>
                                <li><Link to="Typography" className='hover:text-[#ff497c]' href="">Typography</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'><Link to="/About">About</Link></button>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'>Blog</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="/BlogList" className='hover:text-[#ff497c]' href="">Blog List</Link></li>
                                <li><Link to="/BlogGrid" className='hover:text-[#ff497c]' href="">Blog Grid</Link></li>
                                <li><Link to="/StandardPost" className='hover:text-[#ff497c]' href="">Standard Post</Link></li>
                                <li><Link to="/GalleryPost" className='hover:text-[#ff497c]' href="">Gallery Post</Link></li>
                                <li><Link to="/VideoPost" className='hover:text-[#ff497c]' href="">Video Post</Link></li>
                                <li><Link to="/AudioPost" className='hover:text-[#ff497c]' href="">Audio Post</Link></li>
                                <li><Link to="/QuotePost" className='hover:text-[#ff497c]' href="">Quote Post</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'><Link to="/Contact" href="">Contact</Link></button>
                    </div>
                </div>

                {/* nav icon  */}
                <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-search-line "></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><Link to="/Wishlist"><i class="ri-heart-line "></i></Link></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line "></i></li>
                    </ul>
                    {/* <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-user-3-line "></i></li>
                    </ul> */}
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><Profile /></li>
                    </ul>

                </div>
            </div>

        </div>
    )
}


export default HomeNavBar





