import React from 'react'
import { Fade } from 'react-reveal';
import Slider from 'react-slick'

const Categories = () => {

    const settings = {
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        arrows: false
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
            <div className='mb-[200px]'>
                <div className='flex mb-3'>
                    <i className="ri-price-tag-3-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                    <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Categories</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Browse by Category</h1>
                    <div className='text-gray-400'>
                        <div className='hover:scale-110 duration-300 inline-block'>
                            <button onClick={handlePrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                        </div>
                        <div className='hover:scale-110 duration-300 inline-block '>
                            <button onClick={handleNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                        </div>
                    </div>
                </div>

                <Fade clear>
                    <div className='mt-10'>
                        <Slider ref={(c) => (slider = c)} {...settings}>
                            <div href='#top-scroll' className=" border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer ">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 15.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Phones</p>
                            </div>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 16.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Computers</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 17.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Accessories</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 18.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Laptops</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 19.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Monitors</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 10.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Networking</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                </div>
                                <p className='text-gray-800'>PC Gaming</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Smartwatches</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 13.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Headphones</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 14.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Camera & Photo</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Video Games</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Sports</p>
                            </a>
                        </Slider>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default Categories
