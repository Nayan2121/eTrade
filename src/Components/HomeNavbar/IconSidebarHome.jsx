import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/action'

const IconSidebarHome = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData)

    const cartData = useSelector((state) => state.cartData);

    let amount = cartData.length && cartData.map((item) => item.rate).reduce((prev, next) => prev + next)


    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''} `}>
                <div className="absolute right-10 top-[70px]" onClick={onClose}>
                    <div className='flex justify-center items-center h-10 w-10 bg-[#F6F7FB] rounded-full cursor-pointer hover:bg-[#3577F0] hover:text-white duration-300'>
                        <i class="fa-solid fa-xmark text-base"></i>
                    </div>
                </div>
                <div
                    className={`fixed inset-0 -z-50 bg-black bg-opacity-60 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={onClose}>
                </div>

                <div className='p-10 bg-white '>
                    <div className='flex justify-between items-center mt-8 border-b-[2px] border-[#F6F7FB] pb-7 '>
                        <h1 className='text-3xl font-bold text-[#27272E]'>Cart review</h1>
                    </div>

                    <div className='w-full overflow-auto h-[615px] px-5 '>
                        {
                            cartData.map((item => {
                                return (
                                    <>
                                        <div>
                                            <div key={item.id} className='mt-10 flex relative border-b border-[#F6F7FB] pb-7 '>
                                                <div>
                                                    <div onClick={() => dispatch(removeFromCart(item.id))} className='absolute -top-3 -left-3 ring-2 ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:bg-[#3577F0] hover:text-white text-black  duration-300'>
                                                        <i class="fa-solid fa-xmark text-sm "></i>
                                                    </div>
                                                    <Link to="/ProductV1">
                                                        <img className="h-24 w-32 object-cover rounded-md  cursor-pointer" src={item.image}></img>
                                                    </Link>
                                                </div>
                                                <div className='flex justify-between w-full ml-8'>
                                                    <div>
                                                        <div className='flex items-center'>
                                                            <span className='text-[#FFDC60] text-sm'>
                                                                <i class="ri-star-s-fill"></i>
                                                                <i class="ri-star-s-fill"></i>
                                                                <i class="ri-star-s-fill"></i>
                                                                <i class="ri-star-s-fill"></i>
                                                                <i class="ri-star-s-fill"></i>
                                                            </span>
                                                            <div>
                                                                <h1 className='text-xs font-bold ml-2'>(64)</h1>
                                                            </div>
                                                        </div>
                                                        <div className='my-2'>
                                                            <Link to="/ProductV3" className="text-lg  font-bold text-[#292930] hover:text-[#3577F0] cursor-pointer duration-300 ">
                                                                {item.name}
                                                            </Link>
                                                        </div>
                                                        <p className="mr-16 text-[#292930] text-xl"><span>$</span>{item.rate}</p>
                                                    </div>

                                                    <div className='flex items-center'>
                                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => dispatch(decrementQuantity(item.id))}>
                                                            <i class="fa-solid fa-minus text-xs"></i>
                                                        </button>

                                                        <h1 className='font-semibold text-lg w-14 text-center'>{item.quantity}</h1>

                                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch(incrementQuantity(item.id))}>
                                                            <i class="fa-solid fa-plus text-xs"></i>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }))
                        }
                    </div>

                    <div className='mt-8'>
                        <div className='flex justify-between text-xl font-bold text-[#27272E]'>
                            <p>Subtotal:</p>
                            <p>${amount}</p>
                        </div>

                        <div className='flex mt-10'>
                            <div className='relative text-center w-full py-4 rounded-md text-white text-lg font-bold z-10 mr-5'>
                                <Link to="/Cart" href="" className='
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
                                      '>View Cart</Link>
                            </div>
                            <div className='relative text-center w-full py-4 rounded-md text-white text-lg font-bold z-10 ml-5'>
                                <Link to="/Checkout" href="" className='
                                    before:absolute
                                    before:content-[""]
                                    before:bg-[#ff497c]
                                    before:top-0
                                    before:bottom-0
                                    before:left-0
                                    before:right-0
                                    before:hover:scale-105
                                    before:duration-300
                                    before:rounded-md
                                    before:-z-10
                                      '>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconSidebarHome
