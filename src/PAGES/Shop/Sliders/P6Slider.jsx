import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", zIndex: 10, width: "45px", height: "45px", margin: "-11px", borderRadius: "6px", padding: "12px", opacity: 0 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", zIndex: 10, width: "45px", height: "45px", margin: "-11px", borderRadius: "6px", padding: "12px", opacity: 0 }}
            onClick={onClick}
        />
    );
}

export default class P6Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
        }

        let slider;
        const handlePrev = () => {
            slider.slickPrev();
        };

        const handleNext = () => {
            slider.slickNext();
        };
        return (
            <div className="">
                <div className="">
                    <div className=' relative'>
                        <div className='absolute top-[329px] -left-[38px] z-10 hover:scale-110 duration-300'>
                            <button onClick={handlePrev} className='text-gray-500 '><i class="ri-arrow-left-line  bg-[#F6F7FB] p-4 rounded-md"></i></button>
                        </div>
                        <div className='absolute top-[329px] -right-[38px]  z-10 hover:scale-110 duration-300'>
                            <button onClick={handleNext} className='text-gray-500'><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                        </div>

                        <Slider {...settings}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                    
                        >
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 3.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 4.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 5.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 6.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 7.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 8.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full' src="./src/assets/shop/p6/asset 2.png" alt="" />
                            </div>
                        </Slider>

                        <div className="px-24 py-10">
                            <Slider
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={6}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                arrows={false}
                            >
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 ring-2 ring-[#417EF0]' src="./src/assets/shop/p6/asset 3.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 4.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 5.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 6.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 7.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 8.png" alt="" />
                                </div>
                                <div className="my-2">
                                    <img className='rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p6/asset 2.png" alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}