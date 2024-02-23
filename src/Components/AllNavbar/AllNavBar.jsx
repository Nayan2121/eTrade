import React, { useState } from 'react'
import '../AllNavbar/AllNavstyle.css'
import { Link, NavLink } from 'react-router-dom'
import IconDropdown2 from './IconDropdown2';
import IconSidebarAll from './IconSidebarAll';
import IconSearchAll from './IconSearchAll';
import Slider from "react-slick";
import { useSelector } from 'react-redux';


export const AllNavBar = () => {

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
        <>
            <div className='bg-white shadow-md'>
                <div className='flex justify-between items-center container mx-auto'>

                    {/* logo  */}
                    <div>
                        <Link to="/">
                            <img src="./src/assets/home/asset 0.png" alt="" />
                        </Link>
                    </div>


                    {/* navbar list  */}
                    <div className='grid grid-cols-6 gap-x-10'>
                        <div className='home-dropdown'>
                            <button className='navbar-button font-semibold h-24'>Home</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
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

                                    <li><NavLink to="/ShopWithSidebar"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Shop With Sidebar</NavLink></li>

                                    <li><NavLink to="/ShopNoSidebar"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Shop No Sidebar</NavLink></li>

                                    <li><NavLink to="/ProductV1"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 1</NavLink></li>

                                    <li><NavLink to="/ProductV2"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 2</NavLink></li>

                                    <li><NavLink to="/ProductV3"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 3</NavLink></li>

                                    <li><NavLink to="/ProductV4"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 4</NavLink></li>

                                    <li><NavLink to="/ProductV5"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 5</NavLink></li>

                                    <li><NavLink to="/ProductV6"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 6</NavLink></li>

                                    <li><NavLink to="/ProductV7"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Product Variation 7</NavLink></li>

                                    <li><a className='hover:text-[#ff497c]' href="">Product Variation 8</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'>Pages</button>
                            <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content shadow-md'>
                                <ul className='list bg-white rounded-md'>
                                    <li><NavLink to="/Wishlist"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Wishlist</NavLink></li>
                                    <li><NavLink to="/Cart"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Cart</NavLink></li>
                                    <li><NavLink to="/Checkout"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Checkout</NavLink></li>
                                    <li><NavLink to="/Account"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Account</NavLink></li>
                                    <li><NavLink to="/SignUp"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Sign Up</NavLink></li>
                                    <li><NavLink to="/SignIn"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Sign In</NavLink></li>
                                    <li><NavLink to="/ForgotPassword"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Forgot Password</NavLink></li>
                                    <li><NavLink to="/ResetPassword"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Reser Password</NavLink></li>
                                    <li><NavLink to="/PrivacyPolicy"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Privacy Policy</NavLink></li>
                                    <li><NavLink to="/ComingSoon"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Coming Soon</NavLink></li>
                                    <li><NavLink to="/Error404"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">404 Error</NavLink></li>
                                    <li><NavLink to="/Typography"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Typography</NavLink></li>
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
                                    <li><NavLink to="/BlogList"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Blog List</NavLink></li>
                                    <li><NavLink to="/BlogGrid"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Blog Grid</NavLink></li>
                                    <li><NavLink to="/StandardPost"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Standard Post</NavLink></li>
                                    <li><NavLink to="/GallaryPost"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Gallery Post</NavLink></li>
                                    <li><NavLink to="/VideoPost"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Video Post</NavLink></li>
                                    <li><NavLink to="/AudioPost"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Audio Post</NavLink></li>
                                    <li><NavLink to="/QuotePost"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff497c' : '#292930',
                                        })}
                                        className='hover:text-[#ff497c]' href="">Quote Post</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <button className='navbar-button font-semibold h-24'><Link to="/Contact">Contact</Link></button>
                        </div>

                    </div>


                    {/* serach bar  */}

                    <div className='flex'>
                        <div onClick={handleSearchClick}>
                            <div className='mr-10'>
                                <div class="border text-gray-500 rounded-md ">
                                    <i class="ri-search-line mx-2 text-lg"></i>
                                    <input className='w-56 py-2 placeholder:pl-2 outline-none caret-transparent focus:caret-black' type="search" placeholder='What are you looking for?' />
                                </div>
                            </div>
                        </div>
                        <IconSearchAll isOpen={isSearchOpen} onClose={handleSearchClick} />

                        {/* nav icon  */}
                        <div className='text-2xl text-gray-600 flex justify-between w-[120px] h-10'>
                            <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                                <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><Link to="/Wishlist"> <i class="ri-heart-line "></i></Link></li>
                                <h1 className='absolute h-5 w-5 rounded-full -top-1 -right-3.5 ring-2 z-50 ring-white bg-blue-600 text-xs text-white pl-2 pt-0.5'>{wish.length}</h1>
                            </ul>

                            <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 ml-3'>
                                <button onClick={toggleSidebar}>
                                    <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line "></i></li>
                                    <h1 className='absolute h-5 w-5 rounded-full z-50 -top-1 -right-3.5 ring-2 ring-white bg-blue-600 text-xs text-white pt-0.5'>{result.length}</h1>
                                </button>
                            </ul>
                            <IconSidebarAll isOpen={isSidebarOpen} onClose={toggleSidebar} />


                            <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                                <div className="nav-icon" onClick={toggleDetailsMenu}>
                                    <li className=' nav-icon h-10 w-10 flex justify-center items-center rounded-full' ><i class="ri-user-3-line "></i>
                                    </li>
                                </div>
                            </ul>
                            <IconDropdown2 isOpen={isDetailsMenuOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// get offer 
export const NavBottom = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        // cssEase: "linear",
        arrows: false,
    };
    let slider;

    const handlePrev = () => {
        slider.slickPrev();
    };

    const handleNext = () => {
        slider.slickNext();
    };
    return (
        <>
            <div className='OFFER flex justify-center items-center'>
                <div>
                    <img className='w-full h-16 object-cover' src="./src/assets/shop/shopwithsidebar/asset 29.png" alt="" />
                </div>
                <div className='absolute text-white  w-[550px] mt-2'>
                    <div className='flex justify-between '>
                        <div className='w-10 '>
                            <button onClick={handlePrev}>
                                <i class="ri-arrow-left-line "></i>
                            </button>
                        </div>
                        <div className='h-10 w-96'>
                            <Slider ref={(c) => (slider = c)}  {...settings}>
                                <div>
                                    <h1 className=' font-bold '>STUDENT NOW GET 10% OFF : <span className='underline hover:text-[#FF497C] duration-700'>GET OFFER</span></h1>
                                </div>
                                <div>
                                    <h1 className=' font-bold '>STUDENT NOW GET 10% OFF : <span className='underline hover:text-[#FF497C] duration-700'>GET OFFER</span></h1>
                                </div>
                            </Slider>
                        </div>
                        <div className='w-10 '>
                            <button onClick={handleNext}>
                                <i class="ri-arrow-right-line "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}








