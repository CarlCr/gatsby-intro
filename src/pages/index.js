import React from 'react'
import { Link } from 'gatsby'

const Home = () => {
    return(
        <div>
            <h1>Hi Iam Carlos Garcia</h1>
            <h2>Full s stack web developer, living in beatiful Luanda</h2>
            <p>Need a developer <Link to="/contact">Contact me </Link></p>
        </div>
    )
}

export default Home