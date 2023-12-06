import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

const ShopNoSidebar = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar/>
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='SHOP-SPEAKER'>
                    <Speaker p1="My Account" p2="Explore All Products" />
                </section>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ShopNoSidebar


