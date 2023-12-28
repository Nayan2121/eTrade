import React, { useState } from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import Data from "../../../data.json"

const ShopWithSidebar = () => {
    const [categories, setCategories] = React.useState("Sun Care");
    const [gender, setGender] = React.useState("Men");

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
                    <div className='px-20'>
                        <div className='row flex justify-between pt-20'>
                            <div className='W-96'>
                                <div className=''>
                                    <div className='underline underline-offset-[20px] w-full decoration-[3px] decoration-[#3577F0] flex justify-between'>
                                        <p className='font-semibold text-lg'>CATEGORIES</p>
                                        <h1 className=''>-</h1>
                                    </div>
                                    <div className='my-10'>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Sun Care"} onChange={() => setCategories("Sun Care")} />
                                            <label htmlFor="">Sun Care</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Night Care"} onChange={() => setCategories("Night Care")} />
                                            <label htmlFor="">Night Care</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Treatments"} onChange={() => setCategories("Treatments")}></input>
                                            <label htmlFor="">Treatments</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Moistruizers"} onChange={() => setCategories("Moistruizers")} />
                                            <label htmlFor="">Moistruizers</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Eye Care"} onChange={() => setCategories("Eye Care")} />
                                            <label htmlFor="">Eye Care</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Mask"} onChange={() => setCategories("Mask")} />
                                            <label htmlFor="">Mask</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "Featured"} onChange={() => setCategories("Featured")} />
                                            <label htmlFor="">Featured</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={categories === "On Sale"} onChange={() => setCategories("On Sale")} />
                                            <label htmlFor="">On Sale</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='GENDER'>
                                    <div className='flex justify-between underline underline-offset-[20px] w-full decoration-[3px] decoration-[#3577F0] '>
                                        <h1 className='font-semibold text-lg'>GENDER</h1>
                                        <h1>-</h1>
                                    </div>
                                    <div className='my-10'>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={gender === "Men"} onChange={() => setGender("Men")} />
                                            <label htmlFor="">Men</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={gender === "Women"} onChange={() => setGender("Women")} />
                                            <label htmlFor="">Women</label>
                                        </div>
                                        <div className='mb-3'>
                                            <input className='mr-2' type="checkbox" checked={gender === "Unisex"} onChange={() => setGender("Unisex")} />
                                            <label htmlFor="">Unisex</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='COLOR'>
                                    <div className='flex justify-between underline underline-offset-[20px] w-full decoration-[3px] decoration-[#3577F0] '>
                                        <h1 className='font-semibold text-lg'>COLORS</h1>
                                        <h1>-</h1>
                                    </div>
                                    <div className='my-10  '>
                                        <div className='flex'>
                                            <div className='h-5 w-5 rounded-full bg-[#906145] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#906145] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#FAB8C4] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#FAB8C4] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#FFDC60] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#FFDC60] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#896BA7] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#896BA7] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#DBDEFF] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#DBDEFF] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#BADEFF] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#BADEFF] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#DFBF9B] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#DFBF9B] mr-7'></div>
                                        </div>
                                        <div className='flex mt-5'>
                                            <div className='h-5 w-5 rounded-full bg-[#BADEFF] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#BADEFF] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#DBDEFF] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#DBDEFF] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#DBF8FF] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#DBF8FF] mr-7'></div>
                                            <div className='h-5 w-5 rounded-full bg-[#FFEDDC] duration-500 hover:ring-2 hover:ring-offset-4 hover:ring-[#FFEDDC] mr-7'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='SIZE'>
                                    <div className='flex justify-between underline underline-offset-[20px] w-full decoration-[3px] decoration-[#3577F0] '>
                                        <h1 className='font-semibold text-lg'>SIZE</h1>
                                        <h1>-</h1>
                                    </div>
                                    <div className='my-10'>
                                        <div className='flex'>
                                            <p className='bg-blue-600 rounded-full text-white p-3 w-12 h-12 text-center mr-5'>XS</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>S</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>M</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>L</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>XL</p>
                                        </div>
                                        <div className='flex mt-5'>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>XXL</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>3XL</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>4XL</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='PRICE'>
                                    <div className='flex justify-between underline underline-offset-[20px] w-full decoration-[3px] decoration-[#3577F0] '>
                                        <h1 className='font-semibold text-lg'>PRICE</h1>
                                        <h1>-</h1>
                                    </div>
                                    <div className='my-10'>
                                        <div className='flex mb-3'>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-12 h-12 text-center mr-5'>30</p>
                                            <p className='hover:bg-blue-600 rounded-full border duration-500 hover:text-white p-3 w-16 h-12 text-center mr-5'>5000</p>
                                        </div>

                                        <input className='w-full' type="range" />

                                        <div className='flex mt-3'>
                                            <p>Price:$0</p>
                                            <p className='ml-5'>$5000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='BUTTON'>
                                    <div className='relative w-full h-16 flex justify-center items-center z-10 p-2 rounded-md text-white font-semibold'>
                                        <a href="" className='
                                                        before:absolute
                                                        before:content-[""]
                                                        before:bg-[#3577f0]
                                                        before:top-0
                                                        before:bottom-0
                                                        before:left-0
                                                        before:right-0
                                                        before:hover:scale-105
                                                        before:duration-300
                                                        before:rounded-md
                                                        before:-z-10
                                                    '>All Reset</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center right-0 justify-end mr-7'>
                                    <p>Showing 1-12 of 84 results</p>
                                    <select name="option" id="option" placeholder='Sort By Latest' className='text-lg border-2 border-slate-300 rounded-md p-3 m-2'>
                                        <option value="a"><a href="">Sort By Latest</a></option>
                                        <option value="b"><a href="">Sort By Name</a></option>
                                        <option value="b"><a href="">Sort By Price</a></option>
                                        <option value="b"><a href="">Sort By Viewed</a></option>
                                    </select>
                                </div>

                                <div className='grid grid-cols-3 container mx-auto gap-10'>
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
                                                            <div className='absolute bottom-24 opacity-0 group-hover:opacity-100 group-hover:bottom-28 duration-500 flex w-full justify-center items-center'>
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

                                </div>
                                <div className='flex justify-center my-10'>
                                    <div className='relative w-56 h-14 flex justify-center items-center z-10 p-2 rounded-md text-[#777777] font-semibold'>
                                        <a href="#" className='
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
                                                        '>Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ShopWithSidebar


