import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import BlogProductSlider from './BlogProductSlider'


const StandardPost = () => {
    
    return (
        <>
            <div>
                <section className='BLOG-DROPDOWN' id='top-scroll'>
                    <AllTopBar />
                </section>

                <section className='BLOG-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='BLOG-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='STANDARD-POST container mx-auto pt-[100px]'>
                    <div className='BIG-IMG'>
                        <img className='w-full rounded-lg' src="./src/assets/blog/standard-post/asset 2.jpeg" alt="" />
                    </div>

                    <div className='grid grid-cols-10 gap-8 mt-[100px]'>

                        <div className='NAV-ICON col-span-1 pr-10 h-60 sticky top-28'>
                            <h1 className='text-gray-500 text-lg  text-center'>Share on:</h1>
                            <div className='text-center'>
                                <ul className='btn-hover py-5 hover:text-slate-100 text-gray-500 '>
                                    <li className='nav-icon flex justify-center items-center '><a href="#top-scroll"><i class="ri-facebook-fill text-xl "></i></a></li>
                                </ul>
                                <ul className='btn-hover py-5 hover:text-slate-100 text-gray-500'>
                                    <li className='nav-icon flex justify-center items-center'> <a href="#top-scroll"><i class="ri-instagram-line text-xl "></i></a></li>
                                </ul>
                                <ul className='btn-hover py-5 hover:text-slate-100 text-gray-500'>
                                    <li className='nav-icon flex justify-center items-center'> <a href="#top-scroll"><i class="ri-twitter-fill text-xl "></i></a></li>
                                </ul>
                                <ul className='btn-hover py-5 hover:text-slate-100 text-gray-500'>
                                    <li className='nav-icon flex justify-center items-center'> <a href="#top-scroll"><i class="ri-linkedin-fill text-xl "></i></a></li>
                                </ul>
                                <ul className='btn-hover py-5 hover:text-slate-100 text-gray-500'>
                                    <li className='nav-icon flex justify-center items-center'> <a href="#top-scroll"><i class="ri-discord-line text-xl "></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='DETAILS col-span-6'>
                            <div>
                                <h1 className='text-[#292930] text-4xl font-semibold leading-tight'>How to generate blog ideas are great for businesses that sell both B2B and D2C.</h1>
                                <div className='flex items-center mb-7 border-b py-10'>
                                    <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 3.png" alt="" />
                                    <div>
                                        <a href="#top-scroll">
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Theresa Underwood</h1>
                                        </a>
                                        <h1 className='text-sm text-gray-500'>Mar 25, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                    </div>
                                </div>
                                <div className='text-gray-500'>
                                    <p className='my-8 mt-10'>Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam taciti eros neque, aenean sit iaculis risus commodo ut sociosqu rhoncus potenti tristique placerat sit tempus, duis erat feugiat cras sociosqu porta ut praesent, fermentum donec convallis tellus vulputate duis nibh rhoncus phasellus dui massa nisl.</p>
                                    <p className='mb-8'>Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll learn will be universal to all small business email marketing.</p>
                                    <p className='mb-8'>MailChimp is an email marketing service provider founded in 2001. It has 9 million users that collectively send over 15 billion emails through the service each month.</p>
                                    <p className='mb-8'>Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources.</p>
                                    <p className='mb-8'>Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll learn will be universal to all small business email marketing.</p>
                                </div>
                                <div className='bg-[#F9F3F0] p-14 rounded-md border-l-[6px] border-[#FAB8C4] mb-10'>
                                    <p className='text-gray-500 italic mb-8 leading-8'>“Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources.”</p>
                                    <div className='flex items-center'>
                                        <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 3.png" alt="" />
                                        <div>
                                            <a href="#top-scroll">
                                                <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Theresa Underwood</h1></a>
                                            <h1 className='text-sm text-gray-500'>Mar 25, 2022 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-gray-500'>
                                    <h1 className='text-[#292930] text-4xl font-semibold mb-8'>Habitasse per feugiat aliquam luctus accumsan curae</h1>
                                    <p className='mb-8'>Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources.</p>
                                    <div className='grid grid-cols-2 gap-10 mb-8'>
                                        <img className='rounded-lg' src="../src/assets/blog/standard-post/asset 4.png" alt="" />
                                        <img className='rounded-lg' src="../src/assets/blog/standard-post/asset 5.png" alt="" />
                                    </div>
                                    <p className='mb-8'>December 03, 2020 - The Nike Air Zoom SuperRep 2 is designed for high-intensity interval training (HIIT) in group classes or solo sessions. This second version comes with two updated features for a better fit: a fully adjustable, burrito-style tongue and a roomier forefoot.</p>
                                    <p className='mb-8'>The SuperRep 2 evolves an important facet of modern fitness — training as sport — and the idea that it's deserving of footwear designed to support the performance needs specific to these movements. That’s why the shoe keeps the tech from the original SuperRep, like the forefoot Zoom Air units for pop on jumps, a reinforced rand to brace against lateral bounds and a flexible “burpee break” for everyone’s favorite total-body punisher.</p>
                                    <p className='mb-8'>The Nike Air Zoom SuperRep 2 releases December 10 in China, December 26 throughout EMEA and January 4 globally.</p>
                                    <p className='mb-8'>To download hi-res images, click here.</p>
                                </div>
                                <div>
                                    <h1 className='text-[#292930] text-2xl font-bold mb-8'>2 comments</h1>
                                    <div>
                                        <div className='flex'>
                                            <img className='w-16 h-16' src="../src/assets/blog/standard-post/asset 6.png" alt="" />
                                            <div className='ml-5'>
                                                <a href="#top-scroll">
                                                    <h1 className='text-[#292930] text-lg font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>Cameron Williamson</h1>
                                                </a>
                                                <h1 className='text-gray-400 my-3'>Nov 23, 2018 at 12:23 pm <span className='text-[4px] align-middle'> <i class="fa-solid fa-circle"></i></span><span className='font-semibold text-[#3577F0] ml-2 cursor-pointer'><a href="#top-scroll">Reply</a> </span></h1>
                                                <p className='text-gray-500 mb-10'>Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.</p>
                                            </div>
                                        </div>
                                        <div className='flex ml-20'>
                                            <img className='w-16 h-16' src="../src/assets/blog/standard-post/asset 6.png" alt="" />
                                            <div className='ml-5'>
                                                <a href="#top-scroll">
                                                    <h1 className='text-[#292930] text-lg font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>Annie Mario</h1>
                                                </a>
                                                <h1 className='text-gray-400 my-3'>Nov 23, 2018 at 12:23 pm <span className='text-[4px] align-middle'><i class="fa-solid fa-circle"></i></span><span className='font-semibold text-[#3577F0] ml-2 cursor-pointer'><a href="#top-scroll">Reply</a></span></h1>
                                                <p className='text-gray-500 mb-10'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus lacinia. Vestibulum vitae leo id diam pellentesque ornare.</p>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <img className='w-16 h-16' src="../src/assets/blog/standard-post/asset 7.png" alt="" />
                                            <div className='ml-5'>
                                                <a href="#top-scroll">
                                                    <h1 className='text-[#292930] text-lg font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>Thopmson Arnold</h1>
                                                </a>
                                                <h1 className='text-gray-400 my-3'>Nov 23, 2018 at 12:23 pm <span className='text-[4px] align-middle'><i class="fa-solid fa-circle"></i></span><span className='font-semibold text-[#3577F0] ml-2 cursor-pointer'><a href="#top-scroll">Reply</a></span></h1>
                                                <p className='text-gray-500 mb-10'>Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[#292930] text-2xl font-bold mb-8'>Leave a Reply</h1>
                                    <h1 className='text-gray-400'>Your email address will not be published.</h1>
                                    <div className='relative text-gray-500 mt-8 mb-6'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Leave a Reply</label>
                                        <textarea className='resize-none w-full border border-gray-300 rounded-md font-normal focus:outline-blue-400 
                                    px-9 py-5' cols="" rows="5"></textarea>
                                    </div>
                                    <div className='grid grid-cols-2 gap-8 mb-8'>
                                        <div className='relative text-gray-500  '>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Name<span className=' ml-1'>*</span></label>
                                            <input type="text" className='w-full  border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                        </div>
                                        <div className='relative text-gray-500 '>
                                            <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm' >Email<span className=' ml-1'>*</span></label>
                                            <input type="text" className='w-full border border-gray-300  px-10 py-5 rounded-md font-normal outline-none' />
                                        </div>
                                        <div className='mt-5'>
                                            <a href="#top-scroll" className=" relative px-12 py-5 rounded-md font-semibold  text-white bg-[#3577F0] 
                                                before:absolute 
                                                before:content-[''] 
                                                before:w-[200px] 
                                                before:rounded-md 
                                                before:left-0 
                                                before:right-0 
                                                before:top-0 
                                                before:bottom-0 
                                                before:bg-[#3577F0]  
                                                before:-z-10 
                                                before:hover:scale-110  
                                                before:duration-300
                                                ">Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='RIGHT-PART col-span-3'>
                            <div>
                                <div className='BOX-1 border p-8 rounded-md'>
                                    <h1 className='text-[#292930] text-xl font-medium mb-8'>Latest Posts</h1>
                                    <div className='flex  border-b border-gray-100 pb-5'>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='bg-cover rounded-lg h-20 w-[170px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 8.png" alt="" />
                                        </div>
                                        <div className='ml-10'>
                                            <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Dubai’s FRAME Offers its Take on the</a>
                                            <h1 className='text-sm text-gray-500 mt-3'>Mar 27, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                        </div>
                                    </div>
                                    <div className='flex  border-b border-gray-100 py-5'>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='bg-cover rounded-lg h-20 w-[188px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 9.png" alt="" />
                                        </div>
                                        <div className='ml-10'>
                                            <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Apple presents App Best of 2020 winners</a>
                                            <h1 className='text-sm text-gray-500 mt-3'>Mar 20, 2022 <span className=' border-r-2 border-gray-300 mx-4'></span>300k Views</h1>
                                        </div>
                                    </div>
                                    <div className='flex pt-5'>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='bg-cover rounded-lg h-20 w-[200px] hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 10.png" alt="" />
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
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 11.jpeg" alt="" />
                                        </div>
                                        <div className='ml-10 mt-3'>
                                            <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Men's Fashion Tshirt</a>
                                            <h1 className='text-lg font-semibold text-gray-300 mt-3'>$30 <span className='text-gray-700 ml-3'>$20</span></h1>
                                        </div>
                                    </div>
                                    <div className='flex border-b border-gray-100 py-5 '>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 12.jpeg" alt="" />
                                        </div>
                                        <div className='ml-10 mt-3'>
                                            <a className='text-[#292930] text-lg font-medium hover:text-[#3577F0] cursor-pointer duration-300 leading-3' href="">Nike Shoes</a>
                                            <h1 className='text-lg font-semibold text-gray-300 mt-3'>$200 <span className='text-gray-700 ml-3'>$150</span></h1>
                                        </div>
                                    </div>
                                    <div className='flex pt-5 '>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='bg-cover rounded-lg  hover:scale-110 duration-500 cursor-pointer' src="../src/assets/blog/standard-post/asset 13.jpeg" alt="" />
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
                                        <input className=' py-4 bg-[#F0F2F5] outline-none  caret-transparent focus:caret-black' type="text" placeholder='Search' />
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
                    </div>

                    <div>
                        <BlogProductSlider/>
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

export default StandardPost
