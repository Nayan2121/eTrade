import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, wishlistRemove } from '../../redux/action'

const Wishlist = () => {

    const dispatch = useDispatch();
    const wishData = useSelector((state) => state.wishData);

    return (
        <>
            <div>
                <section className='PAGES-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='PAGES-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='PAGES-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='TABLE-LIST'>
                    <div className='container mx-auto my-[100px]'>
                        <div>
                            <h1 className="text-2xl font-semibold text-[#292930]">
                                My Wish List on eTrade
                            </h1>
                        </div>

                        <div>
                            <div className="py-5 flex justify-around items-center bg-[#F6F7FB] text-[#292930] rounded-md mt-5">
                                <h1 className="text-xl font-semibold ml-6">Product</h1>
                                <h1 className="text-xl font-semibold ml-48">Unit Price</h1>
                                <h1 className="text-xl font-semibold mr-64">Stoke Status</h1>
                            </div>

                            <div className='w-full overflow-auto h-[300px] px-5'>

                                {
                                    wishData.map((item => {
                                        return (
                                            <>
                                                <div key={item.id} className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                                    <div className='flex items-center '>
                                                        <div onClick={() => dispatch(wishlistRemove(item.id))} className=' flex justify-center items-center h-8 w-8 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  duration-300 ml-4'>
                                                            <i class="fa-solid fa-xmark text-xs"></i>
                                                        </div>

                                                        <div>
                                                            <img className="h-20 w-20 ml-20 cursor-pointer" src={item.image}></img>
                                                        </div>

                                                    </div>
                                                    <div className="text-xl  w-72 font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer -ml-32 duration-300">
                                                        {item.name}
                                                    </div>
                                                    <p className="mr-12  w-36 text-gray-500 font-semibold text-xl"><span>$</span>{item.newprice}</p>
                                                    <p className="mr-20 w-20 text-xl text-gray-500 font-semibold ">
                                                        In Stock
                                                    </p>
                                                    <div onClick={() => dispatch(addToCart(item))} className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-[#3577F0] duration-300">
                                                        Add to Cart
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }))
                                }

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

export default Wishlist
