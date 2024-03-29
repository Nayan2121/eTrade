import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

const BlogProductSlider = () => {
    let slider;
    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
    };

    const handlePrev = () => {
        slider.slickPrev();
    };

    const handleNext = () => {
        slider.slickNext();
    };
    return (
        <>
            <div>
                <div className='mt-20'>
                    <div className='flex mb-3'>
                        <i className="ri-notification-2-line h-6 w-6 text-sm border bg-[#8C71DB] text-white rounded-full flex items-center justify-center"></i>
                        <h1 className='text-[#8C71DB] font-bold text-sm flex items-center ml-2'>Hot News</h1>
                    </div>
                    <div className='flex justify-between items-center mb-10'>
                        <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Related Blog</h1>
                        <div className='text-gray-400'>
                            <div className='hover:scale-110 duration-300 inline-block'>
                                <button onClick={handlePrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                            </div>
                            <div className='hover:scale-110 duration-300 inline-block '>
                                <button onClick={handleNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Slider ref={(c) => (slider = c)} {...settings}>
                            <div>
                                <Link to="/StandardPost">
                                    <img className='w-full rounded-lg mb-10' src="../src/assets/blog/standard-post/asset 18.png" alt="" />
                                </Link>
                                <Link to="/StandardPost">
                                    <h1 className='text-[#292930] text-xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>With an Irreverent Twist, AMBUSH® Highlights Converse's Outdoor Heritage</h1>
                                </Link>
                                <div className='flex items-center mb-7  py-10'>
                                    <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 3.png" alt="" />
                                    <div>
                                        <a href="#top-scroll">
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Leslie Alexander</h1>
                                        </a>
                                        <h1 className='text-sm text-gray-500'>Fab 17, 2019 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to="/StandardPost">
                                    <img className='w-full rounded-lg mb-10' src="../src/assets/blog/standard-post/asset 14.png" alt="" />
                                </Link>
                                <Link to="/StandardPost">
                                    <h1 className='text-[#292930] text-xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan Brand</h1>
                                </Link>
                                <div className='flex items-center mb-7  py-10'>
                                    <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 15.png" alt="" />
                                    <div>
                                        <a href="#top-scroll">
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Julian Vinn</h1>
                                        </a>
                                        <h1 className='text-sm text-gray-500'>Mar 28, 2020 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to="/StandardPost">
                                    <img className='w-full rounded-lg mb-10' src="../src/assets/blog/standard-post/asset 16.png" alt="" />
                                </Link>
                                <Link to="/StandardPost">
                                    <h1 className='text-[#292930] text-xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>An oral history of the AIM away message by the people who were there</h1>
                                </Link>
                                <div className='flex items-center mb-7  py-10'>
                                    <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 17.png" alt="" />
                                    <div>
                                        <a href="#top-scroll">
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Ariana Grande</h1>
                                        </a>
                                        <h1 className='text-sm text-gray-500'>Apr 20, 2021 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to="/StandardPost">
                                    <img className='w-full rounded-lg mb-10' src="../src/assets/blog/standard-post/asset 14.png" alt="" />
                                </Link>
                                <Link to="/StandardPost">
                                    <h1 className='text-[#292930] text-xl font-semibold hover:text-[#3577F0] cursor-pointer duration-300 inline'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan Brand</h1>
                                </Link>
                                <div className='flex items-center mb-7  py-10'>
                                    <img className='bg-cover w-12 mr-5 rounded-full' src="../src/assets/blog/standard-post/asset 15.png" alt="" />
                                    <div>
                                        <a href="#top-scroll">
                                            <h1 className='text-[#292930] text-base font-semibold hover:text-[#3577F0] cursor-pointer duration-300 leading-8 inline'>Julian Vinn</h1>
                                        </a>
                                        <h1 className='text-sm text-gray-500'>Mar 28, 2020 <span className=' border-r-2 border-gray-300 mx-2'></span> 300k Views</h1>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogProductSlider
