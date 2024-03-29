import React from 'react'
import { Link } from 'react-router-dom'

const Speaker = ({ p1, p2 }) => {
    return (
        <>
            <div className='bg-[#F8F8F8]'>
                <div className='flex items-center justify-between h-52  container mx-auto relative z-10'>
                    <div>
                        <Link to="/" className='text-gray-500 hover:text-blue-600 mr-2' href="">Home</Link>
                        <a className=' text-gray-400' href="">|</a>
                        <a className='text-blue-600 ml-2' href="">{p1}</a>
                        <h1 className='text-4xl font-semibold text-[#292930] mt-4'>{p2}</h1>
                    </div>
                    <div>
                        <img src="./src/assets/shop/shopwithsidebar/asset 2.png" alt="" />
                        <div className='absolute h-28 w-28 bg-white rounded-full top-8 right-14 -z-10'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker
