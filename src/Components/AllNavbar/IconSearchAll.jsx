import React from 'react'
import { Link } from 'react-router-dom'

const IconSearchAll = ({ isOpen, onClose }) => {
    return (
        <div>
            <div className={`popup ${isOpen ? 'open' : ''}`}>

                <div className="absolute right-36 top-[130px]" onClick={onClose}>
                    <div className='flex justify-center items-center h-10 w-10 bg-[#F6F7FB] rounded-full cursor-pointer hover:bg-[#3577F0] hover:text-white duration-300'>
                        <i class="fa-solid fa-xmark text-base"></i>
                    </div>
                </div>
                <div
                    className={`fixed inset-0 -z-50 bg-black bg-opacity-60 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={onClose}>
                </div>


                <div className='relative'>
                    <div className='absolute -left-[1050px] top-[130px] p-10 rounded-lg bg-white w-[850px]'>
                        <div className='border py-3 rounded-md'>
                            <i class="ri-search-line mx-3 text-lg"></i>
                            <input className='placeholder:text-black outline-none text-base' type="text" placeholder="Write Somthing...." />
                        </div>
                        <div className='flex justify-between text-sm text-black my-5 border-b border-gray-100 pb-4'>
                            <p>24 Result Found</p>
                            <div className='relative group'>
                                <ul>
                                    <li className='before:absolute
                                 hover:text-gray-900 
                                 duration-300
                                 before:content-[""]
                                 before:w-0
                                 before:h-0.5
                                 before:bg-gray-900
                                 before:duration-500
                                 before:-bottom-0  
                                 before:opacity-0
                                 before:group-hover:w-[50px]
                                 before:right-[1px]
                                 before:group-hover:left-0
                                 before:group-hover:opacity-100
                                 '>
                                        <a href='#'>View All</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex   '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1"><img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</Link>
                                        </div>
                                        <p className='text-xl font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s] mt-8'>
                                <div className='flex  '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1"><img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</Link>
                                        </div>
                                        <p className='text-xl font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconSearchAll
