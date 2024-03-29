import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'

import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import Speaker from '../../Components/Speaker'
import { Link } from 'react-router-dom'

const BlogGrid = () => {
    return (
        <>
            <div>
                <section className='BLOG-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='BLOG-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='BLOG-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='BLOG-SPEAKER'>
                    <Speaker p1="Blogs" p2="Blog Grid" />
                </section>

                <section className='BLOG-GRID container mx-auto py-[100px] '>
                    <div className='grid grid-cols-3 gap-12'>

                        <div className='LEFT-PART col-span-2'>
                            <div className='grid grid-cols-2 gap-12'>
                                <div className='BOX-1 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">
                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 3.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Digital Art's
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost" className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-2 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 4.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Photography
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>


                                <div className='BOX-3 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 5.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Music
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>10 tips for avoiding scams and staying safe on the decentralized web</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-4 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 3.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Sports
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-5 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 4.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Virtual Studio
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>


                                <div className='BOX-6 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 5.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Utility
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>10 tips for avoiding scams and staying safe on the decentralized web</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-7 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 3.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Sketch
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-8 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 4.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Digital Art's
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-9 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 3.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Digital Art's
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>

                                <div className='BOX-10 border p-5 rounded-lg relative group'>
                                    <div className='mb-5 overflow-hidden rounded-md'>
                                        <Link to="/StandardPost">

                                            <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src="./src/assets/blog/blog-grid/asset 4.png" alt="" />
                                        </Link>
                                        <h2 className='absolute top-52 right-10 text-sm text-white cursor-pointer'
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.5)",
                                                border: "1px solid rgba(255,255,255,.5)",
                                                padding: "5px 15px",
                                                backdropFilter: "blur(25px)",
                                                boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                                borderRadius: "6px"
                                            }} >Photography
                                        </h2>
                                    </div>
                                    <div className='mb-5'>
                                        <Link to="/StandardPost" className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</Link>
                                    </div>
                                    <div className='relative inline-block'>
                                        <Link to="/StandardPost     " className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                                            href="#">Read More<i class="ri-arrow-right-line ml-2"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="BUTTON-PART">
                                <div className="mt-20">
                                    <ul className="flex">
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg bg-[#3577F0] text-white text-lg">1</li>
                                        </a>
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">2</li>
                                        </a>
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">3</li>
                                        </a>
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">4</li>
                                        </a>
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">5</li>
                                        </a>
                                        <a href="#">
                                            <li className="border px-4 py-2 mr-2 rounded-lg text-gray-600 hover:text-white hover:bg-[#3577F0] duration-300 text-md">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>



                        <div className='RIGHT-PART'>
                            <div className='BOX-1 border p-8 rounded-md'>
                                <h1 className='text-[#292930] text-xl font-medium mb-8'>Latest Posts</h1>
                                <div className='flex  border-b border-gray-100 pb-5'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg h-20 w-[170px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 9.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Dubai’s FRAME Offers its Take on the</Link>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 27, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                                <div className='flex  border-b border-gray-100 py-5'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg h-20 w-[188px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 10.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Apple presents App Best of 2020 winners</Link>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 20, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                                <div className='flex pt-5'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg h-20 w-[200px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 11.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Gallaudet University innovation in education</Link>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 15, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-2 border p-8 rounded-md mt-14'>
                                <h1 className='text-[#292930] text-xl font-medium mb-8'>Recent Viewed Products</h1>
                                <div className='flex border-b border-gray-100 pb-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 12.jpeg" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Men's Fashion Tshirt</Link>
                                        <h1 className='text-lg font-semibold text-gray-300 mt-3'>$30 <span className='text-gray-700 ml-3'>$20</span></h1>
                                    </div>
                                </div>
                                <div className='flex border-b border-gray-100 py-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 13.jpeg" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Nike Shoes</Link>
                                        <h1 className='text-lg font-semibold text-gray-300 mt-3'>$200 <span className='text-gray-700 ml-3'>$150</span></h1>
                                    </div>
                                </div>
                                <div className='flex pt-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <Link to="/StandardPost">
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 14.jpeg" alt="" />
                                        </Link>
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <Link to="/StandardPost" className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Addidas Shoes</Link>
                                        <h1 className='text-lg font-semibold text-gray-300 mt-3'>$300 <span className='text-gray-700 ml-3'>$200</span></h1>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-3 border p-8 rounded-md mt-14'>
                                <h1 className='text-[#292930] text-xl font-medium mb-8 '>Search</h1>
                                <div class=" text-gray-500 rounded-md bg-[#F0F2F5] border focus-within:border-[#3577F0] duration-500">
                                    <i class="ri-search-line mx-5 text-lg"></i>
                                    <input className='py-4 bg-[#F0F2F5] outline-none  caret-transparent focus:caret-black' type="text" placeholder='Search' />
                                </div>
                            </div>

                            <div className='BOX-4 border p-8 rounded-md mt-14'>
                                <h1 className="text-lg text-[#292930] font-semibold mb-5">Archives List</h1>
                                <ul className="list-disc marker:text-gray-300 leading-8 ">
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-[#3577F0]  marker:duration-300">
                                        <a href="#" className="">January 2020</a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-[#3577F0]  marker:duration-300">
                                        <a href="#">February 2020</a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-[#3577F0] marker:duration-300">
                                        <a href="#">March 2020</a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-[#3577F0]  marker:duration-300">
                                        <a href="#">April 2020</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='BOX-5 border p-8 rounded-md mt-14'>
                                <div className=' text-gray-500 '>
                                    <h1 className="text-lg text-[#292930] font-semibold mb-5">Archives Dropdown</h1>
                                    <div className='border border-gray-300  rounded-md font-normal '>
                                        <select name="" id="" className='w-full px-5 py-4 outline-none border-r-[20px] border-white rounded-md' >
                                            <option value="">Select Month</option>
                                            <option value="">April 2020 (4)</option>
                                            <option value="">May 2020 (4)</option>
                                            <option value="">June 2020 (4)</option>
                                            <option value="">July 2020 (4)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-6 border p-8 rounded-md mt-14'>
                                <h1 className="mb-8 text-lg text-[#292930] font-semibold">Tags</h1>
                                <div className="flex">
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">Design</a>
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">HTML</a>
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">Graphic</a>
                                </div>
                                <div className="flex mt-3">
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">Development</a>
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">UI/UX Design</a>
                                </div>
                                <div className="flex mt-3">
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">eCommerce</a>
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">CSS</a>
                                    <a href="#" className="border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white duration-300 px-6 py-2 rounded-full mr-3">JS</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='BLOG-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default BlogGrid
