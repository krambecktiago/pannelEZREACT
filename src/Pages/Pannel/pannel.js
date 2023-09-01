import React from 'react'


//components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


//estilização
import './pannel.css'

const Pannel = () => {
  return (
    <main className='main-pannel'>
      <header>
        <Header />
      </header>
      <div className='main-container'>
      </div>
      <footer>
        <Footer/>
      </footer>
    </main>
  )
}

export default Pannel