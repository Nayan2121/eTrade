import React from 'react'

const SubscribePhoto = () => {
    return (
        <>
            {/* subcribe-photos  */}
            <div className='Newsletter relative mt-9 container mx-auto'>
                <img src="./src/assets/home/asset 65.jpeg" className='w-full h-96 rounded-md object-cover' alt="" />

                <div className='absolute top-24 left-32'>
                    <div className='flex mb-3'>
                        <i className="ri-mail-open-fill h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
                        <h1 className='text-[#3577F0] font-bold text-sm flex items-center ml-2'>Newsletter</h1>
                    </div>

                    <h1 className='text-4xl font-sans font-bold mb-8 text-[#292930] tracking-wide'>Get weekly update</h1>

                    <div className='flex'>
                        <input type='text' className=' w-96 px-14 py-4 rounded-md placeholder-gray-500 outline-none caret-transparent focus:caret-black' placeholder=' example@gmail.com'>
                        </input>
                        <img src="./src/assets/home/asset 66.png" className='absolute top-[125px] left-7' alt="" />

                        <div className='relative group z-10'>
                            <a href='#' className='absolute ml-4 px-9 py-4 text-white font-bold rounded-md bg-[#292930] 
                                before:content-[""]
                                before:w-[140px]
                                before:[50px]
                                before:bg-[#292930]
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                            >Subscribe</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SubscribePhoto
