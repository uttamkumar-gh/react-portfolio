import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Work from './components/Work/Work'
import Launch from './components/Lauch/Launch'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/testimonial'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Work/>
      <Launch/>
      <Card/>
      <Testimonial/>
      <Blog/>
      <Contact/>
    </>
  )
}

export default App
