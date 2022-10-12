import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer/Footer'
import style from './index.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
