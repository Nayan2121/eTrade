import React, { Component } from "react";
import Slider from "react-slick";


export default class P3Slider extends Component {
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
        return (
            <>
                <div className='relative z-10'>
                    <h1 className='absolute px-3 py-1 rounded-md bg-[#417EF0] font-bold text-xs text-white top-8 right-14 ' style={{ boxShadow: "0 8px 16px 0 rgba(53,119,240,.3) " }}>20% OFF</h1>
                    <div className='absolute top-[540px] right-14'>
                        <a className='h-12 w-12 flex justify-center items-center bg-white rounded-full hover:bg-[#417EF0]  duration-300 hover:text-white' href="">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-6 mr-20 h-[700px]'>
                    <div className="col-span-1">
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={5}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                            vertical={true}
                            infinite={false}
                        >
                            <div className="my-2">
                                <img className='w-[80px] rounded-md  ring-2 ring-[#417EF0]' src="./src/assets/shop/p3/asset 2.png" alt="" />
                            </div>
                            <div className="my-2">
                                <img className='w-[80px] rounded-md  hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p3/asset 3.png" alt="" />
                            </div>
                            <div className="my-2">
                                <img className='w-[80px] rounded-md  hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p3/asset 4.png" alt="" />
                            </div>
                            <div className="my-2">
                                <img className='w-[80px] rounded-md  hover:ring-2 hover:ring-[#417EF0] duration-300' src="./src/assets/shop/p3/asset 6.png" alt="" />
                            </div>
                        </Slider>
                    </div>

                    <div className="col-span-5 w-[650px]">
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            arrows={false}
                        >
                            <div>
                                <img className='rounded-lg w-full ' src="./src/assets/shop/p3/asset 2.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full ' src="./src/assets/shop/p3/asset 3.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full ' src="./src/assets/shop/p3/asset 4.png" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg w-full ' src="./src/assets/shop/p3/asset 6.png" alt="" />
                            </div>
                            
                        </Slider>
                    </div>
                </div>

            </>
        );
    }
}