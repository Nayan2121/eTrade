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





export default function AllPages() {
  return (
    <>

      {/* HOME-SECTION-COMPONENTS */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error404/>}></Route>
          <Route path='/ShopWithSidebar' element={<ShopWithSidebar/>}></Route>
          <Route path='/ShopNoSidebar' element={<ShopNoSidebar/>}></Route>
          <Route path='/ProductV1' element={<ProductV1/>}></Route>
          <Route path='/ProductV2' element={<ProductV2/>}></Route>
          <Route path='/ProductV3' element={<ProductV3/>}></Route>
          <Route path='/ProductV4' element={<ProductV4/>}></Route>
          <Route path='/ProductV5' element={<ProductV5/>}></Route>
          <Route path='/ProductV6' element={<ProductV6/>}></Route>
          <Route path='/ProductV7' element={<ProductV7/>}></Route>
          
        </Routes>
      </BrowserRouter>

      {/* <Home/>  */}


      {/* SHOP-SECTION-COMPONENTS  */}

      {/* <ShopWithSidebar/> */}
      {/* <ShopNoSidebar /> */}
      {/* <ProductV1 /> */}
      {/* <ProductV2 /> */}
      {/* <ProductV3 /> */}
      {/* <ProductV4 /> */}
      {/* <ProductV5 /> */}
      {/* <ProductV6 /> */}
      {/* <ProductV7 /> */}


      {/* PAGES-SECTION-COMPONENTS  */}

      {/* <Wishlist/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Account/> */}
      {/* <SignUp/>  */}
      {/* <SignIn/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      {/* <PrivacyPolicy/> */}
      {/* <ComingSoon/> */}
      {/* <Error404 /> */}
      {/* <Typography/> */}

      {/* ABOUT-SECTION-COMPONENT  */}
      {/* <About /> */}

      {/* BLOG-SECTION-CPMPONENTS  */}
      {/* <BlogList /> */}
      {/* <BlogGrid/> */}
      {/* <StandardPost /> */}
      {/* <GallaryPost/> */}
      {/* <VideoPost/> */}
      {/* <AudioPost/> */}
      {/* <QuotePost/> */}

      {/* CONTACT-SECTION-COMPONENT  */}
      {/* <Contact />  */}
    </>
  )
}

