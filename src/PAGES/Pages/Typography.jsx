import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Typography = () => {
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

                <section className='container mx-auto my-[100px]'>
                    <div className='grid grid-cols-2 text-[#292930] font-semibold '>
                        <div className='mr-[15px]'>
                            <h1 className='text-[46px] mb-[30px]'>h1 - A Visual Type Scale</h1>
                            <h2 className='text-[36px] mb-[30px]'>h2 - A Visual Type Scale</h2>
                            <h3 className='text-[28px] mb-[30px]'>h3 - A Visual Type Scale</h3>
                            <h4 className='text-[24px] mb-[30px]'>h4 - A Visual Type Scale</h4>
                            <h5 className='text-[20px] mb-[30px]'>h5 - A Visual Type Scale</h5>
                            <h6 className='text-[18px] mb-[30px]'>h6 - A Visual Type Scale</h6>
                            <div className='text-gray-500 font-normal'>
                                <p className='text-base mb-[30px]'>B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
                                <p className='text-sm mb-[30px]'>B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
                                <p className='text-xs'>B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
                            </div>
                        </div>

                        <div className='mx-[15px]'>
                            <h1 className='text-[46px] mb-[30px]'>46px</h1>
                            <h2 className='text-[36px] mb-[30px]'>36px</h2>
                            <h3 className='text-[28px] mb-[30px]'>28px</h3>
                            <h4 className='text-[24px] mb-[30px]'>24px</h4>
                            <h5 className='text-[20px] mb-[30px]'>20px</h5>
                            <h6 className='text-[18px] mb-[30px]'>18px</h6>
                        </div>
                    </div>
                </section>

                <section className='PAGES-FOOTER '>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Typography
