import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import Data from "../../../data.json"

const ShopNoSidebar = () => {
    function myFunction() {
        document.getElementById("categories").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='SHOP-SPEAKER'>
                    <Speaker p1="My Account" p2="Explore All Products" />
                </section>

                <section className='container mx-auto'>
                    <div className="dropdown mr-8 z-30 ">
                        <button onClick={myFunction} className="dropbtn text-lg border-2 border-slate-300 rounded-md p-3 px-5 cursor-pointer">Categories <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs pl-2"></i></button>
                        <div id="categories" className="dropdown-content w-[150px] border rounded-none border-black bg-white shadow-lg text-center">
                            <a className='w-[148px] leading-relaxed hover:bg-[#3577f0] hover:text-white' href="#home">Categories</a>
                            <a className='w-[148px] leading-relaxed hover:bg-[#3577f0] hover:text-white' href="#about">Fashion</a>
                            <a className='w-[148px] leading-relaxed hover:bg-[#3577f0] hover:text-white' href="#contact">Electronics</a>
                            <a className='w-[148px] leading-relaxed hover:bg-[#3577f0] hover:text-white' href="#contact">Furniture</a>
                            <a className='w-[148px]  leading-relaxed hover:bg-[#3577f0] hover:text-white' href="#contact">Beauty</a>
                        </div>
                    </div>
                </section>
                <section className='grid grid-cols-4 container mx-auto '>
                    {
                        Data.map(data => {
                            return (
                                <>
                                    <div className=''>
                                        <table className=''>
                                            <tr>
                                                <th>
                                                    <img className='w-full h-72' src={data.product_img} alt="" />
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h1>{data.product_name}</h1>
                                                    <h1>{data.new_price} <span>{data.old_price}</span></h1>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </section>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ShopNoSidebar


