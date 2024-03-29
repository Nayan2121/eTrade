import React, { useReducer } from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import ShopJsonSlide from './ShopJsonSlide'
import P2Slider from './Sliders/P2Slide'


const ProductV2 = () => {
    
    const initialState = {
        firstCounter: 1,
    }
    const reducer = (state, action) => {
        switch (action.type) {

            case 'inc1':
                return { ...state, firstCounter: state.firstCounter + action.value }
            case 'dec1':
                return { ...state, firstCounter: state.firstCounter - action.value }

            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='IMAGES-AND-DISCRIPTION  bg-[#F9F3F0] '>
                    <div className='grid grid-cols-2 gap-10 pt-[80px] container mx-auto'>

                        <div>
                            <P2Slider />
                        </div>

                        <div className='main-div-details'>
                            <h1 className='font-bold text-4xl text-[#292930] tracking-wide mb-8'>Squre Cateye Sunglasses</h1>
                            <h1 className='font-semibold text-2xl text-[#292930] mb-5'>$155.00 - $255.00</h1>
                            <div className='flex border-b-2 border-gray-200'>
                                <span className='text-[#FFA800]'>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-line"></i>
                                </span>
                                <p className='text-gray-500 hover:text-[#292930] duration-500 ml-2 pb-5 '>(2 customer reviews)</p>
                            </div>
                            <ul className='text-[#417EF0] text-lg pt-5 mb-7'>
                                <li><i class="ri-check-line mr-3"></i>In stock</li>
                                <li><i class="ri-check-line mr-3"></i>Free delivery available</li>
                                <li><i class="ri-check-line mr-3"></i>Sales 30% Off Use Code: MOTIVE30</li>
                            </ul>
                            <p className='text-gray-500 mb-10'>In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, hendrerit in rutrum quis, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.</p>
                            <div>
                                <div className='flex items-center mb-5'>
                                    <h1 className='mr-12 font-semibold text-xl text-[#292930]'>Colors:</h1>
                                    <ul className='flex items-center'>
                                        <li className='bg-[#AAE6F8] h-3 w-3 mx-2 rounded-full outline outline-2 outline-offset-4 outline-[#AAE6F8]'></li>
                                        <li className='bg-[#5F8AF7] h-3 w-3 mx-2 rounded-full'></li>
                                        <li className='bg-[#59C3C0] h-3 w-3 mx-2 rounded-full'></li>
                                    </ul>
                                </div>
                                <div className='flex items-center mb-10'>
                                    <h1 className='mr-16 font-semibold text-xl text-[#292930]'>Size:</h1>
                                    <ul className='flex items-center'>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>XS</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>S</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>M</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>L</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>XL</li>
                                    </ul>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center '>
                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => {
                                            if (count.firstCounter > 0) {
                                                dispatch({ type: 'dec1', value: 1 });
                                            }
                                        }}>
                                            <i class="fa-solid fa-minus text-xs"></i>
                                        </button>

                                        <h1 className='font-semibold text-lg w-14 text-center'>{count.firstCounter}</h1>

                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch({ type: 'inc1', value: 1 })}>
                                            <i class="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='mx-5'>
                                            <Link to="/Cart" href="#" className='relative z-10 font-bold bg-[#3577F0] text-white px-32 py-5 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-32
                                                before:py-5
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '>Add to Cart</Link>
                                        </div>

                                        <div className='flex mx-5'>
                                            <Link to="/Wishlist" href="#" className='relative z-10 px-1 py-3 border-2 rounded-md
                                                before:absolute 
                                                before:h-[100%]
                                                before:w-[100%]
                                                before:rounded-md
                                                before:bg-[#3577F0]
                                                before:scale-0 
                                                before:-z-10
                                                   before:hover:scale-105
                                                before:duration-300
                                                before:top-0
                                                before:bottom-0
                                                before:left-0
                                                before:right-0
                                                '>
                                                <i class="ri-heart-line text-2xl px-4 py-4  text-gray-600 hover:border-none hover:text-white duration-300"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-14'>
                                    <h1 className='text-[#3577F0] font-bold text-2xl tracking-wide mb-12'>Description</h1>
                                    <div>
                                        <h1 className='font-bold text-xl text-[#292930] mb-5'>Specifications:</h1>
                                        <p className='text-gray-500 mb-8'>We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl text-[#292930] mb-5'>Care & Maintenance:</h1>
                                        <p className='text-gray-500 mb-10'>Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='mr-10'>
                                        <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                                            <img className='h-8' src="./src/assets/shop/p2/asset 12.png" alt="" />
                                        </div>
                                        <h1 className='font-semibold text-xl text-[#292930]'>Easy Returns</h1>
                                    </div>
                                    <div className='mr-10'>
                                        <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                                            <img className='h-8' src="./src/assets/shop/p2/asset 13.png" alt="" />
                                        </div>
                                        <h1 className='font-semibold text-xl text-[#292930]'>Quality Service</h1>
                                    </div>
                                    <div>
                                        <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                                            <img className='h-8' src="./src/assets/shop/p2/asset 14.png" alt="" />
                                        </div>
                                        <h1 className='font-semibold text-xl text-[#292930]'>Original Product</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='JSONDATA'>
                    <ShopJsonSlide />
                </section>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ProductV2
