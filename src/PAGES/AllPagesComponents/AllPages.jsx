import React from 'react'

import Home from '../Home/Home'

import ShopWithSidebar from '../Shop/ShopWithSidebar'
import ShopNoSidebar from '../Shop/ShopNoSidebar'
import ProductV1 from '../Shop/ProductV1'
import ProductV2 from '../Shop/ProductV2'
import ProductV3 from '../Shop/ProductV3'
import ProductV4 from '../Shop/ProductV4'
import ProductV5 from '../Shop/ProductV5'
import ProductV6 from '../Shop/ProductV6'
import ProductV7 from '../Shop/ProductV7'

import Wishlist from '../Pages/Wishlist'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Account from '../Pages/Account'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import ForgotPassword from '../Pages/ForgotPassword'
import ResetPassword from '../Pages/ResetPassword'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import ComingSoon from '../Pages/ComingSoon'
import Error404 from '../Pages/Error404'
import Typography from '../Pages/Typography'

import About from '../About/About'

import BlogList from '../Blog/BlogList'

import Contact from '../Contact/Contact'
import BlogGrid from '../Blog/BlogGrid'
import StandardPost from '../Blog/StandardPost'
import GallaryPost from '../Blog/GallaryPost'
import VideoPost from '../Blog/VideoPost'
import AudioPost from '../Blog/AudioPost'
import QuotePost from '../Blog/QuotePost'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Termsofuse from '../../Components/Termsofuse'
import ScrollToTop from '../../Components/ScrollToTop'
import ScrollIndicator from '../../Components/ScrollIndicator'



export default function AllPages() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ScrollIndicator />
          <ScrollToTop />
          <Routes>

            {/* HOME-SECTION-COMPONENTS */}
            <Route path='/' element={<Home />}></Route>

            {/* SHOP-SECTION-COMPONENTS  */}
            <Route path='/ShopWithSidebar' element={<ShopWithSidebar />}></Route>
            <Route path='/ShopNoSidebar' element={<ShopNoSidebar />}></Route>
            <Route path='/ProductV1' element={<ProductV1 />}></Route>
            <Route path='/ProductV2' element={<ProductV2 />}></Route>
            <Route path='/ProductV3' element={<ProductV3 />}></Route>
            <Route path='/ProductV4' element={<ProductV4 />}></Route>
            <Route path='/ProductV5' element={<ProductV5 />}></Route>
            <Route path='/ProductV6' element={<ProductV6 />}></Route>
            <Route path='/ProductV7' element={<ProductV7 />}></Route>

            {/* PAGES-SECTION-COMPONENTS  */}
            <Route path='/Wishlist' element={<Wishlist />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/Checkout' element={<Checkout />}></Route>
            <Route path='/Account' element={<Account />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
            <Route path='/SignIn' element={<SignIn />}></Route>
            <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>
            <Route path='/ResetPassword' element={<ResetPassword />}></Route>
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}></Route>
            <Route path='/ComingSoon' element={<ComingSoon />}></Route>
            <Route path='/Error404' element={<Error404 />}></Route>
            <Route path='/Typography' element={<Typography />}></Route>

            {/* ABOUT-SECTION-COMPONENT  */}
            <Route path='/About' element={<About />}></Route>

            {/* BLOG-SECTION-COMPONENTS  */}
            <Route path='/BlogList' element={<BlogList />}></Route>
            <Route path='/BlogGrid' element={<BlogGrid />}></Route>
            <Route path='/StandardPost' element={<StandardPost />}></Route>
            <Route path='/GallaryPost' element={<GallaryPost />}></Route>
            <Route path='/VideoPost' element={<VideoPost />}></Route>
            <Route path='/AudioPost' element={<AudioPost />}></Route>
            <Route path='/QuotePost' element={<QuotePost />}></Route>

            {/* CONTACT-SECTION-COMPONENT  */}
            <Route path='/Contact' element={<Contact />}></Route>

            {/* universal page  */}
            <Route path='/*' element={<Error404 />}></Route>

            {/* Termsofuse  */}
            <Route path='/Termsofuse' element={<Termsofuse />}></Route>

          </Routes>
        </BrowserRouter>

      </div>

    </>
  )
}

