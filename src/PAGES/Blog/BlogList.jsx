import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Slider from "react-slick";


const BlogList = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                    <Speaker p1="Blogs" p2="Blog List" />
                </section>

                <section className='BLOG-LIST container mx-auto py-[100px]'>
                    <div className='grid grid-cols-3 gap-12'>

                        <div className='LEFT-PART col-span-2'>
                            <div className='BOX-1 border-b border-gray-100 pb-16'>
                                <div className=' bg-[#F9F3F0] p-12 pb-16 rounded-md border-l-[6px] border-[#FAB8C4] pr-24 '>
                                    <div className='mb-7'>
                                        <Link to="/StandardPost" className='text-[#292930] text-2xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>Dubai’s Offers its Take Nike SB Dunk.</Link>
                                    </div>
                                    <div className='flex items-center mb-7'>
                                        <img className='w-12 mr-5' src="../src/assets/blog/blog-list/asset 3.png" alt="" />
                                        <div>
                                            <a href="#top-scroll"><h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Ralph Edwards</h1></a>
                                            <h1 className='text-sm text-gray-500'>Mar 27, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 9 min to read</h1>
                                        </div>
                                    </div>
                                    <p className='text-base text-gray-500 leading-7'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                    <div className='mt-14'>
                                        <Link to="/StandardPost" href="#" className=" relative px-10 py-5 z-10 rounded-md font-semibold  text-white bg-[#3577F0] 
                                 before:absolute 
                                 before:content-[''] 
                                 before:rounded-md 
                                 before:left-0 
                                 before:right-0 
                                 before:top-0 
                                 before:bottom-0 
                                 before:bg-[#3577F0]  
                                 before:-z-10 
                                 before:hover:scale-110  
                                 before:duration-300
                                ">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-2 border-b border-gray-100 py-16'>
                                <div className='mb-10 relative'>
                                    <img className='bg-cover w-full h-[450px] rounded-md' src="../src/assets/blog/blog-list/asset 4.png" alt="" />
                                </div>

                                <div>
                                    <div className='mb-7'>
                                        <Link to="/StandardPost" className='text-[#292930] text-2xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 tracking-wide inline'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan <br /> Brand</Link>
                                    </div>
                                    <div className='flex items-center mb-7'>
                                        <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                                        <div>
                                            <a href="#top-scroll"> <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Theresa Underwood</h1></a>
                                            <h1 className='text-sm text-gray-500'>Mar 25, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                        </div>
                                    </div>
                                    <p className='text-base text-gray-500 leading-7'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                    <div className='mt-14'>
                                        <Link to="/StandardPost" href="#" className=" relative px-10 py-5 z-10 rounded-md font-semibold  text-white bg-[#3577F0] 
                                            before:absolute 
                                            before:content-[''] 
                                            before:rounded-md 
                                            before:left-0 
                                            before:right-0 
                                            before:top-0 
                                            before:bottom-0 
                                            before:bg-[#3577F0]  
                                            before:-z-10 
                                            before:hover:scale-110  
                                            before:duration-300
                                            ">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-3 border-b border-gray-100 py-16'>
                                <div className=' bg-[#F9F3F0] p-12 pb-16 rounded-md border-l-[6px] border-[#FAB8C4] '>
                                    <div className='mb-7'>
                                        <Link to="/StandardPost" className='text-[#292930] text-[42px] leading-snug italic font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>“An oral history of the AIM away message (by the people who were there)”</Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                                        <div>
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Theresa Underwood</h1>
                                            <h1 className='text-sm text-gray-500'>Mar 22, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-4 border-b border-gray-100 py-16'>
                                <div className='mb-10 relative'>
                                    <img className='w-full rounded-md' src="../src/assets/blog/blog-list/asset 6.png" alt="" />
                                    <div className='absolute h-40 w-40 bg-black bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-full top-0 left-0 right-0 bottom-0 m-auto'>
                                        <a href="https://www.youtube.com/watch?v=ApXoWvfEYVU" target='_blank'><i class="fa-solid fa-play h-40 w-40 text-4xl text-white flex justify-center items-center"></i></a>
                                    </div>
                                </div>

                                <div>
                                    <div className='mb-7'>
                                        <Link to="/VideoPost" className='text-[#292930] text-2xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 tracking-wide inline'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan <br /> Brand</Link>
                                    </div>
                                    <div className='flex items-center mb-7'>
                                        <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                                        <div>
                                            <a href="#top-scroll">
                                                <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Theresa Underwood</h1>
                                            </a>
                                            <h1 className='text-sm text-gray-500'>Mar 20, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                        </div>
                                    </div>
                                    <p className='text-base text-gray-500 leading-7'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                    <div className='mt-14'>
                                        <Link to="/VideoPost" href="#" className=" relative px-10 py-5 z-10 rounded-md font-semibold  text-white bg-[#3577F0] 
                                            before:absolute 
                                            before:content-[''] 
                                            before:rounded-md 
                                            before:left-0 
                                            before:right-0 
                                            before:top-0 
                                            before:bottom-0 
                                            before:bg-[#3577F0]  
                                            before:-z-10 
                                            before:hover:scale-110  
                                            before:duration-300
                                            ">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-5 pt-16'>
                                <div className='mb-10'>
                                    <div className='relative group'>
                                        <Slider ref={(c) => (slider = c)} {...settings} >
                                            <div>
                                                <img className='rounded-lg w-full cursor-auto' src="../src/assets/blog/blog-list/asset 7.png" alt="" />
                                            </div>
                                            <div>
                                                <img className='rounded-lg w-full cursor-auto' src="../src/assets/blog/blog-list/asset 6.png" alt="" />
                                            </div>
                                        </Slider>
                                        <div className='absolute top-[50%] w-[100%]'>
                                            <button onClick={handlePrev} href="" className='left-btn absolute left-10 group-hover:left-5 duration-300 hover:scale-110'><i class="ri-arrow-left-line  bg-[#F6F7FB] p-4 rounded-md text-gray-400"></i></button>
                                            <button onClick={handleNext} href="" className='right-btn absolute right-10 group-hover:right-5 duration-300 hover:scale-110'><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md text-gray-400"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='mb-7'>
                                        <Link to="/GallaryPost" className='text-[#292930] text-2xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 tracking-wide inline'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan <br /> Brand</Link>
                                    </div>
                                    <div className='flex items-center mb-7'>
                                        <img className='bg-cover w-12 mr-5 ' src="../src/assets/blog/blog-list/asset 8.png" alt="" />
                                        <div>
                                            <a href="#top-scroll">
                                                <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Leslie Alexander</h1>
                                            </a>
                                            <h1 className='text-sm text-gray-500'>Mar 15, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                        </div>
                                    </div>
                                    <p className='text-base text-gray-500 leading-7'>The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release November 21 in Greater China. A global release follows <br /> November 24.</p>
                                    <div className='mt-14'>
                                        <Link to="/GallaryPost" href="#" className=" relative px-10 py-5 z-10 rounded-md font-semibold  text-white bg-[#3577F0] 
                                            before:absolute 
                                            before:content-[''] 
                                            before:rounded-md 
                                            before:left-0 
                                            before:right-0 
                                            before:top-0 
                                            before:bottom-0 
                                            before:bg-[#3577F0]  
                                            before:-z-10 
                                            before:hover:scale-110  
                                            before:duration-300
                                            ">Read More</Link>
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
                                        <img className='bg-cover rounded-lg h-20 w-[170px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 9.png" alt="" />
                                    </div>
                                    <div className='ml-10'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Dubai’s FRAME Offers its Take on the</a>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 27, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                                <div className='flex  border-b border-gray-100 py-5'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img className='bg-cover rounded-lg h-20 w-[188px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 10.png" alt="" />
                                    </div>
                                    <div className='ml-10'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Apple presents App Best of 2020 winners</a>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 20, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                                <div className='flex pt-5'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img className='bg-cover rounded-lg h-20 w-[200px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 11.png" alt="" />
                                    </div>
                                    <div className='ml-10'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Gallaudet University innovation in education</a>
                                        <h1 className='text-sm text-gray-500 mt-3'>Mar 15, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='BOX-2 border p-8 rounded-md mt-14'>
                                <h1 className='text-[#292930] text-xl font-medium mb-8'>Recent Viewed Products</h1>
                                <div className='flex border-b border-gray-100 pb-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 12.jpeg" alt="" />
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Men's Fashion Tshirt</a>
                                        <h1 className='text-lg font-semibold text-gray-300 mt-3'>$30 <span className='text-gray-700 ml-3'>$20</span></h1>
                                    </div>
                                </div>
                                <div className='flex border-b border-gray-100 py-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 13.jpeg" alt="" />
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Nike Shoes</a>
                                        <h1 className='text-lg font-semibold text-gray-300 mt-3'>$200 <span className='text-gray-700 ml-3'>$150</span></h1>
                                    </div>
                                </div>
                                <div className='flex pt-5 '>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/blog-list/asset 14.jpeg" alt="" />
                                    </div>
                                    <div className='ml-10 mt-3'>
                                        <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Addidas Shoes</a>
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

export default BlogList
