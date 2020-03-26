import React from 'react'
import Header from '../components shared/Header/navbar'
import Footer from '../components shared/Footer/footer'
import '../styles/index.scss'
const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout