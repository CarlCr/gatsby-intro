import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const About = () => {
    return(
        <Layout>
            <h1>About</h1>
            <h2>Full s stack web developer, living in beatiful Luanda</h2>
            <p><Link to="/contact"></Link> contact me</p>
        </Layout>
    )
}

export default About