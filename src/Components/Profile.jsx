import React from 'react'
import '../Components/HomeNavbar/HomeNavstyle.css'
import '../Components/AllDropdown/AllDropdownstyle.css'
import { Link } from 'react-router-dom';

const Profile = () => {
    function myFunction() {
        document.getElementById("myDropdown15").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <div className='dropdown m-10'>
            <a onClick={myFunction} className='dropbtn rounded-full p-3 '><i class="ri-user-3-line"></i>
                <div id='myDropdown15' className='dropdown-content right-3 shadow-md '>
                    <div className='border p-5 rounded-md w-64 bg-white mt-5 '>
                        <div className='text-gray-400 text-[12px]'>
                            QUICKLINKS
                        </div>
                        <div >
                            <div>
                                <Link to="/Account" href="" className='text-base border-b py-3 text-black hover:text-blue-500'>My Account</Link>
                            </div>
                            <div>
                                <a href="" className='text-base border-b py-3 text-black hover:text-blue-500'>Initiate return</a>
                            </div>
                            <div>
                                <a href="" className='text-base border-b py-3 text-black hover:text-blue-500'>Support</a>
                            </div>
                            <div>
                                <a href="" className='text-base border-b py-3 text-black hover:text-blue-500'>Language</a>
                            </div>
                            <div className='relative text-center w-full py-3 rounded-md text-white font-bold z-10 mt-6 text-base'>
                                <a href="" className='
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
                                        '>Login</a>
                            </div>
                            <div className='text-[12px] flex mt-3'>
                                <p className='text-gray-400'>No account yet?</p>
                                <Link to="/SignUp" className='ml-2 ' href=""><span className='underline decoration-slate-400  decoration-2 text-black underline-offset-4 font-semibold hover:text-blue-500 hover:decoration-blue-500'>REGISTER HERE</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Profile
