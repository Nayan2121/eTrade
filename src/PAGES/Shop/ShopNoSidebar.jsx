import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import Data from "../../../data.json"
import './ShopNoSidebar.css'

const ShopNoSidebar = () => {
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

                <section className='container mx-auto mt-20 mb-10'>
                    <div className='flex justify-between px-7'>
                        <div className=''>
                            <select name="option" id="option" placeholder='Categories' className='text-lg border-2 border-slate-300 rounded-md p-3 pr-3 m-2'>
                                <option value="a"><a href="">Categories</a></option>
                                <option value="b"><a href="">Fashion</a></option>
                                <option value="b"><a href="">Electronics</a></option>
                                <option value="b"><a href="">Furniture</a></option>
                                <option value="b"><a href="">Beauty</a></option>
                            </select>
                            <select name="option" id="option" placeholder='Colors' className='text-lg border-2 border-slate-300 rounded-md p-3 m-2'>
                                <option value="b"><a href="">Colors</a></option>
                                <option value="a"><a href="">Red</a></option>
                                <option value="b"><a href="">Blue</a></option>
                                <option value="b"><a href="">Green</a></option>
                                <option value="b"><a href="">Pink</a></option>
                            </select>
                            <select name="option" id="option" placeholder='Price Range' className='text-lg border-2 border-slate-300 rounded-md p-3 m-2'>
                                <option value="a"><a href="">Price Range</a></option>
                                <option value="b"><a href="">0 - 100</a></option>
                                <option value="b"><a href="">100 - 500</a></option>
                                <option value="b"><a href="">500 - 1000</a></option>
                                <option value="b"><a href="">1000 - 5000</a></option>
                            </select>
                        </div>
                        <div>
                            <select name="option" id="option" placeholder='Sort By Latest' className='text-lg border-2 border-slate-300 rounded-md p-3 m-2'>
                                <option value="a"><a href="">Sort By Latest</a></option>
                                <option value="b"><a href="">Sort By Name</a></option>
                                <option value="b"><a href="">Sort By Price</a></option>
                                <option value="b"><a href="">Sort By Viewed</a></option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className='grid grid-cols-4 container mx-auto gap-10'>
                    {
                        Data.map(data => {
                            return (
                                <>
                                    <div className='flex justify-center '>
                                        <table className='relative group'>
                                            <tr className=''>
                                                <th className='group overflow-hidden rounded-3xl'>
                                                    <img className='w-full h-72 group-hover:scale-110 duration-500 ' src={data.product_img} alt="" />
                                                </th>
                                            </tr>
                                            <tr>
                                                <td className='leading-10'>
                                                    <a className='text-[#777777] font-semibold block' href=''>{data.product_name}</a>
                                                    <a className='text-lg font-semibold' href=''>{data.new_price} <span className='text-[#d6d6d6]'> <del> {data.old_price}</del></span></a>
                                                </td>
                                            </tr>
                                            <div className='absolute bottom-24 opacity-0 group-hover:opacity-100 group-hover:bottom-28 duration-500 flex w-full justify-center items-center '>
                                                <div className='w-10 h-10 mr-2 hover:scale-110 duration-500 border bg-white rounded-md flex justify-center items-center'>
                                                    <i class="ri-heart-line "></i>
                                                </div>
                                                <div className='relative w-28 z-10 text-center p-2 rounded-md text-white font-semibold'>
                                                    <a href="" className='
                                                        before:absolute
                                                        before:content-[""]
                                                        before:bg-[#ff497c]
                                                        before:top-0
                                                        before:bottom-0
                                                        before:left-0
                                                        before:right-0
                                                        before:hover:scale-105
                                                        before:duration-300
                                                        before:rounded-md
                                                        before:-z-10
                                                    '>Add to Cart</a>
                                                </div>
                                                <div className='w-10 h-10 ml-2 flex justify-center items-center border bg-white rounded-md text-slate-700'>
                                                    <i class="fa-solid fa-eye"></i>
                                                </div>
                                            </div>
                                        </table>
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </section>
                <div className='container mx-auto flex justify-center my-20' >
                    <div className='relative w-56 z-10 text-center p-2 py-4  rounded-md text-[#777777] font-semibold'>
                        <a href="#top" className='
                                                        before:absolute
                                                        before:content-[""]
                                                        before:bg-[#F6F7FB]
                                                        before:top-0
                                                        before:bottom-0
                                                        before:left-0
                                                        before:right-0
                                                        before:hover:scale-105
                                                        before:duration-300
                                                        before:rounded-md
                                                        before:-z-10
                                                    '>View All Products</a>
                    </div>
                </div>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
           
        </>
    )
}

export default ShopNoSidebar