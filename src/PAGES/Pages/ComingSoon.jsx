import React from 'react'

const ComingSoon = () => {
    return (
        <>
            <div className='flex h-screen items-center'>
                <img className='h-screen' src="../src/assets/pages/coming soon/asset 1.jpeg" alt="" />
                <div className='text-center ml-72'>
                    <img className='mx-auto mb-6' src="../src/assets/pages/coming soon/asset 0.png" alt="" />
                    <h1 className='text-4xl font-bold text-[#27272E] mb-4'>Our new website is on the way</h1>
                    <p className='text-gray-500 mb-[30px]'>We're coming soon! We're working hard to give <br /> you the best experince.</p>
                    <div className='flex '>
                        <div className='bg-[#3577F0] text-white rounded-full py-5 px-9 mx-auto shadow-2xl shadow-blue-400'>
                            <p className='flex justify-center text-3xl font-semibold'>0</p>
                            <p className='text-sm'>Day</p>
                        </div>
                        <div className='bg-[#3577F0] text-white rounded-full py-5 px-8 mx-auto shadow-2xl shadow-blue-400'>
                            <p className='flex justify-center text-3xl font-semibold'>00</p>
                            <p className='text-sm'>Hrs</p>
                        </div>
                        <div className='bg-[#3577F0] text-white rounded-full py-5 px-8 mx-auto shadow-2xl shadow-blue-400'>
                            <p className='flex justify-center text-3xl font-semibold'>00</p>
                            <p className='text-sm'>Min</p>
                        </div>
                        <div className='bg-[#3577F0] text-white rounded-full py-5 px-8 mx-auto shadow-2xl shadow-blue-400'>
                            <p className='flex justify-center text-3xl font-semibold'>00</p>
                            <p className='text-sm'>Sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingSoon
