import React from 'react'
import Header from '../components/homePageComponent/heder/Heder'
import Hero from '../components/homePageComponent/hero/Hero'
import Footer from '../components/homePageComponent/footer/Footer'
import Hero2 from '../components/homePageComponent/Hero2/Hero2'

function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <Hero2/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home