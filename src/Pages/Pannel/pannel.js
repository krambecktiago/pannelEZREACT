import React from 'react'


//components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


//estilização
import './pannel.css'

const Pannel = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className='main-content'>
      </div>
      <footer>
        <Footer/>
      </footer>
    </main>
  )
}

export default Pannel