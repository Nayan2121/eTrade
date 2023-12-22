import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 }
        default:
            return state
    }
}

function SideCart() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTWO, dispatchTwo] = useReducer(reducer, initialState)
    const [countTHREE, dispatchThree] = useReducer(reducer, initialState)

    return (
        <>
            <div className='h-screen relative bg-transparent '>


                <div className='absolute right-0 px-[50px] py-[60px]  h-[100%] bg-slate-300 z-10'>
                    <div className='flex justify-between py-4 border-b-2 border-gray-100'>
                        <h1 className='text-4xl font-semibold'>Cart review</h1>
                        <i class="fa-solid fa-xmark text-xs w-8 h-8 rounded-full bg-[#F6F7FB] text-center leading-7 ml-4 cursor-pointer hover:border-[#3577F0] hover:ring-2 duration-300 "></i>
                    </div>
                    <div>
                        <div className='grid grid-cols-4 mt-8 border-b border-gray-100'>
                            <div className='flex'>
                                <img className="h-24 w-24 cursor-pointer relative mt-3 mx-3 mb-5" src="./src/assets/pages/wishlist/asset 2.png"></img>
                                <div className='absolute'>
                                    <i class="fa-solid fa-xmark text-xs w-6 h-6 rounded-full bg-[#F6F7FB] text-center leading-7 cursor-pointer hover:text-white hover:bg-[#3577F0] hover:ring-2 duration-300 ring-white ring-2"></i>
                                </div>
                            </div>
                            <div className='my-4 col-span-2'>
                                <p>
                                    <span className='text-[#FFA800]'>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    (64)
                                </p>
                                <h1 className='font-semibold'>Wireless PS Handler</h1>
                                <p>$155.00</p>
                            </div>
                            <div className='flex items-center'>
                                <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatch({ type: 'decrement' })}>-</span>
                                <h1 className='font-semibold text-lg mx-5'>{count.firstCounter}</h1>
                                <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatch({ type: 'increment' })}>+</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-4 mt-8 border-b border-gray-100'>
                            <div className='flex'>
                                <img className="h-24 w-24 cursor-pointer relative mt-3 mx-3 mb-5" src="./src/assets/home/asset 22.png"></img>
                                <div className='absolute'>
                                    <i class="fa-solid fa-xmark text-xs w-6 h-6 rounded-full bg-[#F6F7FB] text-center leading-7 cursor-pointer hover:text-white hover:bg-[#3577F0] hover:ring-2 duration-300 ring-2 ring-white"></i>
                                </div>
                            </div>
                            <div className='my-4 col-span-2'>
                                <p>
                                    <span className='text-[#FFA800]'>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    (4)
                                </p>
                                <h1 className='font-semibold'>Gradient Light Keyboard</h1>
                                <p>$255.00</p>
                            </div>
                            <div className='flex items-center'>
                                <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatchTwo({ type: 'decrement' })}>-</span>
                                <h1 className='font-semibold text-lg mx-5'>{countTWO.firstCounter}</h1>
                                <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatchTwo({ type: 'increment' })}>+</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-4  mt-8 border-b border-gray-100'>
                            <div className='flex'>
                                <img className="h-24 w-24 cursor-pointer relative mt-3 mx-3 mb-5 " src="./src/assets/home/asset 23.png"></img>
                                <div className='absolute'>
                                    <i class="fa-solid fa-xmark text-xs w-6 h-6 rounded-full bg-[#F6F7FB] text-center leading-7 cursor-pointer hover:text-white hover:bg-[#3577F0] hover:ring-2 duration-300 ring-2 ring-white"></i>
                                </div>
                            </div>
                            <div className='py-4 col-span-2'>
                                <p>
                                    <span className='text-[#FFA800]'>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    (4)
                                </p>
                                <h1 className='font-semibold'>HD CC Camera</h1>
                                <p>$200.00</p>
                            </div>
                            <div className='flex items-center'>
                                <span className='bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatchThree({ type: 'decrement' })}>-</span>
                                <h1 className='font-semibold text-lg mx-5'>{countTHREE.firstCounter}</h1>
                                <span className='bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer' onClick={() => dispatchThree({ type: 'increment' })}>+</span>
                            </div>
                        </div>
                    </div>

                    <div className='border-t mt-28'>
                        <div className='flex justify-between mt-4 font-bold text-lg'>
                            <h1>Subtotal:</h1>
                            <h1>$610.00</h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-5 mt-6'>
                        <div className='relative group z-10'>
                            <a href='#' className='absolute px-[75px] py-4 text-white font-bold rounded-md bg-[#3577f0] 
                                before:content-[""]
                                before:w-[220px]
                                before:[50px]
                                before:bg-[#3577f0]
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                            >View Cart</a>
                        </div>
                        <div className='relative group z-10 right-0'>
                            <a href='#' className='absolute px-[75px] py-4 text-white font-bold rounded-md bg-[#ff497c] 
                                before:content-[""]
                                before:w-[220px]
                                before:[50px]
                                before:bg-[#ff497c]
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                            >Checkout</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SideCart