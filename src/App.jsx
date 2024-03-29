import React from 'react'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App