import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home = () => {
    return(
        <Layout>
            <h1>Home</h1>
            <h2>Full s stack web developer, living in beatiful Luanda</h2>
            <p>Need a developer <Link to="/contact">Contact me </Link></p>
        </Layout>
    )
}

export default Home