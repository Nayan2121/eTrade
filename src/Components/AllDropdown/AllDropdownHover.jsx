import React from 'react'
import '../AllDropdown/AllDropdownstyle.css'
import { Link } from 'react-router-dom';




// first-button :-
export const AllDropdownHover1 = () => {
  function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
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
    <div className="dropdown mr-8 z-30 ">
      <button onClick={myFunction} className="dropbtn text-sm text-gray-400 mb-2 hover:text-white cursor-pointer">English <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>
      <div id="myDropdown1" className="dropdown-content p-2 bg-white shadow-lg">
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1  hover:bg-[#FF5283] hover:text-white' href="#home">English</a>
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1  hover:bg-[#FF5283] hover:text-white' href="#about">Arabic</a>
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1  hover:bg-[#FF5283] hover:text-white' href="#contact">Spanish</a>
      </div>
    </div>
  )
}


// second-button :-
export const AllDropdownHover2 = () => {
  function myFunction() {
    document.getElementById("myDropdown2").classList.toggle("show");
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
    <div className="dropdown z-30 ">
      <button onClick={myFunction} className="dropbtn text-sm text-gray-400 mb-2 hover:text-white cursor-pointer">USD <i class="fa-solid fa-angle-down text-gray-500 text-xs"></i></button>
      <div id="myDropdown2" className="dropdown-content p-2 bg-white shadow-lg">
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1 hover:bg-[#FF5283] hover:text-white' href="#home">USD</a>
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1 hover:bg-[#FF5283] hover:text-white' href="#about">AUD</a>
        <a className='rounded-md text-gray-700 text-sm w-20 pl-2 py-1 hover:bg-[#FF5283] hover:text-white' href="#contact">EUR</a>
      </div>
    </div>
  )
}


// Rightpart :-
export const AllRightpart = () => {
  return (
    <div className='right-part'>
      <div className='list-none flex text-sm'>
        <li className='hover:text-blue-500 cursor-pointer ml-6 text-gray-400'>Help</li>
        <Link to="/SignUp" className='hover:text-blue-500 cursor-pointer ml-6 text-gray-400'>Join Us</Link>
        <Link to="/SignIn" className='hover:text-blue-500 cursor-pointer ml-6 text-gray-400'>Sign In</Link>
      </div>
    </div>
  )
}


// All Dropdown Components call
export const AllTopBar = () => {
  return (
    <>
      <div className=' py-2 bg-[#292930]' id='top-scroll'>
          <div className='flex justify-between items-center container mx-auto'>
            <div className='flex '>
              <AllDropdownHover1 />
              <AllDropdownHover2 />
            </div>
            <AllRightpart />
          </div>
      </div>
    </>
  )
}