import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <>
            <div className='photo-section '>
                <div className=' flex items-center justify-between  px-[100px] py-[40px] '>
                    <Link to="/">
                        <img src="../src/assets/pages/sign up/asset 0.png" alt="" />
                    </Link>
                    <span className='w-72 '>
                        <Link to="/ForgotPassword" class="ri-arrow-left-s-line border p-3 text-lg rounded-md hover:bg-[#3577F0] hover:text-white hover:duration-300 hover:border-none"></Link>
                    </span>
                    <div className='flex items-center text-[#292930] font-medium text-sm'>
                        <p>Already a member?</p>
                        <Link to="/SignIn" href="#" className="hover:text-[#3577F0]">Sign In</Link>
                    </div>
                </div>

                <div className='absolute top-0 -z-10'>
                    <img className='h-screen' src="../src/assets/pages/sign up/asset 1.jpeg" alt="" />
                    <div className='absolute top-20  pl-[100px]'>
                        <p className='text-[#292930] font-bold text-4xl mt-32'>We Offer the Best<br /> Products</p>
                    </div>
                </div>
            </div>


            {/* form-section  */}
            <div className='ml-[50%] mt-24 pl-5'>
                <form>
                    <h1 className='text-[#292930] font-semibold text-3xl'>Reset Password</h1>

                    <div className='relative text-gray-500  mt-5'>
                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>New Password</label>
                        <input type="password" placeholder='*********' className='border border-gray-300 w-[400px] px-9 py-5 rounded-md font-normal focus:outline-blue-400' />
                    </div>

                    <div className='relative text-gray-500  mt-8'>
                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Confirm Password</label>
                        <input type="password" placeholder='*********' className='border border-gray-300 w-[400px] px-9 py-5 rounded-md font-normal focus:outline-blue-400' />
                    </div>


                    <div className='mt-14'>
                        <a href="#" className=" relative px-12 py-5 rounded-md font-semibold  text-white bg-[#3577F0]
                        before:absolute 
                        before:content-[''] 
                        before:w-[208px] 
                        before:rounded-md 
                        before:left-0 
                        before:right-0 
                        before:top-0 
                        before:bottom-0 
                        before:bg-[#3577F0]  
                        before:-z-10 
                        before:hover:scale-110  
                        before:duration-300
                         ">Reset Password</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ResetPassword
