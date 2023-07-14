import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import Services from '../components/Services/Services'
import Offers from '../components/Offers/Offers'
import Products from '../components/Products/Products'
import Kids from '../components/kids/Kids'
import Shopping from '../components/Shopping/Shopping'
import Brands from '../components/Brands/Brands'
import Fashon from '../components/Fashon/Fashon'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
            <Navbar/>
            <Main/>
            <Services/>
            <Offers/>
            <Products/>
            <Kids/>
            <Shopping/>
            <Brands/>
            <Fashon/>
            <Footer/>
    </div>
  )
}

export default Home