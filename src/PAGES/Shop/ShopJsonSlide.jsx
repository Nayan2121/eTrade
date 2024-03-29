import React, { useEffect } from 'react'
import dataJson from '../../Data.json'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/ProductAction';
import { addToCart, wishlistAdd } from '../../redux/action';

const ShopJsonSlide = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
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
                <div className='pt-24 pb-7'>
                    <div className='container mx-auto'>
                        <div className="flex justify-between mb-5">
                            <div className='mb-10'>
                                <p className="text-[#8C71DB] font-medium mb-2"><i class="ri-shopping-basket-2-line bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>Your Recentls</p>
                                <h1 className="font-bold text-4xl text-[#292930]  tracking-wide">Viewed Items</h1>
                            </div>
                            <div className='text-gray-400 pt-10'>
                                <div className='hover:scale-110 duration-300 inline-block'>
                                    <button onClick={handlePrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                                <div className='hover:scale-110 duration-300 inline-block '>
                                    <button onClick={handleNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <Slider ref={(c) => (slider = c)} {...settings}>
                                {
                                    data.slice(0, 8).map((item => {
                                        return (
                                            <>
                                                <div key={item.id}>
                                                    <div className='group mb-10'>
                                                        <div className='relative overflow-hidden rounded-[35px]'>
                                                            <div>
                                                                <div>
                                                                    <img className='w-96 h-96 object-cover group-hover:scale-110 duration-200' src={item.image} alt="" />
                                                                </div>

                                                                <h1 className='absolute px-2 py- rounded-[4px] bg-[#417EF0] font-semibold text-sm text-white top-6 right-7 ' style={{ boxShadow: "0 8px 16px 0 rgba(53,119,240,.3) " }}>{item.offer}</h1>

                                                                <div className=' absolute left-12 -bottom-3 group-hover:bottom-10 duration-700 opacity-0 group-hover:opacity-100'>
                                                                    <div className='flex justify-center'>
                                                                        <div className='flex items-center'>

                                                                            <div onClick={() => dispatch(wishlistAdd(item))} className='hover:scale-110 duration-300 inline-block'>
                                                                                <div><i class="fa-regular fa-heart  bg-white p-3 rounded-[4px]"></i></div>
                                                                            </div>

                                                                            <div className='mx-4' onClick={() => dispatch(addToCart(item))}>
                                                                                <div to="/Cart" className=" px-7 py-3 z-10 bg-[#ff497c] text-white font-bold rounded-[4px] relative 
                                                                                before:absolute
                                                                                before:contetn-['']
                                                                                before:px-10
                                                                                before:py-5
                                                                                before:bg-[#ff497c] 
                                                                                before:left-0
                                                                                before:top-0
                                                                                before:right-0
                                                                                before:bottom-0
                                                                                before:rounded-[4px]
                                                                                before:-z-10
                                                                                before:hover:scale-110
                                                                                before:duration-300">
                                                                                    Add to Cart</div>
                                                                            </div>

                                                                            <div className='hover:scale-110 duration-300 inline-block '>
                                                                                <div className=''><i class="fa-regular fa-eye bg-white p-3 rounded-[4px]"></i></div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className=''>
                                                            <div className='mt-5'>
                                                                <a className='text-gray-500 font-semibold tracking-wider hover:text-[#3577F0] duration-300 cursor-pointer'>{item.name}</a>
                                                            </div>
                                                            <div className='flex text-xl font-bold mt-2'>
                                                                <h1 className='text-[#292930] mr-3'>${item.newprice}</h1>
                                                                <del className='text-gray-300'>${item.oldprice}</del>
                                                            </div>
                                                            <div>
                                                                <ul className='flex items-center mt-5'>
                                                                    <li className='bg-[#AAE6F8] h-3 w-3 mr-2 rounded-full outline outline-2 outline-offset-4 outline-[#AAE6F8] cursor-pointer'></li>
                                                                    <li className='bg-[#5F8AF7] h-3 w-3 mx-2 rounded-full cursor-pointer'></li>
                                                                    <li className='bg-[#59C3C0] h-3 w-3 mx-2 rounded-full cursor-pointer'></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }))
                                }
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopJsonSlide
