import React from 'react'
import { Link } from 'react-router-dom'

const IconDropdown2 = ({ isOpen }) => {
    return (
        <div>
            <div className={`details-menu ${isOpen ? 'open' : ''}`}>
                <div className='absolute top-[93px] right-[200px] bg-white p-5 rounded-md shadow-md'>
                    <span className='text-xs'>QUICKLINKS</span>
                    <ul className='w-52 text-[17px] text-black'>
                        <li className='border-b py-3  hover:text-[#3577F0] duration-300'><Link to="/Account" href="">My Account</Link></li>
                        <li className='border-b py-3  hover:text-[#3577F0] duration-300'><a href="">Initiate return</a></li>
                        <li className='border-b py-3  hover:text-[#3577F0] duration-300'><a href="">Support</a></li>
                        <li className='border-b py-3  hover:text-[#3577F0] duration-300'><a href="">Language</a></li>
                    </ul>
                    <div className='relative text-center w-full py-3 mt-7 rounded-md text-white text-base font-bold z-10'>
                        <Link to="/SignIn" href="" className='
                                    before:absolute
                                    before:content-[""]
                                    before:bg-[#3577F0]
                                    before:top-0
                                    before:bottom-0
                                    before:left-0
                                    before:right-0
                                    before:hover:scale-105
                                    before:duration-300
                                    before:rounded-md
                                    before:-z-10
                                      '>Login</Link>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-xs '>No account yet? </p>
                        <Link to="/SignUp" href="" className='text-sm text-black underline underline-offset-4 font-medium hover:text-[#3577F0] duration-300'>REGISTER HERE.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconDropdown2
