import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pageContainer">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout