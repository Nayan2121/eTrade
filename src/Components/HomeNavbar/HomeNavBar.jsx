import React, { useState } from 'react'
import '../HomeNavbar/HomeNavstyle.css'
import { Link, NavLink } from 'react-router-dom'
import IconSearchHome from './IconSearchHome';
import IconSidebarHome from './IconSidebarHome';
import IconDropdown1 from './IconDropdown1';
import { useSelector } from 'react-redux';

const HomeNavBar = () => {

    const result = useSelector((state) => state.cartData);
    const wish = useSelector((state) => state.wishData);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const [isDetailsMenuOpen, setDetailsMenuOpen] = useState(false);
    const toggleDetailsMenu = () => {
        setDetailsMenuOpen(!isDetailsMenuOpen);
    };

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
                        <button className='nav-button font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                        <div className='home-content shadow-md'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/" className='text-[#ff497c]' href="">Home-Electronics</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">Home-NFT</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">Home-Fashion</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">Home-Jewellery</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">Home-Furniture</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">Home-Multipurpose</NavLink></li>
                                <li><NavLink to="/" className='hover:text-[#ff497c]' href="">RTL Version</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Shop</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content shadow-md'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/ShopWithSidebar" className='hover:text-[#ff497c]' href="">Shop With Sidebar</NavLink></li>
                                <li><NavLink to="/ShopNoSidebar" className='hover:text-[#ff497c]' href="">Shop No Sidebar</NavLink></li>
                                <li><NavLink to="/ProductV1" className='hover:text-[#ff497c]' href="">Product Variation 1</NavLink></li>
                                <li><NavLink to="/ProductV2" className='hover:text-[#ff497c]' href="">Product Variation 2</NavLink></li>
                                <li><NavLink to="/ProductV3" className='hover:text-[#ff497c]' href="">Product Variation 3</NavLink></li>
                                <li><NavLink to="/ProductV4" className='hover:text-[#ff497c]' href="">Product Variation 4</NavLink></li>
                                <li><NavLink to="/ProductV5" className='hover:text-[#ff497c]' href="">Product Variation 5</NavLink></li>
                                <li><NavLink to="/ProductV6" className='hover:text-[#ff497c]' href="">Product Variation 6</NavLink></li>
                                <li><NavLink to="/ProductV7" className='hover:text-[#ff497c]' href="">Product Variation 7</NavLink></li>
                                <li><a className='hover:text-[#ff497c]' href="">Product Variation 8</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'>Pages</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content shadow-md'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/Wishlist" className='hover:text-[#ff497c]' href="">Wishlist</NavLink></li>
                                <li><NavLink to="/Cart" className='hover:text-[#ff497c]' href="">Cart</NavLink></li>
                                <li><NavLink to="/Checkout" className='hover:text-[#ff497c]' href="">Checkout</NavLink></li>
                                <li><NavLink to="/Account" className='hover:text-[#ff497c]' href="">Account</NavLink></li>
                                <li><NavLink to="/SignUp" className='hover:text-[#ff497c]' href="">Sign Up</NavLink></li>
                                <li><NavLink to="/SignIn" className='hover:text-[#ff497c]' href="">Sign In</NavLink></li>
                                <li><NavLink to="/ForgotPassword" className='hover:text-[#ff497c]' href="">Forgot Password</NavLink></li>
                                <li><NavLink to="/ResetPassword" className='hover:text-[#ff497c]' href="">Reser Password</NavLink></li>
                                <li><NavLink to="/PrivacyPolicy" className='hover:text-[#ff497c]' href="">Privacy Policy</NavLink></li>
                                <li><NavLink to="/ComingSoon" className='hover:text-[#ff497c]' href="">Coming Soon</NavLink></li>
                                <li><NavLink to="/Error404" className='hover:text-[#ff497c]' href="">404 Error</NavLink></li>
                                <li><NavLink to="/Typography" className='hover:text-[#ff497c]' href="">Typography</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'><Link to="/About">About</Link></button>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'>Blog</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content shadow-md'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/BlogList" className='hover:text-[#ff497c]' href="">Blog List</NavLink></li>
                                <li><NavLink to="/BlogGrid" className='hover:text-[#ff497c]' href="">Blog Grid</NavLink></li>
                                <li><NavLink to="/StandardPost" className='hover:text-[#ff497c]' href="">Standard Post</NavLink></li>
                                <li><NavLink to="/GallaryPost" className='hover:text-[#ff497c]' href="">Gallery Post</NavLink></li>
                                <li><NavLink to="/VideoPost" className='hover:text-[#ff497c]' href="">Video Post</NavLink></li>
                                <li><NavLink to="/AudioPost" className='hover:text-[#ff497c]' href="">Audio Post</NavLink></li>
                                <li><NavLink to="/QuotePost" className='hover:text-[#ff497c]' href="">Quote Post</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'><Link to="/Contact">Contact</Link> </button>
                    </div>

                </div>

                {/* nav icon  */}
                <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>

                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 ml-3'>
                        <button onClick={handleSearchClick}>
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-search-line "></i></li>
                        </button>
                    </ul>
                    <IconSearchHome isOpen={isSearchOpen} onClose={handleSearchClick} />

                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 ml-2'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><Link to="/Wishlist"><i class="ri-heart-line "></i></Link> </li>
                        <h1 className='absolute h-5 w-5 rounded-full -top-1 -right-3.5 ring-2 z-50 ring-white bg-blue-600 text-xs text-white pl-1.5 pt-0.5'>{wish.length}</h1>
                    </ul>

                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 ml-3 '>
                        <button onClick={toggleSidebar}>
                            <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line "></i></li>
                            <h1 className='absolute h-5 w-5 rounded-full -top-1 -right-3.5 ring-2 z-50 ring-white bg-blue-600 text-xs text-white pt-0.5'>{result.length}</h1>
                        </button>
                    </ul>
                    <IconSidebarHome isOpen={isSidebarOpen} onClose={toggleSidebar} />


                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <div className="nav-icon" onClick={toggleDetailsMenu}>
                            <li className=' nav-icon h-10 w-10 flex justify-center items-center rounded-full' ><i class="ri-user-3-line "></i>
                            </li>
                        </div>
                    </ul>
                    <IconDropdown1 isOpen={isDetailsMenuOpen} />

                </div>
            </div>

        </div>
    )
}


export default HomeNavBar





