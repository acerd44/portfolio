import React from 'react'
import NavBar from './sections/NavBar'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

const Home = () => {
    return (
        <main>
            <NavBar />
            <div className="container-fluid p-0">
                <About />
                <hr className="m-0" />
                <Experience />
                <hr className="m-0" />
                <Education />
                <hr className="m-0" />
                <Skills />
                <hr className="m-0" />
                <Projects />
                <Footer />
            </div>
        </main>
    )
}

export default Home