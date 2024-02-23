import React from 'react'

const HomeService = () => {
    return (
        <>
            <div className=" my-20 text-[#292930] container mx-auto">
                <div className="text-center">
                    <p className="text-[#FF497C] font-medium"><i class="ri-thumb-up-line bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Why Us</p>
                    <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Why People Choose Us</h1>
                </div>

                <div className="grid grid-cols-5 gap-x-10  mt-20">
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src="./src/assets/Home/asset 40.png" alt="" />
                        </div>
                        <p>Fast & Secure Delivery </p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src="./src/assets/Home/asset 41.png" alt="" />
                        </div>
                        <p>100% Guarantee On Product</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src="./src/assets/Home/asset 42.png" alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src="./src/assets/Home/asset 43.png" alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src="./src/assets/Home/asset 44.png" alt="" />
                        </div>
                        <p>Next Level Pro Quality</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService
