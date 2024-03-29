import React from 'react'
import { Link } from 'react-router-dom'

const HomeHoverPhoto = () => {
    return (
        <>
            {/* hover photos :- 2  */}
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 gap-10'>
                    <Link to="/ShopNoSidebar">
                        <div className='relative group overflow-hidden rounded-md '>
                            <img className='group-hover:scale-110 duration-500 w-[750px] ' src="./src/assets/home/asset 45.png" alt="" />
                            <div className='absolute top-16 right-40 text-white'>
                                <h1 className=' text-[40px] font-bold leading-none mb-7'>Rich sound,<br />for less.</h1>
                                <div className='text-gray-500 group-hover:text-white duration-500'>
                                    <a href="" >Collections </a><span className='pl-2'><i class="ri-arrow-right-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ShopWithSidebar">
                        <div className='relative group overflow-hidden rounded-md '>
                            <img className='group-hover:scale-110 duration-500 w-[750px]' src="./src/assets/home/asset 46.png" alt="" />
                            <div className='absolute top-16 left-16 text-white'>
                                <div className='text-gray-400 mb-7'>
                                    <a className='group-hover:text-white duration-500' href="">50% Offer In Winter</a>
                                </div>
                                <h1 className=' text-[40px] font-bold leading-none '>Get VR<br></br>Reality Glass</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeHoverPhoto
