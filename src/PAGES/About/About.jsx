import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    let slider;
    const settings = {  
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                <section className='ABOUT-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='ABOUT-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='ABOUT-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='ABOUT-SPEAKER'>
                    <Speaker p1="About Us" p2="About Our Store" />
                </section>

                <section className='ABOUT-SECTION'>
                    <div className='container mx-auto'>
                        <div className='About-Store flex items-center mt-[100px] mb-[250px]'>
                            <div>
                                <img src="../src/assets/about/asset 3.png" alt="" />
                            </div>
                            <div className='ml-[80px] w-[60%]'>
                                <div className='flex mb-2'>
                                    <i class="ri-shopping-basket-2-line h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
                                    <h1 className='flex items-center text-[#3577F0] text-sm font-bold ml-2'>About Store</h1>
                                </div>
                                <div>
                                    <h1 className='text-3xl font-bold text-[#27272E] mb-8'>Online shopping includes both buying things online.</h1>
                                    <p className='text-gray-500 text-xl leading-9 mb-8'>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
                                </div>
                                <div className='text-gray-500 grid grid-cols-2 gap-7  text-sm '>
                                    <p>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
                                    <p>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p>
                                </div>
                            </div>
                        </div>

                        <div className='3-BOX absolute top-[1100px] pr-48'>
                            <div className='grid grid-cols-3 gap-7'>
                                <div className='py-[50px] px-[65px] bg-white rounded-md  hover:outline outline-1 hover:outline-[#3577F0] shadow-lg hover:shadow-none  '>
                                    <img className='mb-5 ' src="../src/assets/about/asset 4.png" alt="" />
                                    <h1 className=' mb-3 text-lg text-[#27272E] font-bold'>40,000+ Happy Customer</h1>
                                    <p className='text-gray-500 text-sm leading-6'>Empower your sales teams with industry tailored solutions that support.</p>
                                </div>
                                <div className='py-[50px] px-[65px] bg-white rounded-md hover:outline outline-1 hover:outline-[#3577F0] shadow-lg hover:shadow-none  '>
                                    <img className='mb-5' src="../src/assets/about/asset 5.png" alt="" />
                                    <h1 className=' mb-3 text-lg text-[#27272E] font-bold'>16 Years of Experiences</h1>
                                    <p className='text-gray-500 text-sm leading-6'>Empower your sales teams with industry tailored solutions that support.</p>
                                </div>
                                <div className='py-[50px] px-[65px] bg-white rounded-md hover:outline outline-1 hover:outline-[#3577F0] shadow-lg hover:shadow-none  '>
                                    <img className='mb-5' src="../src/assets/about/asset 6.png" alt="" />
                                    <h1 className=' mb-3 text-lg text-[#27272E] font-bold'>12 Awards Won</h1>
                                    <p className='text-gray-500 text-sm leading-6'>Empower your sales teams with industry tailored solutions that support.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='OUR-TEAM bg-[#F6F6F6]'>
                        <div className='container mx-auto'>
                            <div className='pt-[200px]'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex mb-2'>
                                        <i class="ri-team-fill h-6 w-6 text-base border bg-[#8C71DB] text-white rounded-full flex items-center justify-center"></i>
                                        <h1 className='flex items-center text-[#8C71DB] text-sm font-bold ml-2'>Our Team</h1>
                                    </div>
                                    <div className='flex'>
                                        <div className='hover:scale-110 duration-300 mr-2'>
                                            <button onClick={handlePrev} href="" className='text-gray-500 '><i class="ri-arrow-left-line  bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                        </div>
                                        <div className='hover:scale-110 duration-300'>
                                            <button onClick={handleNext} href="" className='text-gray-500'><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-3xl font-semibold text-[#27272E] mb-10'>Expart Management Team</h1>
                                </div>
                            </div>

                            <div>
                                <Slider ref={(c) => (slider = c)} {...settings}>
                                    <div>
                                        <div className='rounded-md overflow-hidden max-w-[330px]'>
                                            <img className='bg-cover hover:scale-110 duration-300' src="../src/assets/about/asset 10.png" alt="" />
                                        </div>
                                        <h1 className='text-gray-500 mt-5'>Founder1</h1>
                                        <p className='text-lg text-[#27272E] font-bold mb-16'>Rosalina D. Willson</p>
                                    </div>
                                    <div>
                                        <div className='rounded-md overflow-hidden max-w-[330px]'>
                                            <img className='bg-cover hover:scale-110 duration-300' src="../src/assets/about/asset 7.png" alt="" />
                                        </div>
                                        <h1 className='text-gray-500 mt-5'>CEO2</h1>
                                        <p className='text-lg text-[#27272E] font-bold mb-16'>Ukolilix X. Xilanorix</p>
                                    </div>
                                    <div>
                                        <div className='rounded-md overflow-hidden max-w-[330px]'>
                                            <img className='bg-cover hover:scale-110 duration-300 ' src="../src/assets/about/asset 8.png" alt="" />
                                        </div>
                                        <h1 className='text-gray-500 mt-5'>Designer3</h1>
                                        <p className='text-lg text-[#27272E] font-bold mb-16'>Alonso M. Miklonax</p>
                                    </div>
                                    <div>
                                        <div className='rounded-md overflow-hidden max-w-[330px]'>
                                            <img className='bg-cover hover:scale-110 duration-300 ' src="../src/assets/about/asset 9.png" alt="" />
                                        </div>
                                        <h1 className='text-gray-500 mt-5'>Designer4</h1>
                                        <p className='text-lg text-[#27272E] font-bold mb-16'>Alonso M. Miklonax</p>
                                    </div>
                                    <div>
                                        <div className='rounded-md overflow-hidden max-w-[330px]'>
                                            <img className='bg-cover hover:scale-110 duration-300 ' src="../src/assets/about/asset 7.png" alt="" />
                                        </div>
                                        <h1 className='text-gray-500 mt-5'>Designer5</h1>
                                        <p className='text-lg text-[#27272E] font-bold mb-16'>Alonso M. Miklonax</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className='SOLUTIONS'>
                        <div className='container mx-auto'>
                            <div className=' flex items-center mt-[100px] '>
                                <div className=' w-[100%] flex justify-start'>
                                    <img className='rounded-lg w-[85%]' src="../src/assets/about/asset 11.png" alt="" />
                                </div>
                                <div className=''>
                                    <h1 className='text-gray-500 text-sm mb-2'>Features #01</h1>
                                    <h1 className='text-4xl font-bold text-[#27272E] mb-6'>Solutions that work together</h1>
                                    <p className='text-gray-500 text-sm leading-6'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <Link to="/Contact">
                                        <button className="border px-11 py-5 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">Get In Touch</button>
                                    </Link>
                                </div>
                            </div>

                            <div className=' flex items-center my-[100px]'>
                                <div className=''>
                                    <h1 className='text-gray-500 text-sm mb-2'>Features #01</h1>
                                    <h1 className='text-4xl font-bold text-[#27272E] mb-6'>Solutions that work together</h1>
                                    <p className='text-gray-500 text-sm leading-6'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <Link to="/Contact">
                                        <button className="border px-11 py-5 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">Get In Touch</button>
                                    </Link>
                                </div>
                                <div className='w-[100%] flex justify-end'>
                                    <img className='rounded-lg w-[85%]' src="../src/assets/about/asset 12.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='ABOUT-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default About
