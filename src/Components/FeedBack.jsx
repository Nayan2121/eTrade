import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedBack = () => {
    

    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
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
            <div className='feed-slide'>
                <div className='bg-[#F9F3F0] py-24 '>
                    <div className='container mx-auto'>
                        <div className="flex justify-between mb-6">
                            <div className='mb-10'>
                                <p className="text-[#FF497C] font-medium mb-2"><i class="ri-double-quotes-l bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Testimonials</p>
                                <h1 className="font-bold text-4xl text-[#292930]  tracking-wide">Users Feedback</h1>
                            </div>
                            <div className='text-gray-400 mt-8'>
                                <div className='hover:scale-110 duration-300 inline-block'>
                                    <button onClick={handlePrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                                <div className='hover:scale-110 duration-300 inline-block '>
                                    <button onClick={handleNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <h1 className='absolute z-10 bg-[#F9F3F0] h-96 w-12'></h1>
                            <h1 className='absolute right-0 z-10 bg-[#F9F3F0] h-96 w-12'></h1>
                        </div>


                        <Slider ref={(c) => (slider = c)} {...settings} >
                            <div className=''>
                                <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg relative'>
                                    <div className='absolute -bottom-[30px] left-[100px] border-t-[25px] border-t-transparent border-l-[75px] border-l-white border-b-[50px] border-b-transparent'>
                                    </div>
                                    <p>“ It’s amazing how much easier it has been to
                                        meet new people and create instantly non
                                        connections. I have the exact same personal
                                        the only thing that has changed is my mind
                                        set and a few behaviors. “</p>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <img src="./src/assets/home/asset 31.png" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-gray-500'>Head Of Idea</h1>
                                        <h1 className='font-semibold text-lg text-[#292930] tracking-wide'>James C. Anderson</h1>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg relative'>
                                    <div className='absolute -bottom-[30px] left-[100px] border-t-[25px] border-t-transparent border-l-[75px] border-l-white border-b-[50px] border-b-transparent'>
                                    </div>
                                    <p>“ It’s amazing how much easier it has been to
                                        meet new people and create instantly non
                                        connections. I have the exact same personal
                                        the only thing that has changed is my mind
                                        set and a few behaviors. “</p>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <img src="./src/assets/home/asset 29.png" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-gray-500'>Head Of Idea</h1>
                                        <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg relative'>
                                    <div className='absolute -bottom-[30px] left-[100px] border-t-[25px] border-t-transparent border-l-[75px] border-l-white border-b-[50px] border-b-transparent'>
                                    </div>
                                    <p>“ It’s amazing how much easier it has been to
                                        meet new people and create instantly non
                                        connections. I have the exact same personal
                                        the only thing that has changed is my mind
                                        set and a few behaviors. “</p>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <img src="./src/assets/home/asset 30.png" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-gray-500'>Head Of Idea</h1>
                                        <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg relative'>
                                    <div className='absolute -bottom-[30px] left-[100px] border-t-[25px] border-t-transparent border-l-[75px] border-l-white border-b-[50px] border-b-transparent'>
                                    </div>
                                    <p>“ It’s amazing how much easier it has been to
                                        meet new people and create instantly non
                                        connections. I have the exact same personal
                                        the only thing that has changed is my mind
                                        set and a few behaviors. “</p>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <img src="./src/assets/home/asset 29.png" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-gray-500'>Head Of Idea</h1>
                                        <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
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

export default FeedBack
