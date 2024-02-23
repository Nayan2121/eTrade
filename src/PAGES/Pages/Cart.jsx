import React, { useState } from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeFromCart } from '../../redux/action'


const Cart = () => {

    const dispatch = useDispatch();

    const cartData = useSelector((state) => state.cartData);

    let amount = cartData.length && cartData.map((item) => item.rate).reduce((prev, next) => prev + next);
    let Total = amount + 8;

    const [selectRadio, setselectradio] = useState("Free Shippping");


    return (
        <>
            <div>
                <section className='PAGES-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='PAGES-NAVBAR sticky top-0 z-20'>
                    <AllNavBar />
                </section>

                <section className='PAGES-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='TABLE-LIST'>
                    <div className='container mx-auto my-[100px] '>
                        <div className='flex justify-between'>
                            <h1 className="text-2xl font-semibold text-[#292930]">
                                Your Cart
                            </h1>
                            <h1 onClick={() => dispatch(emptyCart())} className="text-sm  text-[#3577F0] cursor-pointer">
                                Clear Shoping Cart
                            </h1>
                        </div>

                        <div>
                            <div className="py-5 flex justify-around items-center bg-[#F6F7FB] text-[#292930] rounded-md mt-5">
                                <h1 className="text-xl font-semibold ">Product</h1>
                                <h1 className="text-xl font-semibold ml-56">Price</h1>
                                <h1 className="text-xl font-semibold mr-50">Quantity</h1>
                                <h1 className="text-xl font-semibold -mr-20">Subtotal</h1>
                            </div>

                            <div className='w-full overflow-auto h-[300px] px-5 '>
                                {
                                    cartData.map((item => {
                                        return (
                                            <>
                                                <div key={item.id}>
                                                    <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                                        <div className='flex items-center '>
                                                            <div onClick={() => dispatch(removeFromCart(item.id))} className=' flex justify-center items-center h-8 w-8 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  duration-300 ml-4'>
                                                                <i class="fa-solid fa-xmark text-xs"></i>
                                                            </div>
                                                            <Link to="/ProductV1">
                                                                <img className="h-20 w-20 ml-20 cursor-pointer" src={item.image}></img>
                                                            </Link>
                                                        </div>
                                                        <Link to="/ProductV1" className="text-xl w-80 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer -ml-36 duration-300 ">
                                                            {item.name}
                                                        </Link>
                                                        <div className='relative'>
                                                            <p className="w-28 absolute -right-3 -top-4 text-gray-500 font-semibold text-xl"><span>$</span>{item.newprice}</p>
                                                        </div>

                                                        <div className='flex items-center mr-44'>
                                                            <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => dispatch(decrementQuantity(item.id))}>
                                                                <i class="fa-solid fa-minus text-xs"></i>
                                                            </button>

                                                            <h1 className='font-semibold text-lg w-14 text-center'>{item.quantity}</h1>

                                                            <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch(incrementQuantity(item.id))}>
                                                                <i class="fa-solid fa-plus text-xs"></i>
                                                            </button>
                                                        </div>

                                                        <div className='relative'>
                                                            <p className="w-28 absolute right-5 -top-4 text-gray-500 font-semibold text-xl ">${item.rate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }))
                                }
                            </div>
                        </div>

                        <div className='grid grid-cols-2 pt-10 gap-10'>
                            <div className='flex items-end '>
                                <div className='border-b-2 border-gray-100 pb-5 w-[100%]'>
                                    <input className='w-[100%] placeholder:text-sm placeholder:text-gray-500' type="text" placeholder='Enter coupon code' />
                                </div>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  ml-5 hover:text-white hover:bg-[#3577F0] duration-300">
                                    Apply
                                </button>
                            </div>
                            <div className='text-end '>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  hover:text-white hover:bg-[#3577F0] duration-300">
                                    Upadate Cart
                                </button>
                            </div>
                        </div>

                        <div className='FROM mt-[80px] text-[#292930] flex justify-end '>
                            <div className='bg-[#F9F3F0] rounded-md p-8 w-[35%]'>
                                <h1 className='text-xl font-semibold mb-8'>Order Summary</h1>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4 '>
                                    <h1 className='w-56'>Subtotal</h1>
                                    <span>${amount}</span>
                                </div>
                                <div className='flex text-base mb-5 border-b-2 pb-4'>
                                    <h1 className='font-semibold w-56'>Shipping</h1>
                                    <div>
                                        <ul className='leading-7'>
                                            <li><input type="radio" checked={selectRadio === "Free Shippping"} onChange={() => setselectradio("Free Shippping")} />
                                                <label className='ml-2'>Free Shippping</label>
                                            </li>
                                            <li><input type="radio" checked={selectRadio === "Local: $35.00"} onChange={() => setselectradio("Local: $35.00")} />
                                                <label className='ml-2'>Local: $35.00</label>
                                            </li>
                                            <li><input type="radio" checked={selectRadio === "Flat rate: $12.00"} onChange={() => setselectradio("Flat rate: $12.00")} />
                                                <label className='ml-2'>Flat rate: $12.00</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4'>
                                    <h1 className='w-56'>State Tax</h1>
                                    <h1>$8.00</h1>
                                </div>
                                <div className='flex mb-8 border-b-2 pb-4'>
                                    <h1 className='text-base font-semibold w-56'>Total</h1>
                                    <h1 className='text-xl font-bold text-[#3577F0]'>${Total}</h1>
                                </div>
                                <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10'>
                                    <Link to="/Checkout" href="" className='
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
                                      '>Process to Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='PAGES-FOOTER'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Cart
