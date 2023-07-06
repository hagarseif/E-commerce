import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import Services from '../components/Services/Services'

function Home() {
  return (
    <div className='home'>
            <Navbar/>
            <Main/>
            <Services/>
    </div>
  )
}

export default Home